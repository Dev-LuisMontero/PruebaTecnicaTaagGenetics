//como hacer esto:
//Obtén el parámetro “user&quot; de la URL index.php?user=1234 para almacenar dicho valor en una
//cookie. Luego, almacena la información de configuración de nombre de usuario, teléfono, email en
//la sessionStorage. Finalmente, almacena el tipo de usuario, la tipografía, el tamaño de letra y la
//paleta de colores en la localStorage.
//Cookie: user_id
//sessionStorage: name, phone, email
//locaStorage: tipography, size, color_theme

// Obtener el valor del parámetro "user" de la URL
var urlParams = new URLSearchParams(window.location.search);
var userId = urlParams.get("user");

// Establecer el valor de la cookie "user_id"
document.cookie = "user_id=" + userId;

// Almacenar la información de configuración de nombre de usuario, teléfono, email en la sessionStorage
sessionStorage.setItem("name", "Carlos Perez");
sessionStorage.setItem("phone", "777-777-7777");
sessionStorage.setItem("email", "carlosperez@example.com");

// Almacenar el tipo de usuario, la tipografía, el tamaño de letra y la paleta de colores en la localStorage
localStorage.setItem("tipography", "Arial");
localStorage.setItem("size", "14px");
localStorage.setItem("color_theme", "light");
