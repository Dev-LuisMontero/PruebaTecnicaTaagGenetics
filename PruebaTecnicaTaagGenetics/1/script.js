// Obtener el botón para desplegar el menú
let button = document.querySelector(".button");
// Obtener el menú desplegable
let nav = document.querySelector(".nav");

// Ordenar el objeto de menú por ID
let menu = [
{ Id:1, titulo: "Inicio", href : "home.php"},
{ Id:7, titulo: "Contacto", href: "contacto.php"},
{ Id:6, titulo: "Empresa", href: "about.php"},
{ Id:2, titulo: "Laboratorio", href: "laboratorio.php"},
{ Id:4, titulo: "Alimentos", href: "foods.php", subitme: [] },
{ Id:5, titulo: "Diagnóstico Clínico", href: "clinical-diagnostic.php"},
{ Id:2, titulo: "Productos", href: "products.php"},
{ Id:3, titulo: "Software", href: "software.php"},
];

menu.sort((a, b) => a.Id - b.Id);

// Crear el HTML del menú
let menuHTML = "";
menu.forEach(item => {
if (item.subitme && item.subitme.length > 0) {
let submenuHTML = "";
item.subitme.forEach(subitem => {
    submenuHTML += `<li class="li"><a href="${subitem.href}">${subitem.titulo}</a></li>`;
});
menuHTML += `<li class="li"> <a href="${item.href}">${item.titulo}</a> <ul class="ul"> ${submenuHTML} </ul> </li>`;
} else {
menuHTML += `<li class="li"><a href="${item.href}">${item.titulo}</a></li>`;
}
});

// Agregar el HTML del menú al sitio
let menuContainer = document.querySelector(".menu");
menuContainer.innerHTML = menuHTML;

// Manejar el evento click en el botón de menú para dispositivos móviles
button.addEventListener("click", () => {
    nav.classList.toggle("activo");
});