# Casos de Teste – Sistema Adopet
## Funcionalidade: Cadastro no site
### Cenário 1: Realizar cadastro com sucesso

Pré-condição: Usuário na página de cadastro.

### Passos

1. Deixar os campos obrigatórios (Nome, E-mail, Senha e Confirmação de Senha) em branco

2. Clicar no botão Cadastrar

3. Preencher o campo E-mail com um endereço válido

4. Preencher o campo Senha com uma senha válida

5. Preencher o campo Confirmação de Senha com a mesma senha

6. Clicar novamente no botão Cadastrar

### Resultados Esperados

* O sistema valida os campos obrigatórios

* O sistema exibe mensagens de erro para campos vazios

* O sistema processa corretamente as informações após preenchimento válido

### Regra de Negócio

E-mail e Senha são campos obrigatórios

### Cenário 2: Falha ao tentar cadastrar com campos vazios

Pré-condição: Usuário na página de cadastro.

### Passos

1. Deixar os campos obrigatórios em branco

2. Clicar no botão Cadastrar

### Resultados Esperados

* O sistema valida os campos obrigatórios

* O sistema exibe mensagens de erro indicando que os campos devem ser preenchidos

## Funcionalidade: Login no site
### Cenário 3: Login com sucesso

Pré-condição: Usuário previamente cadastrado.

### Passos

1. Acessar a página de login

2. Inserir o e-mail ana@email.com

3. Inserir a senha Senha123

4. Clicar no botão Entrar

### Resultados Esperados

* O sistema autentica as credenciais

* O usuário é redirecionado para /home

### Cenário 4: Falha no login

Pré-condição: Usuário na página de login.

### Passos

1. Inserir e-mail em formato inválido

2. Inserir senha fora do padrão aceito

3. Clicar no botão Entrar

### Resultados Esperados

* O sistema valida as credenciais

* O sistema exibe mensagens como:

* "Por favor, verifique o e-mail digitado"

* "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres"

### Regra de Negócio

* O e-mail deve ter formato válido

* A senha deve conter:

* Pelo menos 1 letra maiúscula

* Pelo menos 1 número

* Entre 6 e 15 caracteres