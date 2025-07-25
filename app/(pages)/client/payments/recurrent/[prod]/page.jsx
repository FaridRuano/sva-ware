'use client'
import { useSubscription } from '@libs/useSubscription';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';
import CheckoutForm from '@public/components/client/stripe/CheckOutForm';

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripeKey ? loadStripe(stripeKey) : Promise.reject("Stripe key missing");

const PaymentPage = ({ params }) => {

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
        axios.post('/api/payments', { productId: prod, email: session.user.email })
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
    }, [product, session, prod]);

    useEffect(() => {
        stripePromise.catch(() => { });
    }, []);



    if (loading || isLoading) {
        return <div className="client-content-container loading">Loading...</div>;
    }

    if (error) {
        return <div className="client-content-container error">{error}</div>;
    }

    return (
        <div className="client-content-container">

            

            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
};

export default PaymentPage;
