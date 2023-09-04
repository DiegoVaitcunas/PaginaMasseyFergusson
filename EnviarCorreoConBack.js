document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#sendButton").addEventListener("click", enviarCorreo);
});

function enviarCorreo() {
    const nombre = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const mensaje = document.querySelector("textarea[name='message']").value;
    const datos = {
        sender: {
            name: "Diego Vaitcunas",
            email: "diegoeltity@gmail.com"
        },
        to: [
            {
                email: "diegoeltity@gmail.com",
                name: "Diego"
            }
        ],
        subject: "PRUEBA 1",
        htmlContent: `<p>${nombre}</p><p>${email}</p><p>${mensaje}</p>`
    };

    fetch("https://api.sendinblue.com/v3/smtp/email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "api-key": "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"
        },
        body: JSON.stringify(datos)
    })
    .then(response => {
        if (response.status === 201) {
            console.log(response);
            console.log(response.status);
            console.log("Correo enviado exitosamente");
            return response.json();
        } else {
            throw new Error("Error al enviar el correo");
        }
    })
    .then(messageId => {
        console.log(messageId);
        // Realiza acciones adicionales si es necesario
    })
    .catch(error => {
        console.error(error);
        // Manejo de errores
    });
}
