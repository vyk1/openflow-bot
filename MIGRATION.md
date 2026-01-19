# 🔄 Guia de Migração v1.0 → v2.0

Este guia ajudará você a migrar seu OpenFlowBot da versão 1.0 para a versão 2.0 com todas as melhorias.

## 📋 Visão Geral das Mudanças

### O Que Mudou
- ✅ Estrutura de arquivos reorganizada
- ✅ Novo sistema de tipos de mensagem
- ✅ API do bot melhorada
- ✅ CSS completamente reescrito
- ✅ Novos recursos de UX

### O Que Se Mantém Compatível
- ✅ Conceito de fluxos baseados em JSON
- ✅ Sistema de followUp entre fluxos
- ✅ Estrutura básica de opções

## 🔧 Migração Passo a Passo

### Passo 1: Backup dos Arquivos Atuais

Antes de começar, faça backup dos seus arquivos:
```bash
cp chatbot.html chatbot.html.backup
cp index.js index.js.backup
```

### Passo 2: Substituir Arquivos Base

1. Substitua `chatbot.html` pelo novo arquivo
2. Substitua `index.js` por `openflow-engine.js`
3. Adicione os novos arquivos: `init.js` e `flows-example.js`

### Passo 3: Atualizar Estrutura JSON

#### Antes (v1.0):
```javascript
let intentions = {
  "saudacao": {
    "name": "Saudação",
    "speech": [
      {
        "type": "info",
        "title": "Olá!",
        "subtitle": "Bem-vindo"
      }
    ],
    "content": [
      [
        {
          "title": "Texto simples",
          "type": "info"
        }
      ],
      {
        "options": [
          {
            "text": "Opção 1",
            "followUp": "proximo"
          }
        ]
      }
    ]
  }
}
```

#### Depois (v2.0):
```javascript
const chatFlows = {
  "saudacao": {
    "id": "saudacao",           // NOVO: ID explícito
    "name": "Saudação",
    "speech": [
      {
        "type": "info",
        "title": "Olá!",
        "subtitle": "Bem-vindo",
        "content": "Texto adicional"  // NOVO: campo content
      }
    ],
    "content": [
      [
        {
          "type": "text",         // ALTERADO: type agora é mais específico
          "text": "Texto simples" // NOVO: campo text em vez de title
        }
      ],
      {
        "options": [
          {
            "text": "Opção 1",
            "followUp": "proximo"
          }
        ]
      }
    ]
  }
}
```

### Passo 4: Atualizar Inicialização

#### Antes (v1.0):
```javascript
// Código embutido no HTML
window.onload = function() {
  processFlow(intentions["saudacao"]);
}
```

#### Depois (v2.0):
```javascript
// Em init.js ou inline
const bot = new OpenFlowBot({
  container: '#chat-messages',
  botName: 'Seu Bot',
  botAvatar: '🤖'
});

bot.loadFlows(chatFlows);
bot.start('saudacao');
```

## 🔄 Conversão Automática de Fluxos

Use esta função para converter seus fluxos antigos:

```javascript
function convertV1toV2(oldFlows) {
  const newFlows = {};
  
  for (const [key, flow] of Object.entries(oldFlows)) {
    newFlows[key] = {
      id: key,
      name: flow.name,
      speech: flow.speech || [],
      content: (flow.content || []).map(block => {
        if (Array.isArray(block)) {
          // Converter mensagens
          return block.map(msg => {
            if (msg.type === 'info' && msg.title && !msg.content) {
              return {
                type: 'text',
                text: msg.title
              };
            }
            return msg;
          });
        }
        // Opções permanecem iguais
        return block;
      })
    };
  }
  
  return newFlows;
}

// Usar:
const chatFlows = convertV1toV2(intentions);
```

## 📝 Checklist de Migração

- [ ] Backup dos arquivos originais feito
- [ ] Novos arquivos HTML/JS adicionados
- [ ] Estrutura JSON atualizada
- [ ] Inicialização do bot atualizada
- [ ] Teste em desktop realizado
- [ ] Teste em mobile realizado
- [ ] Personalizações CSS aplicadas
- [ ] Funcionalidades customizadas migradas

## 🎨 Migrar Personalizações CSS

### v1.0 - Estilos Inline
```html
<style>
  #drica-frame {
    /* estilos antigos */
  }
</style>
```

### v2.0 - Variáveis CSS
```html
<style>
  :root {
    --primary: #SUA-COR;
    --secondary: #SUA-COR;
  }
</style>
```

## 🔍 Principais Diferenças

### 1. Tipos de Mensagem

| v1.0 | v2.0 |
|------|------|
| `type: "info"` com `title` | `type: "text"` com `text` |
| Info box não tinha `content` | Info box tem `title`, `subtitle` e `content` |
| Sem suporte a imagens inline | `type: "image"` com `url` |
| Links como texto | `type: "link"` dedicado |

### 2. Configuração

| v1.0 | v2.0 |
|------|------|
| Sem configuração | Constructor com opções |
| Nome fixo | `botName` configurável |
| Avatar fixo | `botAvatar` configurável |
| Delays hardcoded | `typingDelay` e `messageDelay` configuráveis |

### 3. API

| v1.0 | v2.0 |
|------|------|
| Funções globais | Métodos de classe |
| Sem histórico | `getHistory()` |
| Sem exportação | `exportConversation()` |
| Sem clear | `clear()` e `restart()` |

## 🐛 Problemas Comuns

### Problema 1: "chatFlows is not defined"
**Solução**: Certifique-se de incluir `flows-example.js` antes de `init.js`
```html
<script src="flows-example.js"></script>
<script src="init.js"></script>
```

### Problema 2: Mensagens não aparecem
**Solução**: Verifique se o seletor do container está correto
```javascript
const bot = new OpenFlowBot({
  container: '#chat-messages'  // ID correto?
});
```

### Problema 3: Estilos quebrados
**Solução**: Certifique-se de incluir as fontes do Google
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
```

### Problema 4: Botões não funcionam
**Solução**: Verifique se o `followUp` aponta para um fluxo existente
```javascript
{
  "text": "Opção",
  "followUp": "fluxo-que-existe"  // Tem que existir em chatFlows
}
```

## 📱 Testando a Migração

### Checklist de Testes

1. **Desktop**
   - [ ] Chat abre corretamente
   - [ ] Mensagens aparecem
   - [ ] Botões funcionam
   - [ ] Animações suaves
   - [ ] Scroll automático

2. **Mobile**
   - [ ] Layout responsivo
   - [ ] Toque nos botões funciona
   - [ ] Texto legível
   - [ ] Performance adequada

3. **Funcionalidades**
   - [ ] Todos os fluxos navegam corretamente
   - [ ] Indicador de digitação aparece
   - [ ] Mensagens de diferentes tipos funcionam
   - [ ] Histórico é salvo

## 🚀 Próximos Passos

Após a migração:

1. **Explore novos recursos**
   - Adicione imagens aos seus fluxos
   - Experimente info boxes mais elaboradas
   - Use links para recursos externos

2. **Personalize**
   - Ajuste cores para sua marca
   - Customize avatares
   - Ajuste delays de mensagens

3. **Otimize**
   - Revise fluxos para melhor UX
   - Adicione mais opções onde faz sentido
   - Simplifique caminhos longos

## 💬 Suporte

Encontrou problemas na migração?

1. Verifique este guia novamente
2. Consulte o README.md
3. Veja os exemplos em `flows-example.js`
4. Abra uma issue no GitHub

## 📊 Comparação de Código

### Exemplo Completo

#### v1.0
```javascript
// Antigo
let intentions = {
  "inicio": {
    "name": "Início",
    "speech": [{
      "type": "info",
      "title": "Olá!"
    }],
    "content": [
      [{ "title": "Bem-vindo", "type": "info" }],
      {
        "options": [
          { "text": "Começar", "followUp": "menu" }
        ]
      }
    ]
  }
}

processFlow(intentions["inicio"]);
```

#### v2.0
```javascript
// Novo
const chatFlows = {
  "inicio": {
    "id": "inicio",
    "name": "Início",
    "speech": [{
      "type": "info",
      "title": "Olá!",
      "content": "Como posso ajudar?"
    }],
    "content": [
      [{ "type": "text", "text": "Bem-vindo" }],
      {
        "options": [
          { "text": "Começar", "followUp": "menu" }
        ]
      }
    ]
  }
}

const bot = new OpenFlowBot();
bot.loadFlows(chatFlows);
bot.start('inicio');
```

---

✅ **Migração Concluída!** Seu OpenFlowBot agora está na v2.0 com todos os recursos modernos! 🎉
