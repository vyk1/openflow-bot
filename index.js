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
        "followUps": {
            "nao-sei-bot": {
                "speech": [
                    {
                        "type": "image",
                        "src": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcStEBHnnElM5xC5XAGiXerMjzMjpOhycZD8YQ\u0026s",
                        "title": "O que é um bot?",
                    },
                    {
                        "type": "info",
                        "title": "Um bot é um programa de computador que simula ações humanas repetidas vezes de maneira padrão."
                    }
                ],
                "content": [
                    [],
                    {
                        "options": [
                            {
                                "text": "Continuar",
                                "type": "end",
                                "followUp": "violencia-trabalho"
                            }
                        ]
                    }
                ],
            },
            "sei-bot": {
                "speech": [
                    {
                        "type": "info",
                        "title": "Que bom que você sabe o que é um bot."
                    }
                ],
                "content": [
                    [],
                    {
                        "options": [
                            {
                                "text": "Continuar",
                                "type": "end",
                                "followUp": "violencia-trabalho"
                            }
                        ]
                    }
                ]
            }
        }
    },
    "violencia-trabalho": {
        "name": "Violência no Trabalho",
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
                        "followUp": "violencia-discriminacao"
                    },
                    {
                        "text": "Mais sobre assédio",
                        "followUp": "violencia-assedio"
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
                                "followUp": "violencia-assedio"
                            }
                        ]
                    }
                ]
            },
            "violencia-assedio": {
                "speech": [
                    {
                        "type": "info",
                        "title": "Existem 3 aspectos que definem o assédio: Prática continuada, ou seja, violência que se estende ao longo do tempo, Atitudes abusivas que suscitam vergonha ou constrangimento; Ações que objetivam desestabilizar emocionalmente a vítima e/ou degradar psicologicamente o ambiente de trabalho",
                        "subtitle": "Embora hajam vários tipos de assédio, iremos cobrir os principais"
                    },
                ],
                "content": [
                    [],
                    {
                        "options": [
                            {
                                "text": "Assédio moral",
                                "followUp": "violencia-assedio-moral"
                            },
                            {
                                "text": "Assédio sexual",
                                "followUp": "violencia-assedio-sexual"
                            },
                            {
                                "text": "Mais sobre discriminação",
                                "followUp": "violencia-discriminacao"
                            }
                        ]
                    }
                ],
            },
            "violencia-assedio-moral": {
                "speech": [
                    {
                        "type": "info",
                        "title": "Assédio moral é a exposição de um trabalhador a situações humilhantes e constrangedoras, repetitivas e prolongadas durante a jornada de trabalho e no exercício de suas funções.",
                        "subtitle": "O assédio moral é uma prática que pode ser realizada por chefes, colegas de trabalho ou subordinados."
                    }
                ],
                "content": [
                    [],
                    {
                        "options": [
                            {
                                "text": "Assédio sexual",
                                "followUp": "violencia-assedio-sexual"
                            },
                            {
                                "text": "Mais sobre discriminação",
                                "followUp": "violencia-discriminacao"
                            }
                        ]
                    }
                ]
            },
            "violencia-assedio-sexual": {
                "speech": [
                    {
                        "type": "info",
                        "title": "Assédio sexual é a exposição de um trabalhador a situações humilhantes e constrangedoras, repetitivas e prolongadas durante a jornada de trabalho e no exercício de suas funções.",
                        "subtitle": "O assédio sexual é uma prática que pode ser realizada por chefes, colegas de trabalho ou subordinados."
                    }
                ],
                "content": [
                    [],
                    {
                        "options": [
                            {
                                "text": "Assédio moral",
                                "followUp": "violencia-assedio-moral"
                            },
                            {
                                "text": "Mais sobre discriminação",
                                "followUp": "violencia-discriminacao"
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
                startIntention(option['followUp']);
            } else {
                const header = document.getElementById('chat-header');
                let intention = getIntention(header.textContent);

                addOptions(option, intention['followUps'][option['followUp']]);

            }
        });

    }
}

export function startIntention(key) {
    let intention = getIntention(key);

    const header = document.getElementById('chat-header');
    header['data-title'] = key;
    header.innerHTML = intention.name;

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
    intention.content[0].forEach(element => {
        addBotMessage(element);
    });

    intention.content[1].options.forEach(option => {
        addOptions(option, intention['followUps'][option['followUp']]);
    });
}

export function addOptions(option, followUp) {
    const chatLog = document.getElementById('chat-log');
    const button = document.createElement('button');
    button.textContent = option.text;
    button.classList.add('chat-buttons', 'chat-button');
    button.addEventListener('click', () => {
        addUserInteraction(option.text);
        startFollowUp(followUp);
        button.disabled = true;
    });
    chatLog.appendChild(button);
    chatLog.scrollTop = chatLog.scrollHeight;
}

export function addUserInteraction(interaction) {
    const chatLog = document.getElementById('chat-log');
    const title = document.createElement('div');
    title.classList.add('message');
    title.textContent = 'Você: ' + interaction;
    chatLog.appendChild(title);
    chatLog.scrollTop = chatLog.scrollHeight;
}

export function addBotMessage(speech) {
    const chatLog = document.getElementById('chat-log');
    const title = document.createElement('div');
    if(speech.type == 'image') {
        const image = document.createElement('img');
        image.src = speech.src;
        chatLog.appendChild(image);
    }
    title.classList.add(speech.type, 'message');
    let prefix = 'DRICA: '

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
