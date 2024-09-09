let intentions = {
    "saudacao": {
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
                        "follow-up": "sei-bot"
                    },
                    {
                        "text": "Não sei o que é um bot",
                        "follow-up": "nao-sei-bot"
                    }
                ]
            }
        ],
        "followUps": {
            "nao-sei-bot": {
                "speech": [
                    {
                        "type": "image",
                        "title": "O que é um bot?",
                    },
                    {
                        "type": "info",
                        "title": "Um bot é um programa de computador que simula ações humanas repetidas vezes de maneira padrão. Clique em \"Continuar\""
                    }
                ],
                "content": [
                    [],
                    {
                        "options": [
                            {
                                "text": "Continuar",
                                "type": "end",
                                "follow-up": "violencia-trabalho"
                            }
                        ]
                    }
                ],
            },
            "sei-bot": {
                "speech": [
                    {
                        "type": "info",
                        "title": "Que bom que você sabe o que é um bot. Clique em \"Continuar\""
                    }
                ],
                "content": [
                    [],
                    {
                        "options": [
                            {
                                "text": "Continuar",
                                "type": "end",
                                "follow-up": "violencia-trabalho"
                            }
                        ]
                    }
                ]
            }
        }
    },
    "violencia-trabalho": {
        "speech": [
            {
                "type": "info",
                "title": "Você sabia que violência no trabalho, não é só fisica?",
                "subtitle": "O Manual de Saúde e Segurança do Servidor Público de Santa Catarina define a violência no ambiente de trabalho como toda e qualquer ação ou comportamento, explícito ou sutil, que resulte em agressão, humilhação ou ameaça ao servidor ou aos indivíduos relacionados a ele.\n\nDesta forma, a violência no trabalho pode se manifestar em diferentes formas."
            }
        ],
        "content": [
            [
                {
                    "type": "button",
                    "title": "Programa Combate ao Assédio da CGE SC",
                    "icon": {
                        "type": "link"
                    },
                    "link": "https://www.cge.sc.gov.br/combateaoassedio/"
                }
            ],
            {
                "options": [
                    {
                        "text": "Mais sobre discriminação",
                        "follow-up": "violencia-discriminacao"
                    },
                    {
                        "text": "Mais sobre assédio",
                        "follow-up": "violencia-assedio"
                    }
                ]
            }
        ],
        "followUps": {
            "violencia-discriminacao": {
                "speech": [
                    {
                        "type": "info",
                        "title": "Discriminação é toda ação ou omissão que viola os direitos humanos baseada na raça, cor, sexo, religião, opinião política, ascendência nacional, origem social, idade, condição corporal, orientação sexual, identidade e expressão de gênero, que prejudique a igualdade de oportunidades ou de tratamento no contexto do trabalho.",
                        "subtitle": "Na esfera administrativa, a discriminação é considerada uma infração disciplinar, podendo levar à demissão do agressor."
                    }
                ],
                "content": [
                    [],
                    {
                        "options": [
                            {
                                "text": "Mais sobre assédio",
                                "follow-up": "violencia-assedio"
                            }
                        ]
                    }
                ]
            },
            "violencia-assedio": {
                "speech": [
                    {
                        "type": "info",
                        "title": "Assédio no trabalho",
                        "subtitle": "Assediar é importunar, molestar, aborrecer, incomodar implica cerco, insistência impertinente de forma a abalar a moral de quem está sendo assediado"
                    }
                ],
                "content": [
                    [],
                    {
                        "options": [
                            {
                                "text": "Mais sobre discriminação",
                                "follow-up": "violencia-discriminacao"
                            }
                        ]
                    }
                ]
            }
        }
    }
}

export function startFollowUp(followUp) {
    followUp.speech.forEach(speech => {
        addBotMessage(speech, false);
    })
    if (followUp.content[0].length > 0) {
        insertContent(followUp);
    } else {
        // Significa que é o final da conversa para esta intention
        // Aí renderiza o botão de finalizar a conversa        
        followUp.content[1].options.forEach(option => {
            if (option.type == 'end') {
                addOptions(option, followUp);
                startIntention(option['follow-up']);
            }
        });

    }
}

export function startIntention(key) {
    let intention = getIntention(key);

    intention.speech.forEach(speech => {
        addBotMessage(speech);
    })

    insertContent(intention);
}

export function getIntention(key) {
    return intentions[key];
}

export function getFollowUp(key) {
    return intentions[key][followUps];
}

export function insertContent(intention) {
    console.log(intention.content);

    intention.content[0].forEach(element => {
        addBotMessage(element);
    });

    intention.content[1].options.forEach(option => {
        addOptions(option, intention['followUps'][option['follow-up']]);
    });
}

export function addOptions(option, followUp) {
    const chatLog = document.getElementById('chat-log');
    const button = document.createElement('button');
    button.textContent = option.text;
    button.classList.add('chat-buttons', 'chat-button');
    button.addEventListener('click', () => {
        startFollowUp(followUp);

    });
    chatLog.appendChild(button);
    chatLog.scrollTop = chatLog.scrollHeight;
}

export function addBotMessage(speech, isBot = true) {
    const chatLog = document.getElementById('chat-log');
    const title = document.createElement('div');
    title.classList.add(speech.type, 'message');
    let prefix = isBot ? 'DRICA: ' : 'Você: ';

    title.textContent = prefix + speech.title;
    chatLog.appendChild(title);
    if (speech.subtitle != null) {
        const subtitle = document.createElement('div');
        subtitle.textContent = prefix + speech.subtitle;
        chatLog.appendChild(subtitle);
    }

    chatLog.scrollTop = chatLog.scrollHeight;
}

startIntention('saudacao');
