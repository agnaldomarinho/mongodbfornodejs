mongodbfornodejs
================

Mongodb for Nodejs

# Mongodb

O MongoDB é um banco de dados orientado a documentos, foi escrito na linguagem C++,  
sua aplicação possui código aberto, sem esquemas e de alta performance.
Formado com por documentos da sintaxe JSON que por sua vez sua modelagem 
pode ser estruturada em complexas hierarquias e continuar a ser indexáveis e fáceis de buscar.

O MongoDB é totalmente diferente pois ele permite que qualquer tipo de dados seja 
salvo no banco de dados independente pois não há regras de validações rígidas.

- Desvantagem: Nesse aspecto abordado o desenvolvedor tem que prestar atenção para base,
pois todos os dados são armazenados de qualquer forma sem ter um padrão especifico.

- Vantagem: Caso haja novos atributos você pode inserir onde necessário e não como o modelo 
relacional onde normalmente o desenvolvedor criava uma nova coluna na tabela relacionada

Mais informações http://mongodb.org/

# Node JS

Node.js é um projeto de código aberto projetado para auxiliar na escrita de programas 
em JavaScript que conversem com redes, sistema de arquivos ou outro I/O (entrada/saida, 
leitura/escrita).

# NPM

Não se pode falar em módulos em Node sem falar do NPM, ele é o gerenciador de pacotes 
incluso dentro do pacote do Node.

Se você não está usando a NPM e os módulos do Node para implementar sua aplicação, você pode estar fazendo isso errado!

– Modularizar: Escrever pequenos módulos que fazem apenas uma coisa, e integrá-los para 
fazer coisas mais complexas – Usar o gerenciador de pacotes: Usar a NPM para administrar 
suas dependências e parar de se preocupar com elas – Utilizar módulos em Node: É um sistema 
de módulos simples e expressivo que facilita a modularização de sua aplicação em Node e te
proporciona módulos paramétricos de primeira classe.

## Conhecendo os principais comandos
- npm install nome_do_módulo - instala um módulo no projeto.
- npm install nome_do_módulo –save - instala o módulo e adiciona-o na lista de dependências do package.json do projeto.
- npm list - lista todos os módulos existentes no projeto.
- npm list -g - lista todos os módulos globais.
- npm remove nome_do_módulo - desinstala um módulo do projeto.
- npm update nome_do_módulo - atualiza a versão do módulo.
- npm -v - exibe a versão atual do npm.
- npm adduser nome_do_usuário - cria um usuário no site NPM para publicar seu módulo na internet.
- npm whoami - exibe detalhes do seu perfil público do npm (é necessário criar um usuário com o comando anterior).
- npm publish - publica o seu módulo, é necessário ter uma conta ativa no NPM.
