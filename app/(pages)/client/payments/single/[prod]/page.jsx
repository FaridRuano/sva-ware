'use client'
import { useSubscription } from '@libs/useSubscription';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';
import CheckoutForm from '@public/components/client/stripe/CheckOutForm';
import Image from '@node_modules/next/image';
import ArrowLeft from '@public/assets/icons/arrow-left.webp'
import ModalInfo from '@public/components/client/modals/ModalInfo';
import { useRouter } from '@node_modules/next/navigation';

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripeKey ? loadStripe(stripeKey) : Promise.reject("Stripe key missing");

const PaymentPage = ({ params }) => {

    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const [productInfo, setProductInfo] = useState(null);
    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');

    const { data: session } = useSession();
    const { subscription, isLoading } = useSubscription(session?.user?.email);
    const appearance = {
        theme: 'night', // or 'flat', 'night', 'none'
        variables: {
            colorPrimary: '#52ce93',
            colorBackground: '#181818',
            colorText: '#f2eee7',
            colorDanger: '#f0730c',
            colorSuccess: '#52ce93',
            borderRadius: '8px',
            fontFamily: 'Montserrat, Arial, sans-serif',
            spacingUnit: '6px',
            fontSizeBase: '14px',
        },
        rules: {
            '.Input': {
                borderColor: '#f2eee7',
            },
            '.Label': {
                color: '#f2eee7',
                fontWeight: '800',
            },
            '.Error': {
                color: '#d43535',
            },
        },
        labels: 'floating',
    };

    const { prod } = React.use(params)

    const formatCentsToUSD = (cents) => {
        if (typeof cents !== 'number') return '';
        return `${(cents / 100).toFixed(2)}`;
    }

    // Validate product existence
    useEffect(() => {
        if (!prod) {
            setError('No product specified.');
            setLoading(false);
            return;
        }
        setLoading(true);
        axios.get(`/api/products/${prod}/`)
            .then(res => {
                if (res.data && res.data.product) {
                    setProduct(res.data.product);
                    setError('');
                } else {
                    setError('Product not found.');
                }
            })
            .catch(() => setError('Product not found.'))
            .finally(() => setLoading(false));
    }, [prod]);


    // Create PaymentIntent only if product exists
    useEffect(() => {
        if (!product || !session?.user?.email) return;
        axios.get(`/api/client/data?email=${session.user.email}&action=purchases`)
            .then(userRes => {
                const purchasedProducts = userRes.data?.purchasedProducts || []
                const alreadyPurchased = purchasedProducts.some(
                    (purchase) => purchase.product === prod
                )
                if (alreadyPurchased) {
                    setError('Ya has comprado este producto.');
                    setLoading(false);
                    return;
                } else {
                    axios.post('/api/payments/single', { productId: prod, email: session.user.email })
                        .then(res => {
                            if (res.data && res.data.clientSecret) {
                                setClientSecret(res.data.clientSecret);
                                setProductInfo(res.data.productInfo);
                                setError('');
                            } else {
                                setError('Could not create payment.');
                            }
                        })
                        .catch(() => setError('Could not create payment.'));
                }
            })
            .catch(() => setError('Could not verify user purchases.'));

    }, [product, session, prod]);

    useEffect(() => {
        stripePromise.catch(() => { });
    }, []);

    if (loading || isLoading) {
        return <div className="client-content-container loading"></div>;
    }

    if (error) {
        return <div className="client-content-container error">
            <ModalInfo mainText={error} active={true} setActive={() => router.push('/client')}/>
        </div>;
    }

    return (
        <div className="client-payment-container">
            <div className="back-home" onClick={() => window.history.back()}>
                <Image src={ArrowLeft} width={10} height={'auto'} alt='Arrow Left' />
                <span>
                    Regresar
                </span>
            </div>
            <div className="checkout-page">
                <div className="total-info">
                    <h2 className='title-total'>Resumen de compra</h2>
                    {productInfo && (
                        <div className="product-info">
                            <div className="img-holder">
                                {productInfo.imgUrl ? (
                                    <Image
                                        src={productInfo.imgUrl}
                                        width={150}
                                        height={150}
                                        alt={productInfo.name || 'Product Image'}
                                    />
                                ) : (
                                    <Image
                                        src={'/assets/imgs/products/product-introadobe.jpg'}
                                        width={150}
                                        height={150}
                                        alt="Default Cover"
                                    />
                                )}
                            </div>
                            <span>Producto</span>
                            <h2>{productInfo.name}</h2>
                            <span>Descripción</span>
                            <p className='descrip'>{productInfo.description}</p>
                            <span>Precio Total</span>
                            <p className='price'>${formatCentsToUSD(productInfo.price)}USD</p>
                        </div>
                    )}

                </div>
                <div className="pay-wall">
                    {clientSecret && stripePromise && (
                        <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
                            <CheckoutForm
                                product={productInfo._id}
                                client={session?.user?.email}
                                clientSecret={clientSecret}
                            />
                        </Elements>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
