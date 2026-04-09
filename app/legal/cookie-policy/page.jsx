"use client";

import LegalPageShell from "@components/public/legal/LegalPageShell/LegalPageShell";

const sections = [
    {
        id: "que-son",
        label: "¿Qué son las cookies?",
        description:
            "Las cookies son pequeños archivos de texto que se guardan en tu dispositivo cuando visitas nuestro sitio. Nos ayudan a recordar información útil para que tu experiencia sea más fluida, segura y personalizada.",
        paragraphs: [
            "En una escuela de artes visuales en línea, las cookies permiten conservar ciertas preferencias de navegación y facilitar funciones básicas relacionadas con el acceso a tu cuenta, el uso de la plataforma y la continuidad de tu experiencia.",
            "Las cookies no reemplazan a tu cuenta ni almacenan por sí solas toda tu información personal, pero sí pueden ayudar a que funciones importantes del sitio respondan de manera correcta."
        ]
    },
    {
        id: "por-que-usamos",
        label: "¿Por qué usamos cookies?",
        description:
            "Utilizamos cookies para que la plataforma funcione correctamente y para mejorar la experiencia general del usuario.",
        items: [
            {
                title: "Acceso y sesión.",
                text: "Nos ayudan a mantener tu sesión activa y a reconocer que has iniciado sesión correctamente."
            },
            {
                title: "Preferencias de navegación.",
                text: "Permiten recordar ciertas decisiones dentro del sitio, como avisos ya leídos o configuraciones básicas de uso."
            },
            {
                title: "Experiencia del alumno.",
                text: "Pueden apoyar funciones relacionadas con el acceso a cursos, navegación entre lecciones y continuidad de tu uso dentro de la plataforma."
            },
            {
                title: "Seguridad y estabilidad.",
                text: "Contribuyen al funcionamiento técnico del sitio y a prevenir comportamientos anómalos o errores de uso."
            }
        ]
    },
    {
        id: "tipos",
        label: "Tipos de cookies que podemos usar",
        description:
            "La plataforma puede utilizar distintos tipos de cookies, según las funciones activas en cada momento.",
        items: [
            {
                title: "Cookies esenciales.",
                text: "Son necesarias para que el sitio funcione. Sin ellas, acciones como iniciar sesión, acceder al panel del usuario, comprar cursos o mantener la sesión podrían no funcionar correctamente."
            },
            {
                title: "Cookies funcionales.",
                text: "Permiten recordar ciertas preferencias y hacer la navegación más cómoda dentro de la escuela."
            },
            {
                title: "Cookies relacionadas con pagos.",
                text: "Cuando realizas una compra, pueden intervenir tecnologías necesarias para completar el proceso de pago de forma segura mediante servicios de terceros."
            },
            {
                title: "Cookies de medición o rendimiento.",
                text: "Si en el futuro implementamos herramientas de análisis, estas cookies servirán para entender el uso general del sitio y mejorar la plataforma. Actualmente, esto podrá depender de las herramientas activas en cada momento."
            }
        ]
    },
    {
        id: "datos-relacionados",
        label: "Información relacionada con tu uso de la plataforma",
        description:
            "Nuestro sitio puede gestionar información vinculada al funcionamiento de tu cuenta y tu experiencia como estudiante.",
        items: [
            {
                title: "Registro y acceso.",
                text: "Cuando te registras, utilizas tu nombre y correo electrónico para crear y administrar tu cuenta."
            },
            {
                title: "Cursos, compras y progreso.",
                text: "La plataforma puede almacenar y mostrar tu historial de compras, acceso a contenidos, avance en lecciones y otras funciones necesarias para brindarte el servicio."
            },
            {
                title: "Pagos.",
                text: "Los pagos se procesan mediante servicios externos especializados. No almacenamos directamente los datos completos de tu tarjeta en nuestro sitio."
            }
        ]
    },
    {
        id: "terceros",
        label: "Servicios de terceros",
        description:
            "Algunas funciones del sitio pueden depender de proveedores externos que ayudan a operar la plataforma.",
        paragraphs: [
            "Por ejemplo, un proveedor de pagos como Stripe puede utilizar tecnologías propias necesarias para verificar transacciones, prevenir fraude y completar pagos de forma segura.",
            "Estos terceros gestionan su propia infraestructura y pueden tener sus propias políticas de privacidad y cookies. Te recomendamos revisar sus condiciones cuando sea necesario."
        ]
    },
    {
        id: "gestionar",
        label: "Cómo puedes gestionar las cookies",
        description:
            "Puedes controlar o eliminar cookies desde la configuración de tu navegador.",
        items: [
            {
                title: "Bloquear cookies.",
                text: "Tu navegador puede permitirte bloquear parte o la totalidad de las cookies."
            },
            {
                title: "Eliminar cookies guardadas.",
                text: "También puedes borrar cookies ya almacenadas en tu dispositivo."
            },
            {
                title: "Impacto en la experiencia.",
                text: "Si desactivas cookies esenciales, es posible que algunas funciones del sitio dejen de funcionar correctamente, como el acceso a tu cuenta, el uso de la plataforma o el proceso de compra."
            }
        ]
    },
    {
        id: "cambios",
        label: "Cambios en esta política",
        description:
            "Podemos actualizar esta Política de Cookies cuando sea necesario para reflejar cambios legales, técnicos o funcionales en la plataforma.",
        paragraphs: [
            "Cuando existan cambios relevantes, publicaremos la versión actualizada en esta misma página.",
            "Te recomendamos revisarla periódicamente si deseas mantenerte informado sobre cómo gestionamos este tipo de tecnologías dentro del sitio."
        ]
    },
    {
        id: "contacto",
        label: "Contacto",
        description:
            "Si tienes preguntas sobre esta Política de Cookies o sobre el tratamiento general de la información dentro de la plataforma, puedes escribirnos.",
        paragraphs: [
            "Correo de contacto: soporte@visualartsschool.com"
        ]
    }
];

export default function CookiePolicyPage() {
    return (
        <div>
            <LegalPageShell
                title="Política de Cookies"
                intro="Esta Política de Cookies explica de forma clara cómo nuestra Escuela de Artes Visuales utiliza cookies y tecnologías similares para ofrecer una experiencia segura, funcional y coherente dentro de la plataforma."
                sections={sections}
                lastUpdated="14 de marzo de 2026"
            />
        </div>
    );
}
