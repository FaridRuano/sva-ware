"use client";

import LegalPageShell from "@components/public/legal/LegalPageShell/LegalPageShell";

const sections = [
    {
        id: "introduccion",
        label: "Alcance de esta política",
        description:
            "Esta Política de Privacidad explica cómo nuestra Escuela de Artes Visuales recopila, utiliza, almacena y protege la información personal que nos proporcionas al usar la plataforma.",
        paragraphs: [
            "Nuestro objetivo es que entiendas de forma clara qué información puede estar vinculada a tu cuenta, cómo la usamos para ofrecerte acceso a cursos, compras, historial y progreso, y qué derechos tienes sobre esos datos.",
            "Esta política aplica al uso general del sitio web, al registro de usuarios, a la gestión de cuentas, al acceso a contenidos y a las funciones relacionadas con compras y soporte dentro de la plataforma."
        ]
    },
    {
        id: "datos-que-recopilamos",
        label: "Información que podemos recopilar",
        description:
            "Recopilamos únicamente la información necesaria para operar la plataforma y prestar correctamente nuestros servicios educativos.",
        items: [
            {
                title: "Datos de registro.",
                text: "Cuando creas una cuenta, podemos solicitar tu nombre y tu correo electrónico para identificarte dentro de la plataforma y gestionar tu acceso."
            },
            {
                title: "Datos de acceso y seguridad.",
                text: "Tu cuenta puede incluir credenciales de inicio de sesión y datos técnicos relacionados con la autenticación. Las contraseñas no deben almacenarse en texto plano y deben gestionarse mediante mecanismos seguros."
            },
            {
                title: "Información académica o de uso interno.",
                text: "Podemos almacenar tu progreso dentro de los cursos, lecciones completadas, historial de visualización, recursos adquiridos y otras acciones necesarias para ofrecer continuidad en tu experiencia como estudiante."
            },
            {
                title: "Historial de compras.",
                text: "La plataforma puede registrar qué cursos, recursos, masterclasses o suscripciones has adquirido, así como el estado general de esas compras."
            },
            {
                title: "Información técnica básica.",
                text: "Como parte del funcionamiento normal del sitio, pueden generarse registros técnicos o datos mínimos relacionados con el uso del sistema, navegación, seguridad o estabilidad."
            }
        ]
    },
    {
        id: "finalidad",
        label: "¿Para qué usamos tu información?",
        description:
            "Usamos la información personal y funcional de tu cuenta únicamente para operar la escuela y ofrecerte una experiencia útil, segura y coherente.",
        items: [
            {
                title: "Gestión de tu cuenta.",
                text: "Para crear, identificar, mantener y administrar tu perfil dentro de la plataforma."
            },
            {
                title: "Acceso a contenidos.",
                text: "Para permitirte ingresar a tus cursos, recursos, lecciones, clases y materiales adquiridos."
            },
            {
                title: "Continuidad de tu experiencia.",
                text: "Para guardar tu progreso, mostrar tu historial y facilitar que continúes donde lo dejaste."
            },
            {
                title: "Procesamiento de compras.",
                text: "Para gestionar la relación entre tu cuenta y los productos o servicios que has comprado dentro de la escuela."
            },
            {
                title: "Soporte y comunicación.",
                text: "Para responder consultas, resolver incidencias y, cuando corresponda, enviarte información importante relacionada con tu cuenta, acceso o compras."
            },
            {
                title: "Seguridad y prevención de uso indebido.",
                text: "Para proteger la plataforma, reducir riesgos técnicos y mantener la integridad del servicio."
            }
        ]
    },
    {
        id: "pagos-terceros",
        label: "Pagos y servicios de terceros",
        description:
            "Algunas funciones del sitio dependen de proveedores externos especializados.",
        paragraphs: [
            "Para procesar pagos de forma segura, la plataforma puede utilizar servicios de terceros como Stripe u otros proveedores equivalentes. Estos servicios pueden gestionar directamente información relacionada con el pago, validación de transacciones y prevención de fraude.",
            "Nuestra plataforma no necesita almacenar directamente los datos completos de tu tarjeta para ofrecer el servicio. El tratamiento de esa información puede depender principalmente del proveedor de pagos correspondiente.",
            "Además de los proveedores de pago, el sitio puede depender de otros servicios técnicos relacionados con autenticación, infraestructura, almacenamiento, distribución de contenido o funcionamiento general del sistema."
        ]
    },
    {
        id: "comparticion",
        label: "Cómo compartimos la información",
        description:
            "No vendemos tu información personal ni la compartimos de forma indiscriminada.",
        items: [
            {
                title: "Proveedores necesarios para operar el servicio.",
                text: "Podemos trabajar con terceros que ayudan a que la plataforma funcione, como servicios de pago, infraestructura, alojamiento, autenticación o soporte técnico."
            },
            {
                title: "Cumplimiento legal.",
                text: "Podríamos divulgar información cuando exista una obligación legal válida o cuando sea necesario para proteger derechos, seguridad o integridad de la plataforma."
            },
            {
                title: "Operación interna del servicio.",
                text: "La información solo se comparte cuando es razonablemente necesaria para prestar el servicio de forma segura y funcional."
            }
        ]
    },
    {
        id: "almacenamiento-conservacion",
        label: "Conservación y almacenamiento de datos",
        description:
            "La información asociada a tu cuenta puede conservarse mientras sea necesaria para mantener el servicio, tu acceso o el cumplimiento de obligaciones técnicas y operativas.",
        paragraphs: [
            "El tiempo de conservación puede variar según la naturaleza de la información. Por ejemplo, datos vinculados a tu cuenta, historial de compras o acceso a contenidos pueden mantenerse mientras tu cuenta siga activa o mientras sea necesario para la operación normal de la escuela.",
            "Cuando sea razonablemente posible y procedente, podremos eliminar o anonimizar ciertos datos que ya no sean necesarios para la prestación del servicio."
        ]
    },
    {
        id: "seguridad",
        label: "Seguridad de la información",
        description:
            "Tomamos medidas razonables para proteger la información almacenada en la plataforma.",
        items: [
            {
                title: "Protección de cuentas.",
                text: "Aplicamos medidas técnicas y de desarrollo orientadas a proteger el acceso de los usuarios a sus cuentas."
            },
            {
                title: "Buenas prácticas de autenticación.",
                text: "Las contraseñas y mecanismos de acceso deben gestionarse de forma segura y nunca mostrarse ni almacenarse de manera insegura."
            },
            {
                title: "Seguridad operativa.",
                text: "Buscamos reducir riesgos relacionados con accesos no autorizados, pérdida de datos o uso indebido del sistema."
            },
            {
                title: "Responsabilidad compartida.",
                text: "También te recomendamos utilizar contraseñas seguras, no compartir tus credenciales y proteger el acceso a tu dispositivo."
            }
        ]
    },
    {
        id: "derechos-usuario",
        label: "Tus derechos sobre la información",
        description:
            "Como usuario, puedes solicitar acciones relacionadas con tu información personal, según corresponda y dentro de los límites razonables del servicio.",
        items: [
            {
                title: "Acceso.",
                text: "Puedes solicitar información sobre los datos asociados a tu cuenta."
            },
            {
                title: "Corrección.",
                text: "Puedes pedir la actualización o corrección de información inexacta."
            },
            {
                title: "Eliminación.",
                text: "Puedes solicitar la eliminación de tu cuenta o de ciertos datos, siempre que ello no impida el cumplimiento de obligaciones legales, técnicas o contractuales aplicables."
            },
            {
                title: "Consultas y soporte.",
                text: "Si necesitas ayuda relacionada con tu información, puedes escribirnos por los canales de contacto indicados en esta página."
            }
        ]
    },
    {
        id: "menores",
        label: "Uso por menores de edad",
        description:
            "Si el sitio llegara a ser utilizado por menores de edad, el uso de la plataforma debería realizarse con la intervención o autorización de sus representantes legales cuando así corresponda.",
        paragraphs: [
            "Si detectamos que se ha proporcionado información personal de forma inadecuada o contraria a las condiciones de uso aplicables, podremos tomar medidas razonables para revisarla o eliminarla cuando proceda."
        ]
    },
    {
        id: "cambios",
        label: "Cambios en esta política",
        description:
            "Podemos actualizar esta Política de Privacidad para reflejar cambios legales, operativos, técnicos o funcionales dentro de la plataforma.",
        paragraphs: [
            "Cuando existan modificaciones relevantes, publicaremos la versión actualizada en esta misma página.",
            "Te recomendamos revisar esta política periódicamente para mantenerte informado sobre cómo gestionamos la información dentro de la escuela."
        ]
    },
    {
        id: "contacto",
        label: "Contacto",
        description:
            "Si tienes preguntas relacionadas con esta Política de Privacidad o con el tratamiento general de tus datos dentro de la plataforma, puedes contactarnos.",
        paragraphs: [
            "Correo de contacto: fruanocm2777@gmail.com"
        ]
    }
];

export default function PrivacyPolicyPage() {
    return (
        <div>
            <LegalPageShell
                title="Política de Privacidad"
                intro="Esta Política de Privacidad describe cómo nuestra Escuela de Artes Visuales trata la información vinculada a tu cuenta, tus compras, tu progreso y tu experiencia general dentro de la plataforma."
                sections={sections}
                lastUpdated="14 de marzo de 2026"
            />
        </div>
    );
}