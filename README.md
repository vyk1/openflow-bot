# OpenFlowBot v2.0 🤖

> Chatbot de fluxo minimalista, responsivo e totalmente baseado em JSON. Versão melhorada com foco em UX/UI e responsividade.

![Version](https://img.shields.io/badge/version-2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen)

## 🎯 O Que Mudou na v2.0

### ✨ Design Completamente Renovado

- **Interface Moderna**: Nova paleta de cores profissional com gradientes sutis
- **Tipografia Aprimorada**: Uso de fontes modernas (DM Sans + JetBrains Mono)
- **Animações Suaves**: Micro-interações que melhoram a experiência
- **Responsividade Total**: Design mobile-first que funciona perfeitamente em todos os dispositivos

### 🚀 Novos Recursos

1. **Indicador de Digitação**: Animação realista mostrando quando o bot está "pensando"
2. **Múltiplos Tipos de Mensagem**: Suporte para info boxes, imagens, links e texto
3. **Sistema de Avatares**: Identificação visual clara entre bot e usuário
4. **Histórico de Conversas**: Rastreamento completo do fluxo de navegação
5. **API de Exportação**: Exporte conversas completas em JSON
6. **Melhor Organização do Código**: Arquitetura modular e extensível

### 📱 Responsividade

- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)
- ✅ Suporte a orientação landscape/portrait

## 📦 Estrutura de Arquivos

```
openflow-bot-v2/
├── chatbot.html           # Interface principal do chatbot
├── openflow-engine.js     # Motor do chatbot (classe OpenFlowBot)
├── flows-example.js       # Exemplo de fluxos de conversa
├── init.js                # Inicialização automática
├── demo.html              # Página de demonstração
└── README.md              # Esta documentação
```

## 🎨 Estrutura JSON Melhorada

### Formato Básico de um Fluxo

```json
{
  "id-do-fluxo": {
    "id": "id-do-fluxo",
    "name": "Nome Descritivo",
    "speech": [
      {
        "type": "info",
        "title": "Título da Mensagem",
        "subtitle": "Subtítulo (opcional)",
        "content": "Conteúdo principal"
      }
    ],
    "content": [
      [
        {
          "type": "text",
          "text": "Mensagem de texto simples"
        }
      ],
      {
        "options": [
          {
            "text": "Texto do botão",
            "followUp": "id-do-proximo-fluxo"
          }
        ]
      }
    ]
  }
}
```

### Tipos de Mensagens Suportados

#### 1. Mensagem de Texto Simples
```json
{
  "type": "text",
  "text": "Sua mensagem aqui"
}
```

#### 2. Info Box (Destaque)
```json
{
  "type": "info",
  "title": "Título",
  "subtitle": "Subtítulo (opcional)",
  "content": "Conteúdo detalhado"
}
```

#### 3. Imagem
```json
{
  "type": "image",
  "url": "https://example.com/image.jpg",
  "alt": "Texto alternativo",
  "caption": "Legenda (opcional)"
}
```

#### 4. Link
```json
{
  "type": "link",
  "text": "Clique aqui",
  "url": "https://example.com"
}
```

## 🚀 Como Usar

### Instalação Básica

1. **Clone ou baixe os arquivos**
```bash
git clone https://github.com/vyk1/openflow-bot.git
cd openflow-bot
```

2. **Abra o arquivo demo.html no navegador**
```bash
# Ou use um servidor local
python -m http.server 8000
# Acesse: http://localhost:8000/demo.html
```

### Integração em Seu Site

#### Opção 1: Iframe (Mais Simples)
```html
<iframe 
  src="chatbot.html" 
  style="position: fixed; bottom: 20px; right: 20px; width: 400px; height: 600px; border: none; border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.12);">
</iframe>
```

#### Opção 2: Integração Direta
```html
<!-- 1. Inclua os arquivos CSS/JS -->
<link rel="stylesheet" href="path/to/chatbot-styles.css">
<script src="path/to/openflow-engine.js"></script>
<script src="path/to/flows-example.js"></script>

<!-- 2. Adicione o container -->
<div id="chat-messages"></div>

<!-- 3. Inicialize -->
<script>
  const bot = new OpenFlowBot({
    container: '#chat-messages',
    botName: 'Seu Bot',
    botAvatar: '🤖',
    userAvatar: '👤'
  });
  
  bot.loadFlows(chatFlows);
  bot.start('saudacao');
</script>
```

## ⚙️ Configuração Avançada

### Opções do Constructor

```javascript
const bot = new OpenFlowBot({
  // Seletor CSS do container
  container: '#chat-messages',
  
  // Delays em milissegundos
  typingDelay: 1000,        // Tempo mostrando "digitando..."
  messageDelay: 400,        // Delay entre mensagens
  
  // Personalização
  botName: 'Nome do Bot',
  botAvatar: '🤖',          // Emoji ou texto
  userAvatar: '👤',         // Emoji ou texto
  
  // Comportamento
  autoScroll: true          // Rolar automaticamente para novas mensagens
});
```

### Métodos Disponíveis

```javascript
// Carregar fluxos
bot.loadFlows(objetoComFluxos);

// Iniciar conversa
bot.start('id-do-fluxo-inicial');

// Limpar chat
bot.clear();

// Reiniciar conversa
bot.restart();

// Obter histórico
const historico = bot.getHistory();

// Exportar conversa
const dados = bot.exportConversation();
```

## 🎨 Personalização de Cores

Edite as variáveis CSS no arquivo `chatbot.html`:

```css
:root {
  --primary: #0066FF;          /* Cor primária */
  --primary-dark: #0052CC;     /* Cor primária escura */
  --secondary: #00D9FF;        /* Cor secundária/destaque */
  --background: #FFFFFF;       /* Fundo geral */
  --surface: #F8F9FA;          /* Superfície/cards */
  --text-primary: #1A1D1F;     /* Texto principal */
  --text-secondary: #6F7578;   /* Texto secundário */
  --border: #E4E7EB;           /* Bordas */
}
```

## 📱 Responsividade

O chatbot se adapta automaticamente a diferentes tamanhos de tela:

- **Desktop (> 768px)**: Layout completo com largura máxima
- **Tablet (480px - 768px)**: Ajustes moderados de espaçamento
- **Mobile (< 480px)**: Layout otimizado para toque

### Breakpoints
```css
@media (max-width: 768px) { /* Tablets */ }
@media (max-width: 480px) { /* Celulares */ }
```

## 🔧 Criando Seus Próprios Fluxos

### Passo 1: Defina a Estrutura
```javascript
const meuFluxo = {
  "inicio": {
    "id": "inicio",
    "name": "Início",
    "speech": [
      {
        "type": "info",
        "title": "Bem-vindo!",
        "content": "Como posso ajudar?"
      }
    ],
    "content": [
      {
        "options": [
          { "text": "Opção 1", "followUp": "fluxo1" },
          { "text": "Opção 2", "followUp": "fluxo2" }
        ]
      }
    ]
  },
  
  "fluxo1": {
    // ... definição do fluxo 1
  },
  
  "fluxo2": {
    // ... definição do fluxo 2
  }
};
```

### Passo 2: Carregue e Inicie
```javascript
bot.loadFlows(meuFluxo);
bot.start('inicio');
```

## 💡 Dicas de UX

1. **Mantenha mensagens curtas**: Usuários mobile preferem textos concisos
2. **Use emojis estrategicamente**: Ajudam na identificação rápida de opções
3. **Limite opções a 3-4**: Evite sobrecarregar o usuário com muitas escolhas
4. **Forneça feedback visual**: Sempre indique o estado atual da conversa
5. **Organize fluxos logicamente**: Crie uma hierarquia clara de navegação

## 🐛 Debugging

### Console do Navegador
```javascript
// Acessar instância do bot
window.chatbot

// Ver histórico
console.log(window.chatbot.getHistory());

// Exportar conversa
console.log(window.chatbot.exportConversation());

// Verificar fluxos carregados
console.log(window.chatbot.flows);
```

## 📊 Comparação v1.0 vs v2.0

| Recurso | v1.0 | v2.0 |
|---------|------|------|
| Responsividade | Básica | Completa |
| Animações | Nenhuma | Múltiplas |
| Tipos de Mensagem | 2 | 4+ |
| Indicador de Digitação | ❌ | ✅ |
| Histórico | ❌ | ✅ |
| Exportação | ❌ | ✅ |
| API Documentada | Parcial | Completa |
| Personalização | Limitada | Extensiva |

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos

- Desenvolvido originalmente para o projeto DRICA (CGE SC)
- DIC (Diretoria de Integridade e Compliance)
- COGES (Coordenadoria de Gestão Estratégicas)

## 📧 Contato

Para dúvidas, sugestões ou reportar bugs, abra uma issue no GitHub.

---

Feito com ❤️ por [vyk1](https://github.com/vyk1)

**OpenFlowBot v2.0** - Tornando chatbots acessíveis para todos! 🚀
