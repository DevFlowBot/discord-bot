# 🤖 DevFlowBot

Bot Discord modular com suporte a internacionalização, comandos dinâmicos e integração com banco de dados PostgreSQL.

---

## 📁 Estrutura de Diretórios

### `src/`

Contém as configurações principais e a estrutura do bot, incluindo integração com o Discord e o banco de dados:

- **`_partials/`**: Funções auxiliares para carregar dinamicamente handlers e módulos:
  - **`index.js`**: Contém funções como `loadHandlers` (para carregar arquivos de manipuladores de eventos e comandos) e `loadModules` (para carregar módulos auxiliares).
- **`client/`**: Configurações do cliente Discord (exemplo: inicialização do bot, configuração de banco de dados e internacionalização).
- **`handlers/`**: Manipuladores de comandos, eventos e interações do bot.
- **`locales/`**: Arquivos de tradução para diferentes idiomas.
- **`schemas/`**: Definições e configurações do banco de dados (migrations, seeds, etc.).

### `package/`

Contém os comandos, eventos e funções auxiliares específicos para o funcionamento do bot:

- **`commands/`**: Comandos do bot, divididos em dois tipos:
  - **`prefix/`**: Comandos acionados por prefixo.
  - **`slash/`**: Comandos do tipo slash (interações com barra).
- **`events/`**: Eventos do bot, como interações com o Discord (exemplo: login, mensagem recebida, etc.).
- **`_partials/`**: Funções auxiliares e utilitários internos usados para modularizar o código.

---

## 🛠️ Banco de Dados

O projeto utiliza **PostgreSQL** como banco de dados relacional, com **Knex.js** como query builder.

Para visualizar e gerenciar seus dados com uma interface gráfica amigável, recomenda-se o uso do **[Beekeeper Studio](https://www.beekeeperstudio.io/)** — uma ferramenta leve e open-source para gerenciar bancos SQL.

---

## ▶️ Como Executar o Projeto

### 1. Configure o arquivo `.env`:

 - O projeto já inclui um arquivo `.env copy`. Renomeie este arquivo para `.env` e edite-o conforme necessário para configurar as variáveis de ambiente.

### 2. Instale as dependências:
   ```bash
   yarn install
   ```

### 3. Rode as migrations:
   ```bash
   yarn db:prepare
   ```

 ### 4. Inicialize o projeto:
  ```bash
  yarn dev
   ```
