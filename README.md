# 🤖 DevFlowBot

Bot Discord modular com suporte a internacionalização, comandos dinâmicos e integração com banco de dados PostgreSQL.

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
