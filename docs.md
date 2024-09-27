# Documentação da Estrutura JSON para Respostas do Chatbot DRICA

Este documento descreve a estrutura JSON utilizada para definir as intenções e as respostas que o chatbot <strong>DRICA</strong> irá apresentar aos usuários. A <strong>DRICA</strong> tem como foco auxiliar na prevenção e orientação sobre violência no trabalho no setor público.

## Estrutura Geral
A estrutura JSON segue uma organização hierárquica em que as <strong>intenções</strong> (intents) são os
        principais nós de diálogo, e dentro de cada uma, temos <strong>mensagens de fala</strong> (speech),
        <strong>conteúdos</strong> (content), e <strong>opções de seguimento</strong> (followUps). Cada intenção pode
ter diversas ramificações baseadas nas escolhas feitas pelo usuário.

### Intenções
Cada intenção corresponde a um tópico específico ou uma pergunta a ser tratada pelo chatbot. As intenções estão
        divididas em categorias com os seguintes campos:
    <ul>
        <li><strong>name</strong>: O nome da intenção (para fins de identificação).</li>
        <li><strong>speech</strong>: Um array de objetos que contém a resposta textual ou visual do chatbot.</li>
        <li><strong>content</strong>: Define as opções que o usuário pode escolher e outros tipos de conteúdo
            complementar.</li>
        <li><strong>followUps</strong>: As intenções de seguimento, que especificam as respostas e opções subsequentes
            dependendo da escolha do usuário.</li>
    </ul>

Content é um array com 2 elementos
* O primeiro é oum array com um único elemento que é o diálogo inicial
* O segundo é um objeto "options" que é um array com n elementos e representa os botões de resposta


followUps é 



```json
"content": [
    [
        {
            "title": "Me diga, você sabe o que é um \"bot\"?",
            "type": "info"
        }
    ],
    {
        "options": [
            {
                "text": "Sei o que é um bot",
                "followUp": "sei-bot"
            },
            {
                "text": "Não sei o que é um bot",
                "followUp": "nao-sei-bot"
            }
        ]
    }
],
```


## Desenvolvendo um diálogo

É recomendado que cada ação tenha no máximo 200 caracteres para que o balão de conversa não fique muito grande.

> "end vs "next"
* use "end" para finalizar um diálogo e já encaminhar para a próxima intenção (sem botão)

* "followUps" não podem estar vazios