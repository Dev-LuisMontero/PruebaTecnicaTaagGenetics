function check_form_fields(email, phone, required_fields) {
    const errors = {};
    const email_pattern = /^[^@]+@[^@]+\.[^@]+$/;
    const phone_pattern = /^\d{2}-\d{8}|\d{9}$/;
    if (!email_pattern.test(email)) {
        errors.email = "Formato de correo inválido";
    }
    if (!phone_pattern.test(phone)) {
        errors.phone = "Formato de teléfono no válido";
    }

    required_fields.forEach(field => {
        if (!field) {
            errors[field] = "Este campo es obligatorio";
        }
    });

    return errors;
}

function update_paragraph(comentarios, parrafo) {
    let text = comentarios.value;
    if (text.length > 200) {
        text = text.substring(0, 200);
    }
    parrafo.textContent = text;
}