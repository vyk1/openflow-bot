/**
 * OpenFlowBot - Exemplos Avançados
 * Casos de uso e padrões avançados
 */

// ============================================
// EXEMPLO 1: Quiz Interativo
// ============================================
const quizFlows = {
  "inicio-quiz": {
    "id": "inicio-quiz",
    "name": "Quiz - Início",
    "speech": [
      {
        "type": "info",
        "title": "🎯 Quiz de Conhecimento",
        "content": "Teste seus conhecimentos com 5 perguntas!"
      }
    ],
    "content": [
      {
        "options": [
          { "text": "🚀 Começar Quiz", "followUp": "pergunta-1" }
        ]
      }
    ]
  },
  
  "pergunta-1": {
    "id": "pergunta-1",
    "name": "Pergunta 1",
    "speech": [
      {
        "type": "text",
        "text": "Pergunta 1 de 5: O que é JavaScript?"
      }
    ],
    "content": [
      {
        "options": [
          { "text": "Uma linguagem de programação", "followUp": "resposta-correta-1" },
          { "text": "Um framework CSS", "followUp": "resposta-errada-1" },
          { "text": "Um banco de dados", "followUp": "resposta-errada-1" }
        ]
      }
    ]
  },
  
  "resposta-correta-1": {
    "id": "resposta-correta-1",
    "name": "Resposta Correta",
    "speech": [
      {
        "type": "info",
        "title": "✅ Correto!",
        "content": "JavaScript é uma linguagem de programação!"
      }
    ],
    "content": [
      {
        "options": [
          { "text": "➡️ Próxima pergunta", "followUp": "pergunta-2" }
        ]
      }
    ]
  }
  
  // ... continuar com mais perguntas
};

// ============================================
// EXEMPLO 2: Sistema de Navegação com Breadcrumb
// ============================================
const navigationFlows = {
  "home": {
    "id": "home",
    "name": "Home",
    "speech": [
      {
        "type": "info",
        "title": "🏠 Menu Principal",
        "content": "Escolha uma categoria:"
      }
    ],
    "content": [
      {
        "options": [
          { "text": "📚 Produtos", "followUp": "produtos" },
          { "text": "💼 Serviços", "followUp": "servicos" },
          { "text": "📞 Contato", "followUp": "contato" }
        ]
      }
    ]
  },
  
  "produtos": {
    "id": "produtos",
    "name": "Produtos",
    "speech": [
      {
        "type": "text",
        "text": "🏠 Home > 📚 Produtos"
      },
      {
        "type": "info",
        "title": "📦 Nossos Produtos",
        "content": "Confira nossas categorias de produtos"
      }
    ],
    "content": [
      {
        "options": [
          { "text": "💻 Eletrônicos", "followUp": "produtos-eletronicos" },
          { "text": "📱 Acessórios", "followUp": "produtos-acessorios" },
          { "text": "🔙 Voltar", "followUp": "home" }
        ]
      }
    ]
  }
};

// ============================================
// EXEMPLO 3: Coleta de Dados do Usuário
// ============================================
const formFlows = {
  "coleta-inicio": {
    "id": "coleta-inicio",
    "name": "Coleta - Início",
    "speech": [
      {
        "type": "info",
        "title": "📝 Vamos coletar alguns dados",
        "content": "Preciso de algumas informações para continuar."
      }
    ],
    "content": [
      [
        {
          "type": "text",
          "text": "Qual é o seu nome?"
        }
      ],
      {
        "options": [
          { 
            "text": "✏️ Informar nome",
            "followUp": "coleta-nome",
            "action": function(bot) {
              // Aqui você pode adicionar lógica para capturar input
              const nome = prompt("Digite seu nome:");
              if (nome) {
                bot.userData = bot.userData || {};
                bot.userData.nome = nome;
                bot.addUserMessage(nome);
              }
            }
          }
        ]
      }
    ]
  },
  
  "coleta-nome": {
    "id": "coleta-nome",
    "name": "Coleta - Email",
    "speech": [
      {
        "type": "text",
        "text": "Ótimo! Agora preciso do seu email."
      }
    ],
    "content": [
      {
        "options": [
          { "text": "📧 Informar email", "followUp": "confirmacao" }
        ]
      }
    ]
  }
};

// ============================================
// EXEMPLO 4: Conteúdo Multimídia
// ============================================
const multimediaFlows = {
  "galeria": {
    "id": "galeria",
    "name": "Galeria",
    "speech": [
      {
        "type": "info",
        "title": "🖼️ Galeria de Imagens",
        "content": "Confira nossos destaques visuais"
      }
    ],
    "content": [
      [
        {
          "type": "image",
          "url": "https://via.placeholder.com/400x300/0066FF/FFFFFF?text=Destaque+1",
          "alt": "Imagem de destaque 1",
          "caption": "Nosso produto em ação"
        }
      ],
      [
        {
          "type": "text",
          "text": "Esta é uma demonstração de como exibir imagens no chat."
        }
      ],
      {
        "options": [
          { "text": "📷 Ver mais imagens", "followUp": "galeria-2" },
          { "text": "🔙 Voltar", "followUp": "inicio" }
        ]
      }
    ]
  }
};

// ============================================
// EXEMPLO 5: FAQ Estruturado
// ============================================
const faqFlows = {
  "faq-inicio": {
    "id": "faq-inicio",
    "name": "FAQ",
    "speech": [
      {
        "type": "info",
        "title": "❓ Perguntas Frequentes",
        "content": "Selecione uma categoria para ver as perguntas mais comuns."
      }
    ],
    "content": [
      {
        "options": [
          { "text": "💳 Pagamentos", "followUp": "faq-pagamentos" },
          { "text": "📦 Entregas", "followUp": "faq-entregas" },
          { "text": "🔄 Devoluções", "followUp": "faq-devolucoes" },
          { "text": "💬 Falar com atendente", "followUp": "atendimento-humano" }
        ]
      }
    ]
  },
  
  "faq-pagamentos": {
    "id": "faq-pagamentos",
    "name": "FAQ - Pagamentos",
    "speech": [
      {
        "type": "info",
        "title": "💳 Pagamentos",
        "content": "Veja as perguntas mais comuns sobre pagamentos:"
      }
    ],
    "content": [
      {
        "options": [
          { "text": "Quais formas de pagamento aceitam?", "followUp": "faq-formas-pagamento" },
          { "text": "Posso parcelar minha compra?", "followUp": "faq-parcelamento" },
          { "text": "Como funciona o PIX?", "followUp": "faq-pix" },
          { "text": "🔙 Voltar às categorias", "followUp": "faq-inicio" }
        ]
      }
    ]
  },
  
  "faq-formas-pagamento": {
    "id": "faq-formas-pagamento",
    "name": "FAQ - Formas de Pagamento",
    "speech": [
      {
        "type": "info",
        "title": "💳 Formas de Pagamento",
        "content": "Aceitamos:\n\n• Cartão de crédito (Visa, Mastercard, Elo)\n• Cartão de débito\n• PIX\n• Boleto bancário\n• Transferência bancária"
      }
    ],
    "content": [
      {
        "options": [
          { "text": "❓ Outra pergunta", "followUp": "faq-pagamentos" },
          { "text": "🏠 Menu principal", "followUp": "faq-inicio" }
        ]
      }
    ]
  }
};

// ============================================
// EXEMPLO 6: Agendamento com Horários
// ============================================
const agendamentoFlows = {
  "agendar-inicio": {
    "id": "agendar-inicio",
    "name": "Agendamento",
    "speech": [
      {
        "type": "info",
        "title": "📅 Agendar Consulta",
        "content": "Vamos encontrar o melhor horário para você!"
      }
    ],
    "content": [
      [
        {
          "type": "text",
          "text": "Qual período você prefere?"
        }
      ],
      {
        "options": [
          { "text": "🌅 Manhã (8h - 12h)", "followUp": "agendar-manha" },
          { "text": "🌞 Tarde (13h - 17h)", "followUp": "agendar-tarde" },
          { "text": "🌙 Noite (18h - 20h)", "followUp": "agendar-noite" }
        ]
      }
    ]
  },
  
  "agendar-manha": {
    "id": "agendar-manha",
    "name": "Agendamento - Manhã",
    "speech": [
      {
        "type": "text",
        "text": "Horários disponíveis pela manhã:"
      }
    ],
    "content": [
      {
        "options": [
          { "text": "⏰ 08:00", "followUp": "confirmar-agendamento" },
          { "text": "⏰ 09:00", "followUp": "confirmar-agendamento" },
          { "text": "⏰ 10:00", "followUp": "confirmar-agendamento" },
          { "text": "⏰ 11:00", "followUp": "confirmar-agendamento" },
          { "text": "🔙 Escolher outro período", "followUp": "agendar-inicio" }
        ]
      }
    ]
  }
};

// ============================================
// EXEMPLO 7: Tutorial com Progresso
// ============================================
const tutorialFlows = {
  "tutorial-inicio": {
    "id": "tutorial-inicio",
    "name": "Tutorial",
    "speech": [
      {
        "type": "info",
        "title": "👋 Bem-vindo ao Tutorial!",
        "subtitle": "Passo 1 de 5",
        "content": "Vou te ensinar como usar nossa plataforma em 5 passos rápidos."
      }
    ],
    "content": [
      {
        "options": [
          { "text": "▶️ Começar", "followUp": "tutorial-passo-1" },
          { "text": "⏭️ Pular tutorial", "followUp": "inicio" }
        ]
      }
    ]
  },
  
  "tutorial-passo-1": {
    "id": "tutorial-passo-1",
    "name": "Tutorial - Passo 1",
    "speech": [
      {
        "type": "info",
        "title": "📱 Passo 1: Interface",
        "subtitle": "Progresso: 20%",
        "content": "Esta é a interface principal. Aqui você pode navegar entre diferentes seções usando os botões."
      }
    ],
    "content": [
      [
        {
          "type": "image",
          "url": "https://via.placeholder.com/400x200/0066FF/FFFFFF?text=Interface",
          "alt": "Interface do sistema"
        }
      ],
      {
        "options": [
          { "text": "➡️ Próximo passo (2/5)", "followUp": "tutorial-passo-2" },
          { "text": "⏮️ Voltar", "followUp": "tutorial-inicio" }
        ]
      }
    ]
  }
};

// ============================================
// EXEMPLO 8: Sistema de Pontuação/Gamificação
// ============================================
const gamificationFlows = {
  "game-inicio": {
    "id": "game-inicio",
    "name": "Game - Início",
    "speech": [
      {
        "type": "info",
        "title": "🎮 Desafio do Conhecimento",
        "content": "Complete os desafios e ganhe pontos!\n\n🏆 Sua pontuação: 0 pontos"
      }
    ],
    "content": [
      {
        "options": [
          { "text": "🎯 Desafio Fácil (+10 pts)", "followUp": "desafio-facil" },
          { "text": "⚡ Desafio Médio (+25 pts)", "followUp": "desafio-medio" },
          { "text": "🔥 Desafio Difícil (+50 pts)", "followUp": "desafio-dificil" }
        ]
      }
    ]
  }
};

// ============================================
// EXEMPLO 9: Chatbot E-commerce
// ============================================
const ecommerceFlows = {
  "loja-inicio": {
    "id": "loja-inicio",
    "name": "Loja",
    "speech": [
      {
        "type": "info",
        "title": "🛒 Bem-vindo à nossa loja!",
        "content": "Como posso ajudar você hoje?"
      }
    ],
    "content": [
      {
        "options": [
          { "text": "🔍 Buscar produtos", "followUp": "buscar-produtos" },
          { "text": "🏷️ Ver promoções", "followUp": "promocoes" },
          { "text": "📦 Rastrear pedido", "followUp": "rastrear-pedido" },
          { "text": "💬 Falar com vendedor", "followUp": "atendimento" }
        ]
      }
    ]
  },
  
  "promocoes": {
    "id": "promocoes",
    "name": "Promoções",
    "speech": [
      {
        "type": "info",
        "title": "🔥 Promoções Imperdíveis!",
        "content": "Confira nossas ofertas especiais:"
      }
    ],
    "content": [
      [
        {
          "type": "text",
          "text": "📱 Smartphone XYZ - De R$ 1.999 por R$ 1.499 (25% OFF)"
        }
      ],
      [
        {
          "type": "image",
          "url": "https://via.placeholder.com/300x300/0066FF/FFFFFF?text=Produto",
          "caption": "Smartphone XYZ em promoção"
        }
      ],
      [
        {
          "type": "link",
          "text": "🛒 Ver mais detalhes",
          "url": "#produto-xyz"
        }
      ],
      {
        "options": [
          { "text": "🔙 Ver outras promoções", "followUp": "promocoes" },
          { "text": "🏠 Menu principal", "followUp": "loja-inicio" }
        ]
      }
    ]
  }
};

// ============================================
// EXEMPLO 10: Bot de Suporte Técnico
// ============================================
const supportFlows = {
  "suporte-inicio": {
    "id": "suporte-inicio",
    "name": "Suporte",
    "speech": [
      {
        "type": "info",
        "title": "🔧 Suporte Técnico",
        "content": "Descreva seu problema para que eu possa ajudar:"
      }
    ],
    "content": [
      {
        "options": [
          { "text": "🔌 Não consigo conectar", "followUp": "problema-conexao" },
          { "text": "⚠️ Erro ao iniciar", "followUp": "problema-inicio" },
          { "text": "🐌 Sistema lento", "followUp": "problema-lentidao" },
          { "text": "❓ Outro problema", "followUp": "problema-outro" }
        ]
      }
    ]
  },
  
  "problema-conexao": {
    "id": "problema-conexao",
    "name": "Problema - Conexão",
    "speech": [
      {
        "type": "info",
        "title": "🔍 Diagnóstico: Problema de Conexão",
        "content": "Vamos resolver isso juntos! Siga estes passos:"
      }
    ],
    "content": [
      [
        {
          "type": "text",
          "text": "1️⃣ Verifique se o cabo de rede está conectado\n2️⃣ Reinicie seu roteador\n3️⃣ Aguarde 30 segundos\n4️⃣ Tente conectar novamente"
        }
      ],
      {
        "options": [
          { "text": "✅ Funcionou!", "followUp": "problema-resolvido" },
          { "text": "❌ Ainda não funciona", "followUp": "escalar-atendimento" },
          { "text": "🔙 Ver outros problemas", "followUp": "suporte-inicio" }
        ]
      }
    ]
  }
};

// ============================================
// Exportar exemplos
// ============================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    quizFlows,
    navigationFlows,
    formFlows,
    multimediaFlows,
    faqFlows,
    agendamentoFlows,
    tutorialFlows,
    gamificationFlows,
    ecommerceFlows,
    supportFlows
  };
} else {
  window.advancedExamples = {
    quizFlows,
    navigationFlows,
    formFlows,
    multimediaFlows,
    faqFlows,
    agendamentoFlows,
    tutorialFlows,
    gamificationFlows,
    ecommerceFlows,
    supportFlows
  };
}
