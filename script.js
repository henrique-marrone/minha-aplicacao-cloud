const campoNome = document.querySelector("#nome");
const botao = document.querySelector("#botao");
const mensagem = document.querySelector("#mensagem");
const status = document.querySelector("#status");

botao.addEventListener("click", () => {
  const nome = campoNome.value.trim();

  if (nome.length === 0) {
    mensagem.textContent =
      "Minha primeira aplicação está executando na nuvem!";
    status.textContent = "Digite seu nome para personalizar a mensagem.";
    campoNome.focus();
    return;
  }

  mensagem.textContent =
    `Olá, ${nome}! Minha primeira aplicação está executando na nuvem!`;
  status.textContent = "Mensagem personalizada com sucesso.";
});
