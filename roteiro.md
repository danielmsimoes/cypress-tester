====================================================================
Funcionalidade: Cadastro no site Adopet

Cenário: Realizar um cadastro no site com sucesso

Passos:

O usuário deixa os campos obrigatórios em branco (nome, email, senha e confirmação de senha) em branco
O usuário clica no botão cadastrar

Resultados Esperados:

O sistema valida os campos obrigatórios em branco. 
O sistema exibe mensagens de erro indicando que os campos obrigatórios devem ser preenchidos
O usuário preenche o campo "E-mail" com um endereço de e-mail válido
O usuário preenche o campo "Senha" com uma senha válida
O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior
O usuário clica no botão "Cadastrar"

Resultados Esperados:

O sistema processa as informações fornecidas.

Regra de Negócio:

E-mail e senha são campos obrigatórios para o cadastro.

=====================================================================
Cenário: Falha na tentativa de cadastro

Passos: 
O usuário acessa a página de cadastro.
O usuário deixa os campos obrigatórios em branco (nome, email, senha e confirmação de senha) em branco
O usuário clica no botão cadastrar

Resultados Esperados:

O sistema valida os campos obrigatórios em branco. 
O sistema exibe mensagens de erro indicando que os campos obrigatórios devem ser preenchidos
=====================================================================

Funcionalidade: Login no site Adopet
Cenário: Login no sistema com sucesso

Passos: 

O usuário acessa a página de login do Adopet
O usuário insere seu email "ana@email.com" e senha "Senha123" nos campos correspondentes.
O usuário clica no botão "Entrar".

Resultados esperados:

O sistema autentica as credencias fornecidas 
O sistema redireciona o usuário para a página "/home"
=====================================================================

Funcionalidade: Login no site Adopet
Cenário: Falha no login do sistema

Passos: 

O usuário acessa a página de login.
O usuário insere um email e senha fora do padrão aceiro nos campos correspondentes. 
O usuário clica no botão "Enter".

Resultados esperados:
O sistema valida as credenciais fornecidas.
O sistema exibe mensagens de erro específicas para o e-mail e senha inseridos incorretamente, como: "Por favor, verifique o e-mail digitado" e/ou "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres".

Regra de Negócio:

O e-mail deve ter um formato válido.
A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres