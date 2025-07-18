'use client'
import FooterHome from '@public/components/public/FooterHome'
import React, { useEffect, useState } from 'react'
import NavLogo from '@public/assets/icons/logo-navbar.webp'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const faqs = [
    {
        question: "¿Cómo compro un curso?",
        answer: "Primero crea una cuenta, luego ve a la página del curso y haz clic en el botón 'Comprar'. Sigue los pasos para completar el pago de forma segura."
    },
    {
        question: "¿Qué métodos de pago aceptan?",
        answer: "Aceptamos tarjetas de crédito y débito a través de Stripe."
    },
    {
        question: "¿Dónde encuentro mis cursos comprados?",
        answer: "Tus cursos comprados aparecerán en tu panel de usuario (perfil), en la sección 'Mis Contenidos'."
    },
    {
        question: "¿Puedo solicitar un reembolso?",
        answer: "No, no puedes solicitar un reembolso después de la compra. Contáctanos para más información."
    },
    {
        question: "¿Cómo contacto soporte?",
        answer: "Puedes escribirnos a faridruano@visualartsschool.com."
    },
    {
        question: "¿Puedo acceder a mis cursos desde cualquier dispositivo?",
        answer: "Sí, puedes acceder desde cualquier computadora, tablet o celular con conexión a internet y navegador actualizado."
    },
    {
        question: "¿Cuánto tiempo tendré acceso a los cursos que compro?",
        answer: "Tendrás acceso ilimitado y permanente a los cursos individuales que compres, mientras tu cuenta esté activa."
    },
    {
        question: "¿Qué incluye la suscripción mensual?",
        answer: "La suscripción mensual te da acceso completo a todos los cursos, masterclasses y recursos mientras esté activa."
    },
    {
        question: "¿Puedo cancelar mi suscripción en cualquier momento?",
        answer: "Sí, puedes cancelar desde tu perfil. Seguirás teniendo acceso hasta el final del período que hayas pagado."
    },
    {
        question: "¿Puedo descargar los videos de los cursos?",
        answer: "No, los videos solo están disponibles para streaming dentro de la plataforma por razones de seguridad."
    }
];

const Help = () => {

    const router = useRouter()

    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);
    const [error, setError] = useState('');

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setError('');
        setSent(false);

        if (!form.name || !form.email || !form.message) {
            setError('Por favor completa todos los campos.');
            return;
        }

        try {
            const res = await fetch('/api/help', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (res.ok && data.success) {
                setSent(true);
                setForm({ name: '', email: '', message: '' });
            } else {
                setError(data.error || 'Hubo un error al enviar tu mensaje. Intenta de nuevo.');
            }
        } catch {
            setError('Hubo un error al enviar tu mensaje. Intenta de nuevo.');
        }
    };

    useEffect(() => {
        if (error || sent) {
            const timer = setTimeout(() => {
                setError('');
                setSent(false);
            }, 10000); // 10 segundos
            return () => clearTimeout(timer);
        }
    }, [error, sent]);

    return (
        <>
            <div className='help-page'>
                <div className="content-wrap">
                    <div className="return" onClick={() => router.push('/')}>
                        <Image src={NavLogo} width={50} height={'auto'} alt='Logo' />
                        <span> Regresar al Inicio</span>
                    </div>
                    <h1>Preguntas Frecuentes</h1>
                    <div className="faq-list">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="faq-item">
                                <h3>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                    <div className="help-form-container">
                        <h2>¿Necesitas ayuda? Escríbenos</h2>
                        <form onSubmit={handleSubmit} className="help-form">
                            <input
                                type="text"
                                name="name"
                                placeholder="Tu nombre"
                                value={form.name}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Tu correo"
                                value={form.email}
                                onChange={handleChange}
                            />
                            <textarea
                                name="message"
                                placeholder="¿En qué podemos ayudarte?"
                                value={form.message}
                                onChange={handleChange}
                                rows={6}
                            />
                            <button type="submit">Enviar</button>
                            <div className="form-notes">
                                {error && <div className="form-error">{error}</div>}
                                {sent && <div className="form-success">¡Mensaje enviado! Te responderemos pronto.</div>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <FooterHome />
        </>

    )
}

export default Help;