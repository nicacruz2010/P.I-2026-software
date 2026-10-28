
/* ========================================
   LOGIN - TESTEMUNHAS DE JEOVÁ
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formLogin");
    const mensagem = document.getElementById("mensagemLogin");

    if (!formulario || !mensagem) {
        return;
    }

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value;

        // Verifica se os campos foram preenchidos
        if (!email || !senha) {
            mostrarMensagem(
                "Preencha todos os campos.",
                "erro"
            );
            return;
        }

        // Verifica o formato básico do e-mail
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            mostrarMensagem(
                "Digite um e-mail válido.",
                "erro"
            );
            return;
        }

        // Este exemplo não autentica usuários de verdade
        mostrarMensagem(
            "Os dados foram preenchidos! Para entrar em uma conta, é necessário conectar um sistema de autenticação.",
            "sucesso"
        );
    });

    function mostrarMensagem(texto, tipo) {
        mensagem.textContent = texto;
        mensagem.className = tipo;
    }

});
