/**
 * Exemplo de fluxos de conversa para OpenFlowBot
 * Estrutura JSON otimizada e organizada
 */

const chatFlows = {
    // Fluxo de saudação inicial
    "saudacao": {
        "id": "saudacao",
        "name": "Saudação",
        "speech": [
            {
                "type": "info",
                "title": "Olá! Eu sou a DRICA 👋",
                "subtitle": "Assistente da DIC para prevenir e tirar dúvidas sobre violência no trabalho no setor público.",
                "content": "Meu objetivo é ajudar você a entender melhor o que é violência no trabalho e como preveni-la. Vamos começar?"
            }
        ],
        "content": [
            [
                {
                    "type": "text",
                    "text": "Me diga, você sabe o que é um \"bot\"?"
                }
            ],
            {
                "options": [
                    {
                        "text": "✅ Sei o que é um bot",
                        "followUp": "sei-bot"
                    },
                    {
                        "text": "❓ Não sei o que é um bot",
                        "followUp": "nao-sei-bot"
                    }
                ]
            }
        ]
    },

    // Fluxo para quem sabe o que é um bot
    "sei-bot": {
        "id": "sei-bot",
        "name": "Conhece Bot",
        "speech": [
            {
                "type": "text",
                "text": "Ótimo! Então você já entende que sou um programa automatizado que pode conversar com você."
            }
        ],
        "content": [
            [
                {
                    "type": "info",
                    "title": "💡 Sobre mim",
                    "content": "Fui desenvolvida para ser sua assistente em questões relacionadas à violência no trabalho. Posso te ajudar a identificar situações, entender seus direitos e saber como agir."
                }
            ],
            {
                "options": [
                    {
                        "text": "📚 Quero saber mais sobre violência no trabalho",
                        "followUp": "sobre-violencia"
                    },
                    {
                        "text": "🆘 Preciso de ajuda com uma situação",
                        "followUp": "ajuda-situacao"
                    },
                    {
                        "text": "📋 Quero conhecer meus direitos",
                        "followUp": "direitos"
                    }
                ]
            }
        ]
    },

    // Fluxo para quem não sabe o que é um bot
    "nao-sei-bot": {
        "id": "nao-sei-bot",
        "name": "Não Conhece Bot",
        "speech": [
            {
                "type": "info",
                "title": "🤖 O que é um bot?",
                "content": "Um bot (abreviação de robot) é um programa de computador que executa tarefas automatizadas. No meu caso, sou um chatbot - posso conversar com você através de mensagens de texto!"
            }
        ],
        "content": [
            [
                {
                    "type": "text",
                    "text": "Pensa em mim como uma assistente virtual que está aqui 24/7 para te ajudar com informações sobre violência no trabalho."
                }
            ],
            [
                {
                    "type": "info",
                    "title": "✨ Minha função",
                    "content": "Posso responder suas perguntas, explicar conceitos, e te guiar sobre como agir em diferentes situações relacionadas ao ambiente de trabalho."
                }
            ],
            {
                "options": [
                    {
                        "text": "👍 Entendi! Vamos começar",
                        "followUp": "sei-bot"
                    },
                    {
                        "text": "❓ Ainda tenho dúvidas sobre bots",
                        "followUp": "mais-sobre-bots"
                    }
                ]
            }
        ]
    },

    // Fluxo sobre violência no trabalho
    "sobre-violencia": {
        "id": "sobre-violencia",
        "name": "Sobre Violência no Trabalho",
        "speech": [
            {
                "type": "info",
                "title": "⚠️ O que é violência no trabalho?",
                "content": "Violência no trabalho inclui qualquer ação, incidente ou comportamento que cause dano físico ou psicológico a uma pessoa no ambiente de trabalho."
            }
        ],
        "content": [
            [
                {
                    "type": "text",
                    "text": "A violência pode se manifestar de diversas formas:"
                }
            ],
            [
                {
                    "type": "info",
                    "title": "📌 Tipos de violência",
                    "content": "• Assédio moral\n• Assédio sexual\n• Discriminação\n• Bullying\n• Agressão física\n• Ameaças e intimidação\n• Abuso de poder"
                }
            ],
            {
                "options": [
                    {
                        "text": "💬 Quero saber mais sobre assédio moral",
                        "followUp": "assedio-moral"
                    },
                    {
                        "text": "💬 Quero saber mais sobre assédio sexual",
                        "followUp": "assedio-sexual"
                    },
                    {
                        "text": "🔙 Voltar ao menu principal",
                        "followUp": "sei-bot"
                    }
                ]
            }
        ]
    },

    // Fluxo sobre assédio moral
    "assedio-moral": {
        "id": "assedio-moral",
        "name": "Assédio Moral",
        "speech": [
            {
                "type": "info",
                "title": "😔 Assédio Moral",
                "content": "É a exposição de trabalhadores a situações humilhantes e constrangedoras de forma repetitiva e prolongada durante a jornada de trabalho."
            }
        ],
        "content": [
            [
                {
                    "type": "info",
                    "title": "⚠️ Exemplos comuns",
                    "content": "• Humilhações públicas\n• Críticas excessivas\n• Isolamento proposital\n• Sobrecarga de trabalho intencional\n• Atribuição de tarefas degradantes\n• Ignorar ou desqualificar constantemente"
                }
            ],
            [
                {
                    "type": "text",
                    "text": "É importante reconhecer esses sinais e buscar ajuda quando necessário."
                }
            ],
            {
                "options": [
                    {
                        "text": "📝 Como posso denunciar?",
                        "followUp": "como-denunciar"
                    },
                    {
                        "text": "🔙 Voltar aos tipos de violência",
                        "followUp": "sobre-violencia"
                    }
                ]
            }
        ]
    },

    // Fluxo sobre ajuda em situação
    "ajuda-situacao": {
        "id": "ajuda-situacao",
        "name": "Ajuda em Situação",
        "speech": [
            {
                "type": "info",
                "title": "🆘 Estou aqui para ajudar",
                "content": "Lamento que você esteja passando por uma situação difícil. Vou te orientar sobre os próximos passos."
            }
        ],
        "content": [
            [
                {
                    "type": "text",
                    "text": "Primeiro, é importante que você saiba que não está sozinho(a) e que existem canais oficiais para te apoiar."
                }
            ],
            [
                {
                    "type": "info",
                    "title": "📋 Passos importantes",
                    "content": "1. Documente tudo (datas, horários, testemunhas)\n2. Busque apoio de colegas de confiança\n3. Procure o RH ou ouvidoria\n4. Considere buscar ajuda psicológica\n5. Conheça seus direitos trabalhistas"
                }
            ],
            {
                "options": [
                    {
                        "text": "📞 Ver canais de denúncia",
                        "followUp": "como-denunciar"
                    },
                    {
                        "text": "💼 Conhecer meus direitos",
                        "followUp": "direitos"
                    },
                    {
                        "text": "🔙 Voltar ao menu",
                        "followUp": "sei-bot"
                    }
                ]
            }
        ]
    },

    // Fluxo sobre como denunciar
    "como-denunciar": {
        "id": "como-denunciar",
        "name": "Como Denunciar",
        "speech": [
            {
                "type": "info",
                "title": "📢 Canais de Denúncia",
                "content": "Existem diversos canais oficiais onde você pode fazer sua denúncia de forma segura e confidencial."
            }
        ],
        "content": [
            [
                {
                    "type": "info",
                    "title": "📞 Principais canais",
                    "content": "• Ouvidoria da sua instituição\n• Ministério Público do Trabalho (MPT)\n• Disque 100 (Direitos Humanos)\n• Polícia (casos graves)\n• Sindicato da categoria"
                }
            ],
            [
                {
                    "type": "link",
                    "text": "🌐 Acessar site do MPT",
                    "url": "https://mpt.mp.br/"
                }
            ],
            {
                "options": [
                    {
                        "text": "📋 Saber mais sobre direitos",
                        "followUp": "direitos"
                    },
                    {
                        "text": "🔙 Voltar ao menu",
                        "followUp": "sei-bot"
                    }
                ]
            }
        ]
    },

    // Fluxo sobre direitos
    "direitos": {
        "id": "direitos",
        "name": "Direitos do Trabalhador",
        "speech": [
            {
                "type": "info",
                "title": "⚖️ Seus Direitos",
                "content": "Todo trabalhador tem direito a um ambiente de trabalho saudável, respeitoso e livre de violência."
            }
        ],
        "content": [
            [
                {
                    "type": "info",
                    "title": "📜 Direitos fundamentais",
                    "content": "• Dignidade e respeito\n• Ambiente seguro e saudável\n• Não sofrer discriminação\n• Denunciar sem retaliação\n• Receber orientação e apoio\n• Acompanhamento psicológico\n• Proteção legal"
                }
            ],
            [
                {
                    "type": "text",
                    "text": "A legislação brasileira protege o trabalhador contra todas as formas de violência no trabalho através da CLT, Constituição Federal e outras normas específicas."
                }
            ],
            {
                "options": [
                    {
                        "text": "📞 Ver canais de apoio",
                        "followUp": "como-denunciar"
                    },
                    {
                        "text": "🔙 Voltar ao menu",
                        "followUp": "sei-bot"
                    },
                    {
                        "text": "🔄 Reiniciar conversa",
                        "followUp": "saudacao"
                    }
                ]
            }
        ]
    },

    // Fluxo adicional sobre bots
    "mais-sobre-bots": {
        "id": "mais-sobre-bots",
        "name": "Mais Sobre Bots",
        "speech": [
            {
                "type": "info",
                "title": "🤖 Entendendo melhor os bots",
                "content": "Bots como eu são programados para seguir fluxos de conversa pré-definidos. Isso significa que posso te guiar através de informações organizadas de forma lógica."
            }
        ],
        "content": [
            [
                {
                    "type": "text",
                    "text": "Não sou uma pessoa real, mas fui criada com informações validadas para te ajudar da melhor forma possível!"
                }
            ],
            [
                {
                    "type": "info",
                    "title": "✅ Minhas vantagens",
                    "content": "• Disponível 24 horas por dia\n• Respostas rápidas e objetivas\n• Informações sempre atualizadas\n• Posso te guiar passo a passo\n• Conversa confidencial"
                }
            ],
            {
                "options": [
                    {
                        "text": "👍 Agora entendi! Vamos começar",
                        "followUp": "sei-bot"
                    },
                    {
                        "text": "🔙 Voltar ao início",
                        "followUp": "saudacao"
                    }
                ]
            }
        ]
    }
};

// Exportar os fluxos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = chatFlows;
} else {
    window.chatFlows = chatFlows;
}
