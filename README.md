# Minha Aplicação Cloud

Projeto da Aula 08 de Cloud Computing. Aplicação web estática desenvolvida com HTML, CSS e JavaScript.

## Funcionalidades

- Exibe o título **MINHA APLICAÇÃO CLOUD**.
- Apresenta uma mensagem sobre a aplicação executando na nuvem.
- Permite informar o nome e personalizar a mensagem.
- Possui layout responsivo para computador e celular.

## Arquivos

- `index.html`: estrutura da página.
- `style.css`: aparência e responsividade.
- `script.js`: interação do botão.
- `.gitignore`: arquivos que não precisam ir para o GitHub.

## Executar localmente

1. Extraia os arquivos da pasta.
2. Abra `index.html` no navegador.
3. Digite seu nome e clique em **Personalizar mensagem**.

Não é necessário instalar dependências ou executar servidor.

## Publicar no GitHub

1. Entre em https://github.com e faça login.
2. Clique em **New repository**.
3. Dê o nome `minha-aplicacao-cloud`.
4. Selecione **Public** e crie o repositório.
5. Na página do repositório, escolha **Add file > Upload files**.
6. Envie os arquivos desta pasta (incluindo `index.html`, `style.css`, `script.js`, `.gitignore` e `README.md`).
7. Clique em **Commit changes**.

## Publicar no Netlify usando o GitHub

1. Entre em https://www.netlify.com e crie uma conta ou faça login.
2. Escolha entrar com GitHub, autorizando a conexão.
3. No painel do Netlify, selecione **Add new project** ou **Add new site** e depois **Import an existing project**.
4. Escolha **GitHub** e autorize o acesso ao repositório, se solicitado.
5. Selecione `minha-aplicacao-cloud`.
6. Como é um site estático simples, deixe o comando de build e o diretório de publicação vazios, caso o painel permita. Se exigir um diretório, informe `.` (raiz do repositório).
7. Clique em **Deploy**.
8. Aguarde a publicação e abra a URL `*.netlify.app` gerada.

## O que entregar

- Link do repositório GitHub.
- Link público do site no Netlify.
- Captura de tela do site aberto e funcionando.

## Observação

Se fizer qualquer alteração nos arquivos e enviar um novo commit para o GitHub, o Netlify normalmente executará um novo deploy automaticamente.
