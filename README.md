# OpenFlowBot

**OpenFlowBot** é um chatbot de fluxo minimalista, desenvolvido com HTML, CSS e JavaScript puro, sem dependências externas, projetado para ser embutido em qualquer site. Este projeto foca em fornecer uma solução leve, acessível e de código aberto para fluxos de conversa baseados em JSON.

## Recursos

- **Flexível e Embutível**: Integre facilmente em qualquer site com uma única configuração.
- **JSON como Base**: Fluxo de conversa 100% configurável usando arquivos JSON.
- **Suporte a Múltiplos Tipos de Conteúdo**:
  - Mensagens informativas (parágrafos destacados).
  - Links clicáveis.
  - Imagens.

## Exemplo de Uso

### Estrutura Básica

Adicione o seguinte código HTML ao seu site:

```html
    <iframe src="chatbot.html" id="drica-frame" style="border:none; position:fixed; bottom:20px; right:20px; z-index:999;"></iframe>
```
Inclua o arquivo `chatbot.html` no seu HTML

### Estrutura do JSON

Exemplo de estrutura para configurar um fluxo em `index.js`

```js
let intentions = {
 "saudacao": {
        "name": "Saudação",
        "speech": [
            {
                "type": "info",
                "title": "Olá! Eu sou a DRICA, assistente da DIC para prevenir e tirar dúvidas sobre violência do trabalho no setor",
                "subtitle": "Meu objetivo é ajudar você a entender melhor o que é violência no trabalho e como preveni-la. Vamos começar?"
            }
        ],
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
  }
}
```

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/vyk1/openflow-bot
   ```
2. Adicione os arquivos ao seu projeto:
   - `chatbot.html`
   - `index.js`

3. Configure o fluxo no JSON em `index.js`.

## Licença

Este projeto é licenciado sob a **[MIT License](LICENSE)**.

## Sobre

OpenFlowBot foi inicialmente desenvolvido como parte do projeto DRICA desenvolvido na [CGE SC](https://cge.sc.gov.br) pela COGES (Coordenadoria de Gestão Estratégicas) e a DIC (Diretoria de Integridade e Compliance) em 2024.
O tema foi violência no trabalho no setor público. No entanto, o design do OpenFlowBot é flexível e permite aplicá-lo a qualquer cenário de chatbot com fluxos baseados em JSON.
