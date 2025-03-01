# IBM watsonx Assistant Workshop

IBM watsonx Assistant é uma plataforma de inteligência artificial conversacional desenhada para ajudar a sobrepor a fricção do suporte tradicional e a entrega de experiência excepcional.

### Guia:

- [Criação de uma conta](#criar-uma-conta-gratuita-na-ibm-cloud---parceria-acadêmica-ibm--universidades)
- [Experiência clássica](#experiência-clássica)
- [Experiência nova no IBM watsonx Assistant](#experiência-nova-no-ibm-watsonx-assistant)

## Criar uma conta gratuita na IBM Cloud - parceria acadêmica IBM & Universidades

A IBM Cloud requer um cartão de crédito para a criação de uma nova conta. O cartão de crédito serve para identificar o usuário e evitar fraúdes no uso da plataforma de nuvem pública. Para estudantes de faculdade e universidades, a IBM possui um programa de parceria que permite a criação de novas contas sem a necessidade de cartão de crédito.

A IBM possui parceria com diversas faculdades e universidades no Brasil. Caso a sua faculdade ou universidade possua esta parceria, você pode ter acesso a benefícios, incluindo um cupom (IBM Cloud Feature Code) para criar uma conta na IBM Cloud sem a necessidade de cartão de crédito. Caso queira verificar a parceria, acesse o [IBM SkillsBuild Software Downloads](https://academic.ibm.com/a2mt/email-auth#/) com o seu email da faculdade/universidade (ex: `rm00000@fiap.com.br`). Você recerá um erro caso a sua faculdade/universidade não possua uma parceria estabelecida com a IBM. Veja os benefícios do programa no site [IBM SkillsBuild](https://skillsbuild.org/college-students)

- [Como solicitar um IBM Cloud Feature Code](https://github.com/academic-initiative/documentation/blob/main/academic-initiative/how-to/How-to-request-and-IBM-Cloud-Feature-Code/readme.md)
- [Como criar uma conta na IBM Cloud](https://github.com/academic-initiative/documentation/blob/main/academic-initiative/how-to/How-to-create-an-IBM-Cloud-account/readme.md)
- [FAQs - IBM SkillsBuild Software Downloads](https://academic.ibm.com/a2mt/faq#/)


## Experiência clássica

A experiência clássica é a maneira mais usada por empresas e desenvolvedores para treinar o modelo do seu chatbot ou assistente virtual. Nesta forma, você irá trabalhar com a estrutura **Intent**, **Entity** e **Dialog**.

Para mudar, é necessário clicar no ícone do usuário (canto superior direito da tela) e clicar na opção "**Switch to new experience**".

![Switch to Classic Experience](static/ibm-watsonx-assistant-workshop-switch-classic-experience.png)

- Chatbot de exemplo: [Pizzaria-do-Seu-Zé-dialog.json](content/Pizzaria-do-Seu-Zé-dialog.json)

## Experiência nova no IBM watsonx Assistant

Na página inicial do seu assistente, você verá um botão azul “Switch to new experience”. Clique no botão e depois clique novamente no botão azul na tela “Switch”. Você será redirecionado para a nova plataforma.

Caso não veja o botão azul inicial, para ser direcionado para a nova experiência, você pode clicar no ícone de pessoa no canto superior direito da tela. Você verá um menu com as informações de usuário e da sua instância do serviço do IBM watsonx Assistant. Nesse menu, você vai localizar o item “Switch to new experience”. Clique no item e confirme a mudança no botão azul “Switch”. Essas são as duas formas de mudar a experiência do serviço.

![Mudança para a nova experiência do watsonx Assistant](static/ibm-watsonx-assistant-workshop00.png)

Na nova plataforma, você entrará na página de boas vindas. Na página, você preencherá os campos obrigatórios para criar o seu primeiro assistente. No nome do assistente, digite “Pizzaria do Seu Zé”. No menu de idioma ou linguagem do assistente, escolha a opção “Brazilian Portuguese”. A lógica é a mesma da experiência clássica. Para ter a melhor experiência da inteligência artificial, você precisa escolher o idioma que será utilizado para que o serviço utilize o modelo daquele idioma selecionado. Assim, as especificidades daquele idioma, que já foram pré-treinados no modelo do idioma, estarão presentes no seu chatbot. 

Clique no botão azul “Next”, localizado no canto superior da tela.

![Página de boas vindas e de criação do seu primeiro assistente](static/ibm-watsonx-assistant-workshop01.png)

A IBM Cloud quer saber qual é o caso de uso deste assistente. Contudo, provavelmente você não terá isso bem definido neste momento. Então selecione as opções mais “neutras”. Isso não mudará o seu treinamento ou o projeto final. No campo sobre onde você irá implementar o seu chatbot, escolha a opção “Web”. No campo sobre a indústria de onde você trabalha, escolha a opção “Software”. No campo sobre o seu papel dentro do time de desenvolvimento do assistente, escolha a opção “Developer”. E no campo sobre qual frase melhor descreve sua necessidade, escolha a opção “I want to provide confidente answers to common questions”.

Uma vez preenchido todos os campos obrigatórios, o botão para avançar estará disponível. Clique no botão azul “Next”, localizado no canto superior da tela.

![Personalização do seu assistente](static/ibm-watsonx-assistant-workshop02.png)

Parte da configuração do seu assistente envolve customizar a interface de usuário do chat. O IBM watsonx Assistant permite customizar o nome do assistente, o layout, o tema claro ou escuro, cor primária, cor segundária, cor de destaque, marca d’água da IBM e a imagem do avatar do seu assistente. Você pode manter as configurações do jeito que está, para seguir para a próxima página. 

Clique no botão azul “Next”, localizado no canto superior da tela.

![Customizar a UI do chat](static/ibm-watsonx-assistant-workshop03.png)

Uma vez definido todas as etapas anteriores, você verá a interface gráfica do chat como uma prévia, com base nas configurações definidas nas etapas anteriores. Não há uma ação necessária nesta página.

Clique no botão azul “Next”, localizado no canto superior da tela.

![Preview do chat e do assistente](static/ibm-watsonx-assistant-workshop04.png)

Na página inicial do seu assistente, você vai acessar o menu lateral esquerdo e clicar na opção “Actions”. Na experiência clássica, você acessava o seu dialog skill para treinar suas intenções e entidades, além de definir os fluxos de conversações através da árvore de diálogo. Na nova experiência, no IBM watsonx Assistant, ao acessar o seu recém-criado assistente, você define as ações (obrigatório) e variáveis (opcional).

![Menu com as opções de Build, Deploy e Improve](static/ibm-watsonx-assistant-workshop05.png)

Segundo a documentação do IBM watsonx Assistant, uma ação significa “Uma ação representa um resultado discreto que você quer que seu assistente consiga realizar em resposta à solicitação de um usuário. Uma ação compreende a interação entre um cliente e o assistente sobre uma pergunta ou solicitação específica. Essa interação começa com a entrada do usuário que inicia a ação (por exemplo, ‘quero sacar dinheiro’)”. O usuário inicia a conversa com uma mensagem. Com base na mensagem, o assistente identifica qual é a ação mais adequada para usar na interação com o usuário. Dentro da ação, a interação ocorre até o último passo da conversa – similar ao fluxo da árvore de decisão da experiência clássica.

Para iniciar o treinamento das suas ações, clique no botão azul “Create action”. 

![Treinamento do chatbot com Actions](static/ibm-watsonx-assistant-workshop06.png)

Na criação da sua nova ação, seja ele o seu primeiro ou demais, a plataforma apresenta um campo para preencher com uma frase em que o usuário diz para iniciar a interação. Esta etapa é similar ao preencher as intenções com frases de exemplo.

Preencha com a frase “Quero pedir uma pizza” e clique no botão azul “Save”.

![Preenchimento da primeira frase na nova action](static/ibm-watsonx-assistant-workshop07.png) 

Além da primeira frase de exemplo para criar uma nova ação, você deve preencher com mais frases de exemplo para melhorar o modelo de reconhecimento da sua ação – e diferenciar das demais ações.

Para inserir mais frases de exemplo ou atualizar a lista existente, clique no retângulo no canto superior esquerdo onde possui a frase “Customer start with”. A plataforma vai abrir a página com a lista de frases de exemplo para esta ação.
Assim que adicionar e atualizar a lista de frases, clique em um dos retângulos abaixo do retângulo com a frase “Customer start with”. O local fica logo abaixo da frase “Conversation steps”. Cada um dos retângulos representa uma etapa do fluxo de conversação.

![Adicionar mais frases de exemplos na action](static/ibm-watsonx-assistant-workshop08.png)

O passo 1, representado como a primeira ação após o IBM watsonx Assistant redirecionar para o usuário para esta ação. 
No campo “Assistant says”, preencha com a frase “Qual é o sabor da piza?” e clique no menu “Define customer response” abaixo. Selecione a opção “Free text”.

![Configurar o primeiro passo da conversação](static/ibm-watsonx-assistant-workshop09.png)

Uma vez definido a mensagem para o usuário e o mecanismo para coletar a resposta do usuário, clique no botão azul “Next step” no canto inferior esquerdo da tela.

![Primeira etapa da conversação configurada](static/ibm-watsonx-assistant-workshop10.png)

No passo 2, em que se inicia após a resposta do usuário a sua pergunta sobre o sabor da pizza, será configurada para coletar a resposta do usuário e retornar a mensagem final.

Clique no menu ao lado direito de “Is taken”, localizado no canto superior da tela, e selecione a opção “with conditions”. Após clicar na opção, a plataforma vai abrir um novo campo de “Conditions” e deixar pré-preenchido. Garanta que a condição esteja selecionada como os textos: “1. Qual é o sabor da pizza?”, “is”, e “defined”.

Preencha o campo “Assistant says” com a seguinte frase “Pedido anotado! Uma pizza de (1. Qual é o sabor da pizza?) será entregue no seu endereço. A entrega vai demorar 40 minutos.”.

Repare que o texto “1. Qual é o sabor da pizza?” está colorido. Isso porque o IBM watsonx Assistant está referenciando com a etapa da conversação anterior onde o usuário fornece o dado do sabor da pizza. Selecione o texto “1. Qual é o sabor da pizza?” no campo e clique na opção fx. Esta opção vai abrir um menu com opções. Você vai selecionar o item “Action step variables” e depois em “1. Qual é o sabor da pizza?”. O resultado final precisa estar igual a imagem de referência (veja figura "Preenchimento da segunda etapa da conversação"). Se estiver igual, a configuração está correta.

![Preenchimento da segunda etapa da conversação](static/ibm-watsonx-assistant-workshop11.png)

A configuração da sua primeira ação está completa. Clique no botão “Preview” no canto inferior direito da tela para testar o seu chatbot. O IBM watsonx Assistant disponibiliza o chat interno para testar a conversação de ponta a ponta. Uma vez com o chat aberto, mande a mensagem “Quero uma pizza” e, na sequencia, envie a mensagem “calabresa”. Você pode alterar as configurações e explorar outras funcionalidades, além de expandir a configuração da sua conversação para extrair mais dados do usuário e usá-los nas interações seguintes.

![Teste de conversação com o chatbot no chat interno](static/ibm-watsonx-assistant-workshop12.png)

Clique no texto “IBM watsonx Assistant Trial” no canto superior esquerdo da tela, no menu superior, para voltar para a tela inicial. Ou, dentro da página de configuração das etapas da conversação, clique no “x” no canto superior direito da tela para fechar a página e voltar para a lista de ações configuradas no seu assistente.

No menu esquerdo, clique no item “Preview” para abrir uma página de teste com o chat inserido. 

![Acesso a página de Preview do assistente](static/ibm-watsonx-assistant-workshop13.png)

Na página, você pode realizar o mesmo teste de conversa com o seu assistente e verificar o mesmo resultado do chat de “Preview”. 

![Teste de conversação com o assistente dentro da página de Preview](static/ibm-watsonx-assistant-workshop14.png)

Por mais simples que seja, você consegue explorar ainda mais funcionalidades e expandir a base de conhecimento para atender outros produtos e serviços dentro da indústria alimentícia. Ou mudar para outra indústria e construir um assistente capaz de atuar dentro de um negócio. As opções são infinitas.

## License
Copyright 2024 Victor Shinya

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.