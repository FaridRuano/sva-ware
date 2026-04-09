'use client'
import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement, } from '@stripe/react-stripe-js';
import { useRouter } from '@node_modules/next/navigation';
import ModalInfo from '../modals/ModalInfo';
import axios from '@node_modules/axios';

const CheckoutForm = ({ product, client, clientSecret, subscriptionId }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [infoModal, setInfoModal] = useState(false)
    const [infoModalText, setInfoModalText] = useState('')
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        if (!stripe || !elements) return;

        setLoading(true);
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Optionally, redirect after payment
                // return_url: window.location.origin + '/success',
            },
            redirect: 'if_required', // Prevents full-page redirect for most payment methods
        })

        const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret)


        if (error) {
            setMessage(error.message);
        } else {
            try {
                const succesPayment = await axios.post('/api/payments/recurrent/success', {
                    productId: product,
                    email: client,
                    paymentIntentId: paymentIntent.id,
                    subscriptionId: subscriptionId
                });

                if (succesPayment.data.success) {
                    // ✅ Compra guardada correctamente, continúa con el flujo
                    setMessage('Pago exitoso!');
                    setInfoModalText('¡Pago exitoso! Tu pago ha sido procesado correctamente.');
                    handleInfoModal()

                    

                    setTimeout(() => {
                        router.push('/client/profile');
                    }, 3500);
                } else {
                    // ⚠️ Algo salió mal aunque el request se completó
                    setMessage('Error al registrar la compra. Intenta nuevamente más tarde.');
                    setTimeout(() => {
                        router.push('/client');
                    }, 3500);

                }

            } catch (error) {
                // ❌ Error en el request (fallo de red, error interno, etc.)
                console.error('Error al guardar la compra:', error);
                setMessage('Hubo un problema al guardar la compra. Verificaremos los datos brevemente.');
                setTimeout(() => {
                    router.push('/client');
                }, 3500);
            }
        }
        setLoading(false);
    };

    const paymentElementOptions = {
        layout: {
            type: 'tabs',
            defaultCollapsed: false,
        }
    };

    const handleInfoModal = () => {
        setInfoModal(current => !current)
    }

    return (
        <>
            <ModalInfo mainText={infoModalText} active={infoModal} setActive={handleInfoModal} type='positive' closeable={false} />
            <div className="checkoutform">
                <form onSubmit={handleSubmit}>
                    <PaymentElement options={paymentElementOptions} />
                    <button
                        className='btn-pay'
                        type="submit"
                        disabled={!stripe || loading}
                    >
                        {loading ? 'Procesando...' : 'Pagar'}
                    </button>
                    {message && <div className={`pay-msg ${message.includes('exito') ? '' : 'error'}`} >{message}</div>}
                </form>
            </div>
        </>
    );
};

export default CheckoutForm;