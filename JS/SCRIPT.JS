// SAUDAÇÃO DINÂMICA

const saudacao = document.getElementById("saudacao");

function atualizarSaudacao() {
    const hora = new Date().getHours();

    if (hora >= 5 && hora < 12) {
        saudacao.textContent = "Bom dia! Seja bem-vindo(a)!";
    } else if (hora >= 12 && hora < 18) {
        saudacao.textContent = "Boa tarde! Seja bem-vindo(a)!";
    } else {
        saudacao.textContent = "Boa noite! Seja bem-vindo(a)!";
    }
}

atualizarSaudacao();


// ANO AUTOMÁTICO NO RODAPÉ

const ano = document.getElementById("ano");

ano.textContent = new Date().getFullYear();


// MENU HAMBÚRGUER

const botaoMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function () {
    const aberto = menu.classList.toggle("aberto");

    botaoMenu.setAttribute("aria-expanded", String(aberto));

    botaoMenu.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );

    botaoMenu.textContent = aberto ? "✕" : "☰";
});

// Fecha o menu depois que uma opção é selecionada.

const linksMenu = menu.querySelectorAll("a");

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aberto");

        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");

        botaoMenu.textContent = "☰";
    });
});

// Permite fechar o menu usando a tecla Escape.

document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && menu.classList.contains("aberto")) {
        menu.classList.remove("aberto");

        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");

        botaoMenu.textContent = "☰";
        botaoMenu.focus();
    }
});


// MODO CLARO E ESCURO

const botaoTema = document.getElementById("tema-toggle");

botaoTema.addEventListener("click", function () {
    const modoEscuro = document.documentElement.classList.toggle("escuro");

    if (modoEscuro) {
        botaoTema.textContent = "☀️";
        botaoTema.setAttribute("aria-label", "Ativar modo claro");
    } else {
        botaoTema.textContent = "🌙";
        botaoTema.setAttribute("aria-label", "Ativar modo escuro");
    }
});


// VALIDAÇÃO DO FORMULÁRIO

const formulario = document.getElementById("form-contato");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const consentimento = document.getElementById("consentimento");

const erroNome = document.getElementById("erro-nome");
const erroEmail = document.getElementById("erro-email");
const erroMensagem = document.getElementById("erro-mensagem");
const erroConsentimento = document.getElementById("erro-consentimento");

const retorno = document.getElementById("retorno-formulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // Limpa as mensagens anteriores.

    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroMensagem.textContent = "";
    erroConsentimento.textContent = "";
    retorno.textContent = "";

    let formularioValido = true;

    // Verifica o nome.

    if (nome.value.trim().length < 2) {
        erroNome.textContent = "Digite seu nome com pelo menos 2 caracteres.";
        formularioValido = false;
    }

    // Verifica o e-mail.

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email.value.trim())) {
        erroEmail.textContent = "Digite um e-mail válido.";
        formularioValido = false;
    }

    // Verifica a mensagem.

    if (mensagem.value.trim().length < 10) {
        erroMensagem.textContent =
            "A mensagem precisa ter pelo menos 10 caracteres.";

        formularioValido = false;
    }

    // Verifica o consentimento.

    if (!consentimento.checked) {
        erroConsentimento.textContent =
            "Marque a opção de consentimento para continuar.";

        formularioValido = false;
    }

    // Mostra o resultado da validação.

    if (formularioValido) {
        retorno.textContent =
            "Formulário validado com sucesso! Os dados não foram enviados.";

        retorno.style.color = "var(--roxo)";

        formulario.reset();
    } else {
        retorno.textContent =
            "Confira os campos indicados e tente novamente.";

        retorno.style.color = "#c62828";
    }
});