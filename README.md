# API — Clínica Odontológica

## Sobre o projeto

API REST desenvolvida para gerenciar pacientes de uma clínica odontológica. O sistema permite cadastrar, consultar, atualizar e excluir pacientes.

## Tecnologias utilizadas

- Node.js
- Express
- MariaDB
- MySQL2
- CORS
- Morgan

## Funcionalidades

- Cadastrar pacientes
- Listar todos os pacientes
- Buscar paciente pelo ID
- Atualizar dados de pacientes
- Excluir pacientes

## Estrutura dos dados

Cada paciente possui os seguintes campos:

- `id`: identificador do paciente
- `nome`: nome do paciente
- `telefone`: telefone do paciente
- `procedimento`: procedimento odontológico

## Configuração do banco de dados

Crie um banco de dados chamado `clinica_odontologica` no MariaDB e execute:

```sql
CREATE TABLE paciente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    procedimento VARCHAR(100) NOT NULL
);
```

Configure as credenciais do banco no arquivo `config/database.js` antes de executar a aplicação. Não publique senhas reais no GitHub.

## Instalação

Instale as dependências:

```bash
npm install
```

## Execução

Inicie o servidor:

```bash
node server.js
```

A API ficará disponível em:

`http://localhost:3000`

## Rotas da API

| Método | Rota | Descrição |
|---|---|---|
| GET | `/paciente` | Lista pacientes |
| GET | `/paciente/:id` | Busca um paciente pelo ID |
| POST | `/paciente` | Cadastra um paciente |
| PUT | `/paciente/:id` | Atualiza um paciente |
| DELETE | `/paciente/:id` | Exclui um paciente |

## Testes

As requisições foram testadas utilizando o Thunder Client no Visual Studio Code.

## Autor

Projeto acadêmico — API da Clínica Odontológica.
