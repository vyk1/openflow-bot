### Exercício:
Crie um arquivo JSON que represente a estrutura do chatbot para o "Prêmio Honestidade nas Escolas", da CGE-SC, contendo as seguintes propriedades:

1. **Nome da intenção**: Nome da intenção que representa o propósito, como "Sobre o Prêmio", "Objetivos", "Regras", etc.
2. **Diálogo**: Uma lista de falas que o chatbot irá pronunciar para explicar o tema ou o tópico relacionado.
3. **Conteúdo adicional**: Informações extras, como links para páginas da CGE-SC, imagens, ou outras opções que o usuário pode escolher.
4. **Ramificações**: Opções de seguimento para o chatbot, como "Quero saber mais sobre as regras" ou "Me inscreva no prêmio".

#### Exemplo de estrutura JSON:
```json
{
    "saudacao": {
        "name": "Sobre o Prêmio",
        "speech": [
            {
                "text": "O Prêmio Honestidade nas Escolas é uma iniciativa da CGE-SC...",
                "type": "text"
            }
        ],
        "content": [
            [
                {
                    "info": "Mais detalhes podem ser encontrados no site oficial.",
                    "link": "https://www.cge.sc.gov.br/integridade-e-compliance/premio-honestidade-nas-escolas"
                }
            ],
            {
                "options": [
                    {
                        "option": "Quero saber mais sobre os objetivos",
                        "followUp": "objetivos",
                        "type": "next"
                    },
                    {
                        "option": "Como participar?",
                        "followUp": "regras",
                        "type": "next"
                    }
                ]
            }
        ],
        "followUps": [
            {
                "name": "Objetivos",
                "speech": [
                    "O objetivo do prêmio é promover a honestidade entre os estudantes..."
                ],
                "content": {},
                "followUps": []
            },
            {
                "name": "Regras",
                "speech": [
                    "Para participar do prêmio, é necessário..."
                ],
                "content": {},
                "followUps": []
            }
        ]
    },
    "despedida": {
        "name": "Despedida",
        "speech": [
            {
                "text": "Obrigado por participar do Prêmio Honestidade nas Escolas!",
                "type": "text"
            }
        ],
        "content": [],
        "followUps": []
    }
}
```

### Tarefa:
Implemente a estrutura JSON com pelo menos três intenções relacionadas ao "Prêmio Honestidade nas Escolas" da CGE-SC, seguindo o exemplo acima.

Você pode usar o conteúdo do site da CGE para preencher os detalhes do JSON.

----------------------------------------------------------------------------

Tarefa 1
{
  "name": "BoasVindas",
  "speech": ["Olá, seja bem-vindo ao chatbot! Como posso ajudar?"],
  "content": [
    {
      "type": "info",
      "title": "Aqui estão as opções disponíveis"
    },
    {
      "options": [
        { "text": "Quero saber mais", "followUp": "SaberMais", "type": "next" },
        { "text": "Finalizar", "followUp": "Despedida", "type": "end" }
      ]
    }
  ],
  "followUps": {
    "SaberMais": { "type": "next" },
    "Despedida": { "type": "end" }
  }
}
------------------------------------------------------
```json

let intentions = 
{
    "saudacao": {
        "name": "Saudação",
        "speech": [
            {
                "type": "info",
                "title": "Olá! Eu sou a CATARINA, assistente da DIC para auxiliar na inscrição do prêmio Honestidade nas Escolas 2024",
                "subtitle": "Meu objetivo é te auxiliar nas dúvidas relacionadas ao prêmio. Vamos começar?"
            }
        ],
        "content": [
            [
                {
                    "title": "Sua dúvida é sobre o processo de inscrição ou sobre o andamento do prêmio",
                    "type": "info"
                }
            ],
            {
                "options": [
                    {
                        "text": "Já fiz a minha inscrição, tenho dúvidas sobre o prêmio",
                        "followUp": "fiz-inscricao"
                        "type": "next"
                    },
                    {
                        "text": "Não fiz a minha inscrição e estou com dúvidas sobre esse processo",
                        "followUp": "nao-fiz-inscricao"
                        "type": "next"
                    },
                ]
            }
        ],
        "followUps": [
            "nao-fiz-incricao": {
                "speech": [
                    {
                        "type": "info",
                        "title": "Selecione a opção referente a sua dúvida."
                    }
                    {
                "options": [
                    {
                        "text": "Tenho dúvidas sobre a documentação",
                        "followUp": ".doc",
                        "type": "next",
                    },
                    {
                        "text": "Tenho dúvidas com os prazos",
                        "followUp": ".prazo",
                        "type": "next",
                    },
                    {
                        "text": "Outras dúvidas",
                        "followUp": ".outro",
                        "type": "next",
                    },
                ]
            }
              
```