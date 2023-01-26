# PruebaTecnicaTaagGenetics
DESARROLLO WEB

\1. Con el arreglo siguiente, crea un menú responsivo (apto para escritorio y para dispositivos móviles) desde un objeto js dinámico, ordenándolo por id.

[

`  `{

`	`Id:1,

titulo: “Inicio”,

href: “home.php”

`  `},

`  `{

`	`Id:7,

titulo: “Contacto”,

href: “contact.php”

`  `},

`  `{

`	`Id:6,

titulo: “Empresa”,

href: “about.php”

`  `},

`  `{

`	`Id:2,

titulo: “Laboratorio”,

href: “laboratory.php”

`  `},

`  `{

`	`Id:4,

titulo: “Alimentos”,

href: “foods.php”

subitme: [



]

`  `},

`  `{

`	`Id:5,

titulo: “Diagnóstico Clínico”,

href: “clinical-diagnostic.php”

`  `},

`  `{

`	`Id:2,

titulo: “Productos”,

href: “products.php”

`  `},

`  `{

`	`Id:3,

titulo: “Software”,

href: “software.php”

`  `}

]



\2. Cambia los textos de una página de contacto de forma dinámica, mediante un selector de idioma con las opciones “English” y “Español”. Usa la figura adjunta como referencia para crear el formulario

ENGLISH

Let's coordinate a meeting to find the best solution for your needs.

Are you ready to maximize your COVID-19 operation?

Get in touch, we're all ears

First name

Last name

Company

Job title

Business email

Phone

Comments

SEND

ESPAÑOL

Coordinemos una reunión para encontrar la mejor solución para sus necesidades.

¿Estás listo para maximizar tu operación COVID-19?

Contáctanos y comencemos

Nombre

Apellido

Empresa

Cargo

Email empresarial

Teléfono

Comentarios

ENVIAR

![](Aspose.Words.cd930980-98e5-4ce0-b92f-4deb4deaf82b.001.png)




\3. Obtén el parámetro “user" de la URL index.php?user=1234 para almacenar dicho valor en una cookie. Luego, almacena la información de configuración de nombre de usuario, teléfono, email en la sessionStorage. Finalmente, almacena el tipo de usuario, la tipografía, el tamaño de letra y la paleta de colores en la localStorage.

Cookie: user\_id

sessionStorage: name, phone, email

locaStorage: tipography, size, color\_theme


\4. Cambia dinámicamente y con transiciones el color, tamaño, posición y forma de un ícono de un menú (ya sea un logo o un icono que referencie a un ítem del menú) usando html, javascript, svg y variables de css.


\5. Mediante css puro, controla el estilo de una tabla estilizándola de tal manera que: el background de sus filas (row) tenga un estilo de cebra (table-striped), con solo el borde exterior, con un máximo de 300px scrolleable sobre la vertical, con el header siempre visible al hacer scroll, que cada 5 líneas muestre una línea de color negro a 2px, y que todas las primeras columnas tengan la tipografía en bold en mayúsculas y con un mínimo de ancho de 100px, y en las terceras columnas en cursiva y la última columna un ancho fijo de 80px. Utiliza la figura adjunta como referencia.

![](Aspose.Words.cd930980-98e5-4ce0-b92f-4deb4deaf82b.002.png)



\6. Escribe una función que verifique todos los campos requeridos de un formulario y devuelva error en formatos incorrectos de correo y teléfono. Utiliza como base los formatos correctos de correo y teléfono de tu localización. Luego, escribe otra función que cambie el texto de un párrafo a partir del texto introducido en un **textfield** llamado comentarios. Esta función debe verificar que el **textfield** contiene un texto de longitud igual o menor a 200 caracteres, y asegurar que el texto del párrafo no siga modificándose si su extensión sobrepasa ese límite.


