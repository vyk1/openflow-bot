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