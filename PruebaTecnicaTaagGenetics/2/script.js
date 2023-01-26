// get language selector and form elements
var langSelector = document.getElementById("lang");
var formHeader = document.getElementById("form-header");
var paragraph = document.getElementById("paragraph");
var submitBtn = document.getElementById("submit-btn");
var firstNameLabel = document.getElementById("first-name-label");
var lastNameLabel = document.getElementById("last-name-label");
var companyLabel = document.getElementById("company-label");
var jobTitleLabel = document.getElementById("job-title-label");
var businessEmailLabel = document.getElementById("business-email-label");
var phoneLabel = document.getElementById("phone-label");
var commentsLabel = document.getElementById("comments-label");

// set event listener for language selector
langSelector.addEventListener("change", function() {
  var lang = langSelector.value;
  // update form text based on selected language
  if (lang === "en") {
    formHeader.innerHTML = "Let's coordinate a meeting to find the best solution for your needs.<br> Are you ready to maximize your COVID-19 operation?";
    paragraph.innerHTML = "Are you ready to maximize your COVID-19 operation?";
    submitBtn.innerHTML = "send";
    firstNameLabel.innerHTML = "First name:";
    lastNameLabel.innerHTML = "Last name:";
    companyLabel.innerHTML = "Company:";
    jobTitleLabel.innerHTML = "Job title:";
    businessEmailLabel.innerHTML = "Business email:";
    phoneLabel.innerHTML = "Phone:";
    commentsLabel.innerHTML = "Comments:";
  } else if (lang === "es") {
    formHeader.innerHTML = "Coordinemos una reunión para encontrar la mejor solución para sus necesidades.<br> ¿Estás listo para maximizar tu operación COVID-19?";
    paragraph.innerHTML = "Contáctanos y comencemos";
    submitBtn.innerHTML = "enviar";
    firstNameLabel.innerHTML = "Nombre:";
    lastNameLabel.innerHTML = "Apellido:";
    companyLabel.innerHTML = "Empresa:";
    jobTitleLabel.innerHTML = "Cargo:";
    businessEmailLabel.innerHTML = "Email empresarial:";
    phoneLabel.innerHTML = "Teléfono:";
    commentsLabel.innerHTML = "Comentarios:";
  }
});
