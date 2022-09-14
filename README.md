### API EMPLOYEE

### Rotas

Local:
- (POST) Cria um funcionário - localhost:3001/api/employees

- (DEL) Deleta um funcionário - localhost:3001/api/employees/3

- (GET) Busca todos os funcionários - localhost:3001/api/employees
- (GET) Busca um funcionário - localhost:3001/api/employees/1

- (PUT) Atualiza um funcionário - localhost:3001/api/employees/2

### Requisitos de Instalação
- Node e pacote NPM
- Mysql e Workbench
- Postman

### CONFIGURAÇÕES

### Arquivos à serem configurados
- Copiar o arquivo .env-example e colar como .env
- Editar o arquivo com a variáveis de ambiente

### Executar queries banco de dados
- Rodar as queries db/queries_database.sql

### Importar no postman
- Importar as request no postman postman/Employee.postman_collection.json

### Instalar as dependências e subir a API
- Navega até a pasta employee/api
- Rode - npm install
- Subir a API - npm run start