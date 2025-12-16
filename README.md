🧮 Calculadora Simples

Uma calculadora funcional desenvolvida com HTML, CSS e JavaScript, criada para praticar lógica de programação e manipulação do DOM.

🚀 Sobre o Projeto

O objetivo deste projeto foi construir uma calculadora simples, com as quatro operações básicas (soma, subtração, multiplicação e divisão), aplicando conceitos de JavaScript puro e pensamento lógico.

Além da parte visual, o foco principal foi entender como lidar com eventos, atualizar a tela dinamicamente e trabalhar com o fluxo lógico das operações.

⚙️ Tecnologias Utilizadas

HTML5 — estrutura da interface

CSS3 — estilização e layout responsivo

JavaScript (ES6) — toda a lógica funcional

💡 Lógica por Trás

A calculadora funciona da seguinte forma:

Captura de clique:
Cada botão (número ou operador) é detectado através de addEventListener, e seu valor é exibido na tela.

Formação da expressão:
A cada clique, o valor é concatenado em uma string, formando algo como "7+3*2".

Execução do cálculo:
Quando o botão = é pressionado, o JavaScript usa a função eval() (ou lógica própria com operadores) para avaliar a expressão completa e retornar o resultado.

Tratamento de erros:
Caso o usuário digite algo inválido (como 2++2), é tratado com um try...catch para exibir uma mensagem amigável.

Limpeza e reset:
O botão C limpa a tela e zera a variável da expressão.

🧠 Aprendizados

Manipular o DOM para exibir e atualizar resultados em tempo real.

Compreender o fluxo lógico de entrada de dados e execução de operações.

Aplicar estruturas condicionais e tratamento de erros.

Pensar de forma autônoma e lógica, quebrando o problema em pequenas partes (entrada → processamento → saída).


📂 Como Executar

Clone este repositório:

git clone https://github.com/seuusuario/calculadora.git


Abra o arquivo index.html no navegador.

Pronto! A calculadora estará funcionando 🎯
