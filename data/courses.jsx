// data/courses.js
export const courses = {
    introductiontoadobe: {
        title: 'Introducción a la Suite de Adobe',
        description: 'Curso introductorio para conocer las principales herramientas de la Suite de Adobe.',
        chapters: [
            {
                _id: 1,
                title: 'Photoshop',
                lessons: [
                    {
                        _id: 101,
                        title: 'Introduccion',
                        content: [
                            'Adobe Photoshop es una de las herramientas de edición de imágenes más populares y potentes del mundo. Utilizado por diseñadores, fotógrafos, artistas y creadores de contenido, Photoshop permite realizar desde simples retoques hasta complejas composiciones digitales. Su interfaz intuitiva y amplia gama de herramientas lo convierten en una plataforma ideal para aquellos que buscan mejorar sus habilidades en edición de imágenes.',
                            'Entre las funcionalidades de Photoshop se encuentran el ajuste de colores, la corrección de imperfecciones, el uso de capas para trabajar de manera no destructiva y la capacidad de crear efectos especiales. Con esta lección, aprenderás los conceptos básicos para empezar a familiarizarte con la funcionalidad y posibilidades principales que ofrece Photoshop.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap1lesson1',
                    },
                    {
                        _id: 102,
                        title: 'Interfaz y herramientas',
                        content: [
                            'La interfaz de Photoshop está diseñada para proporcionar un acceso rápido y organizado a las herramientas y funcionalidades necesarias para la edición de imágenes. En la pantalla principal, podrás ver varias áreas clave como la barra de herramientas a la izquierda, las opciones de herramienta en la parte superior, y el panel de capas a la derecha. Cada elemento cumple una función específica y te ayudará a navegar y trabajar de manera más eficiente en tus proyectos.',
                            'Las herramientas de Photoshop están agrupadas en la barra de herramientas, desde las de selección y recorte hasta las de dibujo y edición. En esta lección, exploraremos algunas de las herramientas más básicas, como la herramienta de selección rápida, el pincel y la herramienta de texto. Cada una de estas herramientas tiene configuraciones específicas que pueden ajustarse en la barra superior, lo que te permitirá personalizar tus acciones y lograr resultados más precisos en tus ediciones.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap1lesson2',
                    },
                    {
                        _id: 103,
                        title: 'Selección y máscaras',
                        content: [
                            'La selección en Photoshop es una de las herramientas más fundamentales y versátiles para el trabajo de edición. Seleccionar implica delimitar un área específica de una imagen, lo que permite trabajar únicamente sobre esa zona sin afectar el resto. Esto es especialmente útil cuando necesitas aplicar efectos, cambios de color, ajustes de brillo, o mover un elemento dentro de la composición. Photoshop ofrece varias herramientas de selección, como el Lazo, la Varita Mágica y el Seleccionar Objeto, cada una diseñada para diferentes niveles de precisión y necesidades. Además, puedes combinar y ajustar selecciones para obtener resultados aún más detallados, garantizando que cada modificación sea precisa y enfocada.',
                            'Las máscaras en Photoshop, por otro lado, son esenciales para una edición no destructiva. Una máscara actúa como un filtro que permite ocultar o revelar partes específicas de una capa sin alterar o eliminar permanentemente los píxeles. Usar máscaras facilita la creación de composiciones complejas, ya que puedes ajustar con precisión qué partes de una imagen son visibles. El color negro en la máscara oculta los elementos, mientras que el blanco los revela, y los tonos grises permiten crear transparencias. Este sistema es ideal para combinar imágenes, aplicar efectos graduales o corregir errores, ya que siempre puedes modificar la máscara sin afectar la capa original. La combinación de selecciones y máscaras potencia enormemente la creatividad y la flexibilidad en el proceso de edición.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap1lesson3',
                        driveUrl: 'https://1drv.ms/f/c/5c0044e92b33f270/EnDyMyvpRAAggFzcagEAAAABS4Cph2NZW0ps778AZsimEQ?e=53ak3V'
                    },
                    {
                        _id: 104,
                        title: 'Textos y Efectos',
                        content: [
                            'El manejo de textos en Photoshop es una herramienta clave para crear composiciones visuales impactantes y comunicativas. Con la herramienta de texto, puedes agregar palabras, frases o títulos con una amplia variedad de fuentes y estilos que se adaptan a cualquier diseño. Además, Photoshop ofrece opciones avanzadas de personalización, como la edición de kerning, tracking y leading, lo que permite ajustar la disposición de las letras para lograr un diseño más profesional. Las capas de texto son completamente editables, lo que facilita experimentar con diferentes configuraciones hasta encontrar el equilibrio perfecto entre forma y función.',
                            'Los efectos aplicados al texto llevan tus diseños al siguiente nivel, aportando creatividad y dinamismo. Desde sombras paralelas, degradados y biseles hasta efectos más complejos como relieves, brillos o texturas, Photoshop te permite transformar texto simple en un elemento destacado dentro de tu composición. Las opciones de estilo de capa son especialmente útiles para aplicar efectos no destructivos que pueden ser modificados en cualquier momento. Ya sea para logotipos, pósters o gráficos web, combinar texto con efectos personalizados es una forma poderosa de capturar la atención del espectador y transmitir tu mensaje de manera visualmente atractiva.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap1lesson4',
                        driveUrl: 'https://1drv.ms/f/c/5c0044e92b33f270/EnDyMyvpRAAggFx-awEAAAABXGW7_MxHKwNfgYCDUMICkA?e=KNcNqi'
                    },
                    {
                        _id: 105,
                        title: 'Retoque Fotográfico',
                        content: [
                            'Las brochas y herramientas de retoque en Photoshop son herramientas esenciales para cualquier diseñador gráfico, fotógrafo o artista digital. La herramienta de pincel, por ejemplo, permite crear trazos precisos y personalizados, ya sea para añadir detalles, pintar efectos o realizar composiciones artísticas. Con una variedad casi infinita de pinceles personalizables, puedes controlar el tamaño, la dureza, la opacidad e incluso la textura, adaptándolos a tus necesidades específicas. Además, el uso de pinceles personalizados abre un abanico de posibilidades para añadir efectos únicos, desde pinceladas realistas hasta patrones decorativos.',
                            'Por otro lado, las herramientas de retoque, como el pincel corrector, el tampón de clonar y la herramienta parche, son fundamentales para mejorar fotografías y eliminar imperfecciones. Estas herramientas trabajan de manera inteligente para replicar texturas y colores, logrando un acabado profesional sin rastros visibles de edición. El pincel corrector puntual es ideal para retoques rápidos, como eliminar manchas en la piel, mientras que el tampón de clonar ofrece mayor precisión para replicar detalles complejos. Usadas en conjunto, estas herramientas te permiten transformar imágenes y alcanzar resultados impecables en tus proyectos creativos.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap1lesson5',
                        driveUrl: 'https://1drv.ms/f/c/5c0044e92b33f270/EjGHT5IfaopMvxRKXrOP9rcBVOpa3Qzv62MLE0dAGW2o3w?e=TlJ7Xy'
                    },
                    {
                        _id: 106,
                        title: 'Composición de Capas',
                        content: [
                            'La composición de capas es uno de los fundamentos más importantes en el diseño gráfico y la edición digital con Photoshop. Las capas funcionan como hojas transparentes apiladas, donde cada una contiene elementos individuales que juntos conforman un diseño. Este enfoque permite modificar, reorganizar y combinar elementos de forma no destructiva, dando lugar a resultados creativos y profesionales. Durante esta sesión, exploraremos herramientas clave como máscaras, selecciones, capas de ajuste y máscaras de recorte, esenciales para controlar cómo interactúan y se integran los elementos en una composición.',
                            'Nuestro objetivo es crear tres diseños distintos que resalten el poder de estas herramientas. Empezaremos con composiciones simples, aplicando selecciones para ajustar elementos, y luego avanzaremos a técnicas más avanzadas como el uso de máscaras de recorte para incrustar imágenes dentro de texto y capas de ajuste para unificar la estética general. Estas habilidades te permitirán explorar nuevas posibilidades creativas y establecer un flujo de trabajo eficiente para tus proyectos futuros en Photoshop.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap1lesson6',
                        driveUrl: 'https://1drv.ms/f/c/5c0044e92b33f270/EqtQzpUd9ZJBg0BTOo-j0YwBn5R6KTZwl31XaivPTNwvfA?e=tykn5h'
                    },
                    {
                        _id: 107,
                        title: 'Efectos Avanzados',
                        content: [
                            'En esta lección aprenderás a crear un diseño dinámico y visualmente impactante utilizando herramientas avanzadas de Photoshop. Nos centraremos en el uso del filtro Liquify para distorsionar elementos de manera creativa, aplicaremos máscaras avanzadas para un control preciso de las áreas editadas, y exploraremos cómo la opción Color Range puede ayudarte a seleccionar tonos específicos de manera rápida y eficiente. Estas técnicas te permitirán transformar una imagen estática en una obra de arte fluida y expresiva.',
                            'Utilizaremos el filtro de Camera Raw para modificar los tonos y la saturación de ciertos colores en específico. Además, usaremos efectos como el resplandor exterior, la sombra interior, entre otros. El objetivo es que puedas entender las técnicas que vamos a utilizar para crear diferentes efectos y componer imágenes de forma creativa en Photoshop.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap1lesson7',
                        driveUrl: 'https://1drv.ms/f/c/5c0044e92b33f270/EsaqWP6OLdhNqNu4UkyLKFoBApiS9d2k15ohNZ_by6_q_g?e=ZHOubq'
                    },
                    {
                        _id: 108,
                        title: 'Proyecto Final',
                        content: [
                            'En esta lección, nos sumergiremos en el fascinante mundo del diseño cyberpunk, creando un póster único con un estilo futurista lleno de colores vibrantes y detalles impactantes. Utilizaremos recursos clave como figuras geométricas, textos estilizados y párrafos para estructurar el diseño, mientras que los modos de fusión y los filtros de desenfoque nos ayudarán a lograr efectos de luz y profundidad característicos de este género visual. El objetivo es aprender a combinar estos elementos para dar vida a una composición que capture la esencia del universo cyberpunk.',
                            'Además, aplicaremos técnicas manuales como el uso de la herramienta Pincel para pintar detalles y resaltar elementos clave, añadiendo un toque personal y dinámico al póster. Aprenderás a equilibrar las luces y sombras en tu diseño, jugar con los contrastes de neón y aplicar ajustes finales que realcen la atmósfera futurista. Esta lección está diseñada para desafiar tu creatividad y enseñarte a dominar herramientas esenciales de Photoshop mientras exploras un estilo visual que combina tecnología y arte.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap1lesson8',
                        driveUrl: 'https://1drv.ms/f/c/5c0044e92b33f270/En8uDO8_AY5AvbmVGRmCPsoB5pMrt-1w7V1tvutXkrkL3A?e=6d6yA5'
                    },
                ]
            },
            {
                _id: 2,
                title: 'Illustrador',
                lessons: [
                    {
                        _id: 201,
                        title: 'Introduccion',
                        content: [
                            'Illustrator es un software de diseño vectorial, se ha consolidado como una herramienta esencial para artistas, diseñadores gráficos e ilustradores de todo el mundo. A diferencia de los gráficos de mapa de bits, que se basan en píxeles, los gráficos vectoriales se crean a partir de fórmulas matemáticas que permiten ampliar o reducir las ilustraciones sin perder calidad, lo cual es ideal para trabajos que requieren una precisión y versatilidad extraordinarias, como logotipos, ilustraciones, tipografías personalizadas y gráficos complejos. Con una amplia gama de herramientas, Illustrator permite a los usuarios crear desde ilustraciones detalladas hasta diseños para impresión, interfaces digitales y mucho más, destacándose por su capacidad para adaptarse a diversas aplicaciones creativas y profesionales.',
                            'Una de las características más notables de Illustrator es su facilidad para integrarse con otros programas de Adobe, como Photoshop, InDesign y After Effects, lo que permite un flujo de trabajo eficiente y coherente entre diferentes proyectos de diseño. Estas capacidades convierten a Illustrator en una herramienta imprescindible para quienes buscan crear gráficos de alta calidad, ya que no solo ofrece control y flexibilidad, sino que también abre un sinfín de posibilidades creativas en el mundo del diseño digital.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap2lesson1',
                    },
                    {
                        _id: 202,
                        title: 'Interfaz y herramientas',
                        content: [
                            'Adobe Illustrator ofrece una interfaz de usuario intuitiva y altamente personalizable que facilita el flujo de trabajo creativo. Al iniciar el programa, los usuarios encuentran una barra de herramientas vertical ubicada generalmente a la izquierda, que alberga una variedad de herramientas esenciales para el diseño gráfico. En la parte superior, se encuentra la barra de control que proporciona acceso rápido a las opciones de la herramienta seleccionada, permitiendo ajustes precisos sin necesidad de navegar por múltiples menús. A la derecha, los paneles como Capas, Propiedades y Color permiten gestionar y modificar elementos del diseño de manera eficiente. Además, los artboards o mesas de trabajo ofrecen un espacio organizado para trabajar en múltiples proyectos o versiones dentro del mismo archivo, mejorando la productividad y la organización del trabajo.',
                            'Illustrator cuenta con una amplia gama de herramientas, diseñadas para manejar distintos aspectos del diseño vectorial. Entre las herramientas más usadas están la pluma, que permite crear formas y líneas con precisión; la herramienta de selección, que facilita la manipulación de objetos; y la herramienta de formas, que ofrece figuras básicas como rectángulos, círculos y polígonos. Además, incluye opciones avanzadas de fusión, gradientes, trazados y efectos, lo que permite a los diseñadores crear ilustraciones complejas con texturas y profundidad. También cuenta con funciones de exportación que permiten optimizar gráficos para distintos formatos y medios, como la web o la impresión, haciendo de Illustrator una herramienta esencial en el mundo del diseño gráfico profesional.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap2lesson2',
                    },
                    {
                        _id: 203,
                        title: 'Vectores',
                        content: [
                            'En esta clase exploraremos el fascinante mundo de los iconos vectoriales en Adobe Illustrator, una habilidad esencial para diseñadores gráficos, ilustradores y cualquier persona interesada en la creación de elementos visuales escalables. A través del uso de la herramienta Pluma, aprenderemos a construir formas precisas con líneas rectas y curvas, controlando cada punto de ancla para lograr resultados profesionales. Además, trabajaremos con curvas de Bézier para perfeccionar nuestros diseños, asegurando que cada trazo tenga la fluidez y el acabado deseado.',
                            'También profundizaremos en funciones clave como la opción de Expandir vectores, que nos permitirá transformar trazos en formas editables, y exploraremos las herramientas del Pathfinder para combinar, restar o dividir figuras y crear composiciones únicas. Al final de la sesión, cada estudiante habrá desarrollado una serie de iconos personalizados, aplicando todas estas técnicas para mejorar su destreza en Illustrator y potenciar su creatividad en el diseño digital. ¡Prepárate para dar vida a tus ideas con vectores!'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap2lesson3',
                        driveUrl: 'https://1drv.ms/f/c/5c0044e92b33f270/Eve5kFLj0ppGvVmAK0v7ZfwBv0u1vdzrDpK1-RewXlZSCg?e=a56fqV'
                    },
                    {
                        _id: 204,
                        title: 'Ilustracion Digital',
                        content: [
                            'En esta clase de ilustración digital, aprenderemos a transformar imágenes reales en ilustraciones vectoriales sencillas, utilizando Adobe Illustrator. Partiremos de una fotografía como referencia y la descompondremos en diferentes capas para organizar nuestro trabajo de manera eficiente. Separaremos los elementos clave en capas específicas: Stroke para los contornos, Base para los colores principales, Sombras para la profundidad y Referencia para guiarnos en el proceso. Esto nos permitirá mantener un flujo de trabajo ordenado y hacer ajustes precisos en cada etapa de la ilustración.',
                            'En el primer ejercicio, trabajaremos paso a paso para comprender el proceso de ilustración digital, organizando nuestras capas y definiendo cada parte de la imagen con precisión. Una vez completado, pasaremos a un segundo ejercicio a modo de reto, en el cual cada estudiante aplicará lo aprendido sin una guía detallada. Aunque en este desafío no se explicará cada paso, sí profundizaremos en el uso de opacidad y degradados, herramientas clave para dar mayor realismo y profundidad a las ilustraciones. Si el primer ejercicio se realizó correctamente, este reto servirá para reforzar la comprensión del flujo de trabajo y fomentar la autonomía en la creación de ilustraciones digitales.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap2lesson4',
                        driveUrl: 'https://1drv.ms/f/c/5c0044e92b33f270/Es3fMSkLrbZDpgCEqEeGcj0BYCeyrXXGIhoje2t12aKfGg?e=slPBcK'
                    },
                    {
                        _id: 205,
                        title: 'Composición Gráfica',
                        content: [
                            'En esta lección exploramos los principios de composición gráfica, centrándonos en la creación de una línea gráfica coherente a partir de tres ilustraciones vectoriales con un estilo unificado. A través de este ejercicio, aprendimos a estructurar un diseño atractivo y equilibrado para aplicarlo en un post promocional para un restaurante de comida rápida. La clave estuvo en mantener la armonía visual entre las ilustraciones, asegurando que cada elemento contribuya a la identidad de la marca y refuerce el impacto del mensaje.',
                            'Para enriquecer la composición, revisamos técnicas esenciales como la creación de reflejos y sombras vectoriales, aplicadas estratégicamente en los bordes mediante modos de fusión para dar más profundidad. También exploramos efectos como el zig-zag, que permite añadir dinamismo a ciertos elementos. Además, dominamos herramientas fundamentales como escalado, rotación y transformaciones básicas, optimizando el posicionamiento y equilibrio dentro del diseño. Estas técnicas nos permitieron desarrollar una pieza visualmente atractiva, ideal para fortalecer la identidad gráfica del restaurante.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap2lesson5',
                        driveUrl: 'https://1drv.ms/f/c/5c0044e92b33f270/EttrhlS8tBxGpMbjw0ajhl0B2juDmbmFkvRVa27wkRyjvQ?e=MKrBFM'
                    },
                    {
                        _id: 206,
                        title: 'Diseño Gráfico',
                        content: [
                            'En esta lección de diseño gráfico exploramos diversas técnicas avanzadas para potenciar la creatividad y precisión en Adobe Illustrator. Comenzamos aprendiendo cómo adaptar un vector a la forma de otro, una herramienta esencial para diseñadores que buscan integrar elementos con fluidez y coherencia visual. Luego, analizamos la técnica de Blend, que nos permite generar transiciones suaves entre dos vectores mediante copias progresivas, brindando efectos dinámicos y estructurados.',
                            'Además, profundizamos en otras aplicaciones del Blend Tool, combinándolo con opciones de distorsión para lograr efectos más complejos y personalizados. Finalmente, cerramos la lección con una introducción a las herramientas 3D de Illustrator, que permiten agregar profundidad y volumen a los diseños sin salir del entorno vectorial. Estas técnicas abren un abanico de posibilidades para crear ilustraciones profesionales con un alto impacto visual.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap2lesson6',
                        driveUrl: 'https://1drv.ms/f/c/5c0044e92b33f270/EpEhpFHi7sZFojlpsXZFq3gBTgfhl94cqi-0tj2RoohkoA?e=sgh0uv'
                    },

                    {
                        _id: 207,
                        title: 'Diseño Gráfico pt. 2',
                        content: [
                            'En esta segunda parte de la lección de diseño gráfico, exploramos herramientas y efectos avanzados en Adobe Illustrator para llevar nuestras composiciones a un nivel más dinámico y estilizado. Comenzamos con técnicas como Free Distort, que permite modificar libremente la forma de los objetos, y Repeat en modo Grid, ideal para generar patrones repetitivos de manera rápida y eficiente. También trabajamos con Split Into Grid, una opción perfecta para dividir elementos en secciones organizadas, lo que facilita la estructuración y distribución en nuestros diseños.',
                            'Además, profundizamos en el uso de Clipping Mask, una herramienta clave para enmascarar y recortar ilustraciones dentro de formas específicas, lo que nos permitió jugar con la composición de manera más creativa. Finalmente, exploramos la poderosa Mesh Tool, con la que logramos transiciones de color suaves y degradados complejos para crear un diseño único y estilizado. Combinando todas estas técnicas, conseguimos un resultado innovador, ideal para piezas gráficas modernas y llamativas.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap2lesson7',
                        driveUrl: 'https://1drv.ms/f/c/5c0044e92b33f270/Elne_3E47V5Ou3bm--Q_3LoBuXWl77DeqcxVxe3jSLxJiA?e=ilXSP7'
                    },
                    {
                        _id: 208,
                        title: 'Proyecto Final',
                        content: [
                            '¡Felicidades! Llegaste hasta aquí y completaste este capítulo de Illustrator. Espero que hayas podido ejecutar con éxito todos los ejercicios hasta ahora. En esta lección, realizaremos un proyecto completo donde aplicaremos las últimas técnicas que te servirán para tener más opciones al diseñar y crear tus propios diseños.',
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap2lesson8',
                        driveUrl: 'https://1drv.ms/f/c/5c0044e92b33f270/EjEXJYAaxtBPnndOj3jqMMwBX3fTcDNABJPH9cG1xDVSPQ?e=R9Faxv'
                    },
                ]
            },
            {
                _id: 3,
                title: 'Premiere Pro',
                lessons: [
                    {
                        _id: 301,
                        title: 'Introduccion',
                        content: [
                            'Adobe Premiere Pro es una de las herramientas de edición de video más completas y populares en la industria audiovisual, utilizada tanto por principiantes como por profesionales del cine y la televisión. Este software destaca por su capacidad para manejar proyectos complejos, ofreciendo una interfaz intuitiva y personalizable que se adapta a distintos flujos de trabajo. Al abrir Premiere Pro, los usuarios pueden organizar su espacio de trabajo con paneles como Línea de tiempo, Monitor de programa y Proyecto, lo cual facilita el proceso de edición y la manipulación de clips. Gracias a su integración con otras aplicaciones de Adobe, como After Effects y Photoshop, permite un flujo de trabajo fluido y colaborativo, ideal para proyectos multimedia que requieren una mezcla de animación, gráficos y edición avanzada.',
                            'Las herramientas de Premiere Pro son robustas y permiten realizar ediciones de alta calidad, desde cortes y ajustes básicos hasta efectos y correcciones avanzadas de color. Con la línea de tiempo, los editores pueden organizar clips de video y audio, aplicar transiciones y efectos, y realizar cortes precisos para crear narrativas visuales coherentes y atractivas. Además, la función de Lumetri Color ofrece opciones avanzadas para la corrección y gradación de color, mejorando significativamente la estética del video. Premiere Pro también incluye herramientas de edición de audio y opciones para añadir subtítulos y títulos, facilitando la creación de contenidos accesibles y adaptados a las necesidades del espectador. En conjunto, Premiere Pro es una solución poderosa y versátil para cualquier tipo de proyecto audiovisual, desde videos para redes sociales hasta producciones de alta calidad para cine y televisión.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap3lesson1',
                    },
                    {
                        _id: 302,
                        title: 'Interfaz y Herramientas',
                        content: [
                            'La interfaz de Adobe Premiere Pro está diseñada para facilitar el flujo de trabajo en la edición de video, permitiendo una organización clara y eficiente de las herramientas y paneles. Al abrir el programa, los usuarios encuentran una serie de espacios de trabajo preconfigurados que pueden ajustarse según las necesidades del proyecto, como Edición, Color, Sonido y Efectos. En la parte central, el panel de Línea de tiempo permite ensamblar y ajustar clips de video y audio, mientras que el Monitor de programa muestra la vista previa del proyecto en tiempo real. A la izquierda, el panel Proyecto almacena todos los archivos importados, organizándolos en carpetas y subcarpetas. Además, Premiere Pro ofrece paneles adicionales, como Lumetri Color para corrección de color y Audio para ajustes detallados de sonido, los cuales pueden personalizarse y mover dentro de la interfaz. Esta organización modular permite que cada editor configure su espacio de trabajo de acuerdo con su flujo de trabajo preferido, mejorando la eficiencia en proyectos complejos y optimizando la experiencia de edición.',
                            'Adobe Premiere Pro cuenta con una amplia gama de herramientas diseñadas para cubrir cada aspecto del proceso de edición de video, desde la organización inicial de clips hasta los retoques finales de color y sonido. Entre las herramientas principales se encuentran la herramienta de Selección, que permite seleccionar y mover clips en la línea de tiempo; la herramienta Cuchilla, utilizada para hacer cortes precisos en los clips; y la herramienta de Desplazamiento, que ajusta la posición de un clip sin afectar el resto del contenido en la línea de tiempo. Premiere también incluye opciones avanzadas como Lumetri Color, para la corrección y gradación de color, y efectos visuales que pueden aplicarse directamente a los clips. Además, las herramientas de audio permiten ajustar niveles, aplicar efectos y realizar mezclas detalladas para conseguir un sonido profesional. La variedad y profundidad de estas herramientas hacen de Premiere Pro una solución integral para editores de todos los niveles, brindando un control completo sobre cada aspecto del video final.',
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap3lesson2',
                        driveUrl: 'https://1drv.ms/f/s!AnDyMyvpRABchdFzv0xpQ3zIlT6FyA?e=bMiHWl'
                    },
                    {
                        _id: 303,
                        title: 'Efectos y Controles',
                        content: [
                            'Adobe Premiere Pro ofrece una amplia gama de efectos visuales y de audio que se pueden aplicar a clips en un proyecto, los cuales se encuentran en el Panel de Efectos. Este panel organiza los efectos en categorías como video, audio y transiciones, facilitando la búsqueda de efectos específicos. Los efectos se pueden arrastrar directamente al clip en la línea de tiempo, permitiendo modificar la apariencia visual, el sonido, o aplicar transiciones de un clip a otro. Además, en esta sección se pueden guardar y reutilizar combinaciones de efectos personalizados para optimizar el flujo de trabajo.',
                            'Una vez aplicado un efecto, se puede ajustar en el Panel de Control de Efectos. Aquí es posible personalizar las propiedades de cada efecto de manera detallada, como la opacidad, escala, posición y otros parámetros específicos de cada efecto. Este panel también permite animar propiedades a lo largo del tiempo utilizando fotogramas clave, proporcionando control total sobre cómo y cuándo se aplican las modificaciones. Además, el Panel de Control de Efectos permite ver y ajustar las propiedades de cada clip, como el color o la posición, para lograr una edición precisa y profesional.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap3lesson3',
                        driveUrl: 'https://1drv.ms/f/s!AnDyMyvpRABchdIgNVIBCHvTdpIOjA?e=67B9a2'
                    },
                    {
                        _id: 304,
                        title: 'Textos, vectores y mascaras',
                        content: [
                            'En Adobe Premiere Pro, la herramienta de texto permite añadir títulos, subtítulos y cualquier tipo de texto a un proyecto de video. Con esta herramienta, los editores pueden personalizar el estilo de la tipografía, el tamaño, el color y los efectos visuales del texto, logrando un diseño profesional y atractivo. Además, el texto puede animarse o usarse como subtítulos, lo que resulta útil para hacer que el contenido sea más accesible e interesante para el espectador. Premiere Pro también permite guardar ajustes personalizados de texto para reutilizarlos en diferentes proyectos, agilizando el flujo de trabajo.',
                            'La herramienta de rectángulo y las máscaras son opciones útiles para crear efectos de recorte y resaltar elementos específicos dentro de un video. La herramienta de rectángulo permite dibujar formas sobre el video que pueden servir como marcos o áreas de resaltado, ideal para enfatizar ciertos detalles visuales o cubrir partes que se desean ocultar. Por otro lado, las máscaras permiten aplicar efectos o transiciones de manera selectiva a ciertas áreas de la imagen, como ajustes de color o desenfoques, dando al editor mayor control creativo. Además, Premiere Pro ofrece la posibilidad de animar estas máscaras para que se muevan o cambien de tamaño durante la reproducción, lo cual permite conseguir efectos dinámicos y visualmente impactantes.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap3lesson4',
                        driveUrl: 'https://1drv.ms/f/s!AnDyMyvpRABchdI94p0ap4NqrrKkww?e=alg5q1'
                    },
                    {
                        _id: 305,
                        title: 'Subsecuencias y Color',
                        content: [
                            'Las subsecuencias y la anidación son herramientas clave para optimizar y organizar el flujo de trabajo en Adobe Premiere Pro. Una subsecuencia permite extraer una parte específica de la secuencia principal para trabajar en ella por separado, ideal para crear versiones cortas o editar fragmentos sin alterar el proyecto original. Por otro lado, la anidación (nesting) agrupa múltiples clips en una nueva secuencia, tratándolos como un único elemento dentro del timeline. Esto resulta útil para aplicar efectos, transiciones o ajustes globales a varios clips al mismo tiempo, manteniendo el timeline más limpio y organizado.',
                            'Lumetri Color es una herramienta integrada en Premiere Pro que permite corregir y estilizar el color de los videos de manera profesional. Con funciones como la corrección básica de color, curvas de tono, ruedas de color y ajustes HSL, los editores pueden modificar la exposición, el contraste, la saturación y los tonos para mejorar la calidad visual. Además, ofrece opciones creativas como estilos predefinidos y viñetas para dar un toque cinematográfico o artístico. Es una solución completa para equilibrar el color, resolver problemas de iluminación y crear estéticas visuales únicas en cualquier proyecto audiovisual.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap3lesson5',
                        driveUrl: 'https://1drv.ms/f/s!AnDyMyvpRABchdML2TycCF6Th8IkbQ?e=9AA3dj'
                    },
                    {
                        _id: 306,
                        title: 'Composición de Audio',
                        content: [
                            'La composición de audio en Adobe Premiere Pro es una herramienta esencial para dar vida a los proyectos audiovisuales, ofreciendo la posibilidad de crear paisajes sonoros ricos y dinámicos. Uno de los elementos clave es la música de fondo, la cual juega un papel fundamental para establecer el tono emocional de una escena. Ya sea un momento tenso, alegre o nostálgico, la música tiene el poder de amplificar la narrativa visual y sumergir al espectador en la atmósfera deseada. Premiere Pro permite integrar y ajustar pistas musicales de manera precisa, proporcionando opciones para sincronizarlas con la acción o los diálogos y logrando que se complementen con otros elementos sonoros.',
                            'Por otro lado, los efectos de sonido son esenciales para destacar acciones y añadir realismo a las escenas. Desde el sonido de pasos o puertas que se cierran, hasta explosiones y efectos ambientales, estos detalles ayudan a reforzar la narrativa visual y a captar la atención del público. Para gestionar estos elementos de forma eficiente, Premiere Pro incluye la mezcladora de audio, una herramienta poderosa que permite ajustar niveles, aplicar efectos y mezclar múltiples pistas de audio en tiempo real. Con esta función, los editores tienen un control total sobre el panorama sonoro, logrando que cada pista encuentre su lugar en la mezcla final y entregando un resultado profesional.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap3lesson6',
                        driveUrl: 'https://1drv.ms/f/s!AnDyMyvpRABchdMs8ajx9dxGhoYM1Q?e=9FnJxu'
                    },
                    {
                        _id: 307,
                        title: 'Exportar, interpretación, estabilización, velocidad y subtítulos',
                        content: [
                            'Estamos muy cerca de terminar este capítulo. Hoy vamos a hablar sobre cómo exportar un proyecto, donde configuraremos ciertos parámetros y opciones. Además, veremos cómo cambiar la interpretación de un clip. También te voy a enseñar cómo usar el efecto Warp Stabilizer, ajustar la velocidad y duración de un clip, y, por último, revisaremos cómo agregar subtítulos automáticos y añadirles animaciones.',
                            'Espero que todos los conocimientos que has recibido en este capítulo te sirvan mucho para empezar tu camino en Premiere Pro. Aún te queda mucho más por recorrer, pero llevas una ventaja muy grande sobre cualquier otro artista que esté empezando en Premiere Pro. Te recomiendo estar atento para seguir aprendiendo más en los próximos cursos, ya que hay mucho más que puedo compartir contigo para mejorar tus habilidades.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap3lesson7',
                    },
                    {
                        _id: 308,
                        title: 'Proyecto Final',
                        content: [
                            '¡Felicidades! Llegaste hasta aqui, completaste este capitulo de Premiere Pro, espero que este curso de introduccion te haya ayudado mucho a entender y empezar a crear con esta maravillosa herramienta, a lo largo del curso dimos un vistazo a varios temas que son muy importantes al momento de empezar a crear videos, aun falta mucho por aprender, pero sin duda ya empezaste con una gran ventaja, y esa era la idea, crear un curso que te permita entender de forma facil como es la edicion de video con esta herramienta.',
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap3lesson8',
                        driveUrl: 'https://1drv.ms/f/s!AnDyMyvpRABchdUIu_OQKthukrkGfw?e=zeHTw3'
                    },
                ]
            },
            {
                _id: 4,
                title: 'After Effects',
                lessons: [
                    {
                        _id: 401,
                        title: 'Introduccion',
                        content: [
                            'Adobe Photoshop es una de las herramientas de edición de imágenes más populares y potentes del mundo. Utilizado por diseñadores, fotógrafos, artistas y creadores de contenido, Photoshop permite realizar desde simples retoques hasta complejas composiciones digitales. Su interfaz intuitiva y amplia gama de herramientas lo convierten en una plataforma ideal para aquellos que buscan mejorar sus habilidades en edición de imágenes.',
                            'Entre las funcionalidades de Photoshop se encuentran el ajuste de colores, la corrección de imperfecciones, el uso de capas para trabajar de manera no destructiva y la capacidad de crear efectos especiales. Con esta lección, aprenderás los conceptos básicos para empezar a familiarizarte con la interfaz y las herramientas principales que ofrece Photoshop, abriendo la puerta a un mundo de posibilidades creativas.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap1lesson1',
                    },
                    {
                        _id: 402,
                        title: 'Interfaz y herramientas',
                        content: [
                            'La interfaz de Photoshop está diseñada para proporcionar un acceso rápido y organizado a las herramientas y funcionalidades necesarias para la edición de imágenes. En la pantalla principal, podrás ver varias áreas clave como la barra de herramientas a la izquierda, las opciones de herramienta en la parte superior, y el panel de capas a la derecha. Cada elemento cumple una función específica y te ayudará a navegar y trabajar de manera más eficiente en tus proyectos.',
                            'Las herramientas de Photoshop están agrupadas en la barra de herramientas, desde las de selección y recorte hasta las de dibujo y edición. En esta lección, exploraremos algunas de las herramientas más básicas, como la herramienta de selección rápida, el pincel y la herramienta de texto. Cada una de estas herramientas tiene configuraciones específicas que pueden ajustarse en la barra superior, lo que te permitirá personalizar tus acciones y lograr resultados más precisos en tus ediciones.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap1lesson1',
                        driveUrl: 'https://1drv.ms/f/c/5c0044e92b33f270/EgOyp4JPQWhLsD8kJAcZMCoBMhslGcdvHJal0HUWk-zI-g?e=5E1Qsh'
                    },
                    {
                        _id: 403,
                        title: 'Keyframes',
                        content: [
                            'La interfaz de Photoshop está diseñada para proporcionar un acceso rápido y organizado a las herramientas y funcionalidades necesarias para la edición de imágenes. En la pantalla principal, podrás ver varias áreas clave como la barra de herramientas a la izquierda, las opciones de herramienta en la parte superior, y el panel de capas a la derecha. Cada elemento cumple una función específica y te ayudará a navegar y trabajar de manera más eficiente en tus proyectos.',
                            'Las herramientas de Photoshop están agrupadas en la barra de herramientas, desde las de selección y recorte hasta las de dibujo y edición. En esta lección, exploraremos algunas de las herramientas más básicas, como la herramienta de selección rápida, el pincel y la herramienta de texto. Cada una de estas herramientas tiene configuraciones específicas que pueden ajustarse en la barra superior, lo que te permitirá personalizar tus acciones y lograr resultados más precisos en tus ediciones.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap1lesson1',
                        driveUrl: 'https://1drv.ms/f/c/5c0044e92b33f270/EgOyp4JPQWhLsD8kJAcZMCoBMhslGcdvHJal0HUWk-zI-g?e=5E1Qsh'
                    },
                    {
                        _id: 404,
                        title: 'Motion Graphics',
                        content: [
                            'La interfaz de Photoshop está diseñada para proporcionar un acceso rápido y organizado a las herramientas y funcionalidades necesarias para la edición de imágenes. En la pantalla principal, podrás ver varias áreas clave como la barra de herramientas a la izquierda, las opciones de herramienta en la parte superior, y el panel de capas a la derecha. Cada elemento cumple una función específica y te ayudará a navegar y trabajar de manera más eficiente en tus proyectos.',
                            'Las herramientas de Photoshop están agrupadas en la barra de herramientas, desde las de selección y recorte hasta las de dibujo y edición. En esta lección, exploraremos algunas de las herramientas más básicas, como la herramienta de selección rápida, el pincel y la herramienta de texto. Cada una de estas herramientas tiene configuraciones específicas que pueden ajustarse en la barra superior, lo que te permitirá personalizar tus acciones y lograr resultados más precisos en tus ediciones.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap1lesson1',
                        driveUrl: 'https://1drv.ms/f/c/5c0044e92b33f270/EgOyp4JPQWhLsD8kJAcZMCoBMhslGcdvHJal0HUWk-zI-g?e=5E1Qsh'
                    },
                    {
                        _id: 405,
                        title: 'Efectos Visuales',
                        content: [
                            'La interfaz de Photoshop está diseñada para proporcionar un acceso rápido y organizado a las herramientas y funcionalidades necesarias para la edición de imágenes. En la pantalla principal, podrás ver varias áreas clave como la barra de herramientas a la izquierda, las opciones de herramienta en la parte superior, y el panel de capas a la derecha. Cada elemento cumple una función específica y te ayudará a navegar y trabajar de manera más eficiente en tus proyectos.',
                            'Las herramientas de Photoshop están agrupadas en la barra de herramientas, desde las de selección y recorte hasta las de dibujo y edición. En esta lección, exploraremos algunas de las herramientas más básicas, como la herramienta de selección rápida, el pincel y la herramienta de texto. Cada una de estas herramientas tiene configuraciones específicas que pueden ajustarse en la barra superior, lo que te permitirá personalizar tus acciones y lograr resultados más precisos en tus ediciones.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap1lesson1',
                        driveUrl: 'https://1drv.ms/f/c/5c0044e92b33f270/EgOyp4JPQWhLsD8kJAcZMCoBMhslGcdvHJal0HUWk-zI-g?e=5E1Qsh'
                    },
                    {
                        _id: 406,
                        title: '3D Clásico',
                        content: [
                            'La interfaz de Photoshop está diseñada para proporcionar un acceso rápido y organizado a las herramientas y funcionalidades necesarias para la edición de imágenes. En la pantalla principal, podrás ver varias áreas clave como la barra de herramientas a la izquierda, las opciones de herramienta en la parte superior, y el panel de capas a la derecha. Cada elemento cumple una función específica y te ayudará a navegar y trabajar de manera más eficiente en tus proyectos.',
                            'Las herramientas de Photoshop están agrupadas en la barra de herramientas, desde las de selección y recorte hasta las de dibujo y edición. En esta lección, exploraremos algunas de las herramientas más básicas, como la herramienta de selección rápida, el pincel y la herramienta de texto. Cada una de estas herramientas tiene configuraciones específicas que pueden ajustarse en la barra superior, lo que te permitirá personalizar tus acciones y lograr resultados más precisos en tus ediciones.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap1lesson1',
                        driveUrl: 'https://1drv.ms/f/c/5c0044e92b33f270/EgOyp4JPQWhLsD8kJAcZMCoBMhslGcdvHJal0HUWk-zI-g?e=5E1Qsh'
                    },
                    {
                        _id: 407,
                        title: 'Trackeo de Cámara',
                        content: [
                            'La interfaz de Photoshop está diseñada para proporcionar un acceso rápido y organizado a las herramientas y funcionalidades necesarias para la edición de imágenes. En la pantalla principal, podrás ver varias áreas clave como la barra de herramientas a la izquierda, las opciones de herramienta en la parte superior, y el panel de capas a la derecha. Cada elemento cumple una función específica y te ayudará a navegar y trabajar de manera más eficiente en tus proyectos.',
                            'Las herramientas de Photoshop están agrupadas en la barra de herramientas, desde las de selección y recorte hasta las de dibujo y edición. En esta lección, exploraremos algunas de las herramientas más básicas, como la herramienta de selección rápida, el pincel y la herramienta de texto. Cada una de estas herramientas tiene configuraciones específicas que pueden ajustarse en la barra superior, lo que te permitirá personalizar tus acciones y lograr resultados más precisos en tus ediciones.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap1lesson1',
                        driveUrl: 'https://1drv.ms/f/c/5c0044e92b33f270/EgOyp4JPQWhLsD8kJAcZMCoBMhslGcdvHJal0HUWk-zI-g?e=5E1Qsh'
                    },
                    {
                        _id: 408,
                        title: 'Proyecto Final',
                        content: [
                            'La interfaz de Photoshop está diseñada para proporcionar un acceso rápido y organizado a las herramientas y funcionalidades necesarias para la edición de imágenes. En la pantalla principal, podrás ver varias áreas clave como la barra de herramientas a la izquierda, las opciones de herramienta en la parte superior, y el panel de capas a la derecha. Cada elemento cumple una función específica y te ayudará a navegar y trabajar de manera más eficiente en tus proyectos.',
                            'Las herramientas de Photoshop están agrupadas en la barra de herramientas, desde las de selección y recorte hasta las de dibujo y edición. En esta lección, exploraremos algunas de las herramientas más básicas, como la herramienta de selección rápida, el pincel y la herramienta de texto. Cada una de estas herramientas tiene configuraciones específicas que pueden ajustarse en la barra superior, lo que te permitirá personalizar tus acciones y lograr resultados más precisos en tus ediciones.'
                        ],
                        videoUrl: 'sva-assets/courses/introductiontoadobesuite/cap1lesson1',
                        driveUrl: 'https://1drv.ms/f/c/5c0044e92b33f270/EgOyp4JPQWhLsD8kJAcZMCoBMhslGcdvHJal0HUWk-zI-g?e=5E1Qsh'
                    },

                ]
            },
        ],
    },
}

