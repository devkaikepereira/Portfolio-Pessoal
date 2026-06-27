// Formulário
const form = document.querySelector("#form");

// Campos
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const mensage = document.querySelector("#mensage");

// Função de validação
function validateEmail(email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}

// Evento
form.addEventListener("submit", function(event) {

    // Impede envio e a atualização da página
    event.preventDefault();

    // Campos obrigatórios
    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        mensage.value.trim() === ""
    ) {

        alert("Preencha todos os campos!");

        return;

    }

    // Validação de e-mail
    if (!validateEmail(email.value)) {

        alert("Digite um e-mail válido!");

        return;

    }

    // Sucesso
    alert("Mensagem enviada com sucesso!");

    // Limpa formulário
    form.reset();

});