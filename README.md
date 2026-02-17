# 🐾 PetCare Pro Digital

> Uma caderneta de saúde inteligente para gerenciar seus pets, integrada diretamente com o Google Sheets.

Este projeto é uma aplicação web leve e funcional que permite cadastrar múltiplos pets, gerenciar suas dietas, registrar vacinas com alertas de reforço e manter um histórico completo de consultas veterinárias.

---

## ✨ Funcionalidades

- **🏠 Dashboard de Pets**: Visualize todos os seus pets cadastrados em uma tela inicial limpa.
- **🏷️ Identificação por Espécie**: Ícones automáticos (🐶, 🐱, 🐦, etc.) baseados na espécie informada.
- **🖼️ Galeria de Fotos**: Suporte para fotos de perfil via URL.
- **🥣 Controle Alimentar**: Gestão detalhada de ração e petiscos (marca, gramatura e frequência).
- **💉 Carteira de Vacinação**: Registro de doses aplicadas com cálculo de data para o próximo reforço.
- **🩺 Histórico Médico**: Linha do tempo unificada com vacinas e consultas.
- **📄 Relatórios**: Geração de PDF otimizada para impressão ou compartilhamento com veterinários.
- **📊 Banco de Dados Gratuito**: Integração total com Google Sheets via Apps Script.

---

## 🚀 Como Instalar e Configurar

### 1. Preparação da Planilha
1. Crie uma planilha no [Google Sheets](https://sheets.google.com).
2. Crie três abas (páginas) com os nomes: `Pets`, `Vacinas` e `Consultas`.
3. Vá em **Extensões > Apps Script** e cole o código do backend fornecido.
4. Clique em **Implantar > Nova Implantação**.
5. Configure como **App da Web**, execute como **"Você"** e dê acesso a **"Qualquer pessoa"**.
6. Copie a `URL do App da Web`.

### 2. Configuração do Frontend
1. No arquivo `script.js`, substitua a variável `SCRIPT_URL` pela URL que você copiou do Google.
2. Suba os arquivos (`index.html`, `style.css`, `script.js`) para o seu repositório no GitHub.
3. Ative o **GitHub Pages** nas configurações do repositório (`Settings > Pages`).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5/CSS3**: Estrutura e estilização (incluindo @media print para PDFs).
- **JavaScript (Vanilla)**: Lógica de navegação, filtros de espécie e integração API.
- **Google Apps Script**: Backend para processamento de dados.
- **Google Sheets API**: Banco de dados persistente.

---

## 📖 Como usar

1. **Cadastrar**: Clique em `+ Cadastrar Novo Pet` e preencha os dados e a alimentação.
2. **Acessar**: Clique no card do pet na tela inicial para abrir a carteira completa.
3. **Lançar**: Use as abas internas para registrar novas vacinas ou consultas.
4. **Exportar**: Clique em `Gerar PDF` para criar um documento formatado da saúde do seu pet.

---

## 🛡️ Segurança de Dados
Os dados são armazenados na **sua conta pessoal do Google**. Somente quem possui a URL do seu Apps Script pode interagir com os dados via aplicação.

---
*Desenvolvido para garantir uma vida longa e saudável aos nossos melhores amigos.* 🐾
