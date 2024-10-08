### Documentação: Como Desenvolver o JSON para o Chatbot

Este guia foi criado para que qualquer pessoa, mesmo sem conhecimento técnico profundo, consiga entender e desenvolver o JSON do chatbot de forma simples e eficaz.

### Estrutura Básica de uma Intenção (Intention)
Uma **intenção** no chatbot é o tópico ou propósito de uma conversa. Quando o usuário interage com o chatbot, ele escolhe opções e segue para diferentes intenções. Cada intenção tem falas, conteúdos adicionais (como botões), e pode ter seguimentos (ou **follow-ups**).

#### Exemplo Básico de Estrutura:
```json
{
  "name": "BoasVindas",
  "speech": ["Olá, seja bem-vindo! Como posso ajudar?"],
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
```

### Passo a Passo para Criar o JSON do Chatbot

#### 1. **Criar uma Nova Intenção**
Cada **intenção** é uma nova parte da conversa do bot. Você deve começar criando um nome único para essa intenção, que vai identificar o tópico ou o que o bot vai falar.

- O nome da intenção vai no campo `"name"`.
- **Exemplo**:
  ```json
  "name": "BoasVindas"
  ```

#### 2. **Adicionar o Texto Inicial (Speech)**
No campo `"speech"`, você coloca o que o bot vai dizer primeiro. Esta é a mensagem que aparecerá na tela do usuário assim que a intenção for ativada.

- **Dica**: Limite o texto a **150 caracteres** para que o balão de fala não fique muito grande.
- **Exemplo**:
  ```json
  "speech": ["Olá, seja bem-vindo! Como posso ajudar?"]
  ```

#### 3. **Adicionar Conteúdos Opcionais**
O campo `"content"` é onde você pode adicionar informações adicionais que o bot vai exibir, como textos, imagens ou botões de opções.

- **content[0]**: É onde você pode adicionar mais diálogos ou informações que serão exibidas para o usuário.
- **content[1]**: Aqui você pode colocar as **opções de botão** que o usuário vai ver e poderá escolher.

- **Exemplo**:
  ```json
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
  ]
  ```

#### 4. **Adicionar Botões de Ação (Opcional)**
Se você quiser adicionar botões de opções para o usuário clicar, insira-os dentro do campo `content[1].options`. Cada botão deve ter:
- **Texto** (`text`): O que vai aparecer no botão.
- **Seguimento** (`followUp`): Qual intenção ou ação será seguida ao clicar no botão.
- **Tipo** (`type`): Define se o botão termina a conversa (`"end"`) ou continua com uma nova interação (`"next"`).

- **Exemplo**:
  ```json
  {
    "text": "Quero saber mais",
    "followUp": "SaberMais",
    "type": "next"
  }
  ```

#### 5. **Adicionar Follow-ups**
Os **follow-ups** são as ramificações da conversa, ou seja, o que acontece depois que o usuário clica em uma das opções. Se o follow-up levar a uma nova intenção, ele pode ter dois tipos:
- **"next"**: Renderiza o botão e segue para a próxima intenção.
- **"end"**: Não renderiza o botão e encerra a conversa ou redireciona para outra parte da interação.

- **Exemplo**:
  ```json
  "followUps": {
    "SaberMais": { "type": "next" },
    "Despedida": { "type": "end" }
  }
  ```

### Dicas Importantes

1. **Limite de Caracteres**: 
   - As respostas do bot devem ter no máximo **150 caracteres** para manter o layout organizado e legível.
  
2. **Organização dos Botões**:
   - Coloque os botões com **mais texto primeiro**. Isso melhora a legibilidade e experiência do usuário.

3. **Interações (End vs Next)**:
   - **End**: Quando você quer que a conversa termine sem renderizar o botão.
   - **Next**: Quando você quer permitir que o botão seja mostrado e o usuário clique para continuar.

### Estruturas Detalhadas

#### Intention (Intenção)
```json
{
  "intencao":{
    "name": "NomeDaIntencao",
    "speech": [
      {
        "text": "Texto da fala do bot",
        "type": "text"
      }
    ],
    "content": [
      {
        "type": "info",
        "title": "Texto opcional que pode aparecer abaixo da fala do bot"
      },
      {
        "options": [
          { "text": "Texto do botão", "followUp": "ChaveDoFollowUp", "type": "next" }
        ]
      }
    ],
    "followUps": {
      "ChaveDoFollowUp": { "type": "next" }
    }
  }
}
```

#### Exemplo Completo
Aqui está um exemplo completo de um diálogo onde o bot saúda o usuário e oferece opções para continuar ou encerrar a conversa:
```json
{
    "boas-vindas":{
      "name": "BoasVindas",
      "speech": [
        {
          "text": "Texto da fala do bot",
          "type": "text"
        }
      ],
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
}
```

### Conclusão
Com essa documentação, mesmo alguém leigo poderá construir a estrutura de intenções do chatbot, personalizar diálogos e interações e desenvolver novas conversas de forma simples e eficaz.