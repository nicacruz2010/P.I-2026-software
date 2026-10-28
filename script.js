
/* ========================================
   CADASTRO - TESTEMUNHAS DE JEOVÁ
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formCadastro");
    const resultado = document.getElementById("mensagemResultado");

    if (!formulario || !resultado) {
        return;
    }

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        // Verifica se os campos obrigatórios foram preenchidos
        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        // Obtém os dados preenchidos
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const assunto = document.getElementById("assunto").value;

        // Verifica se o nome foi informado
        if (nome.length < 3) {
            resultado.textContent =
                "Digite seu nome completo corretamente.";

            resultado.classList.remove("sucesso");
            resultado.classList.add("erro");
            return;
        }

        // Verifica se o e-mail foi informado
        if (!email || !email.includes("@")) {
            resultado.textContent =
                "Digite um endereço de e-mail válido.";

            resultado.classList.remove("sucesso");
            resultado.classList.add("erro");
            return;
        }

        // Verifica se foi selecionado um assunto
        if (!assunto) {
            resultado.textContent =
                "Selecione o assunto que deseja conhecer.";

            resultado.classList.remove("sucesso");
            resultado.classList.add("erro");
            return;
        }

        // Mostra a mensagem de demonstração
        resultado.textContent =
            `Obrigado, ${nome}! O formulário foi preenchido corretamente. ` +
            "Esta demonstração não envia nem armazena seus dados.";

        resultado.classList.remove("erro");
        resultado.classList.add("sucesso");

        // Limpa os campos
        formulario.reset();
    });

});
