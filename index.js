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
                    "type": "link",
                    "title": "Programa Combate ao Assédio da CGE SC",
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
                            },
                            {
                                "text": "Diferenças entre assédio e discriminação",
                                "followUp": "violencia-diferencas",
                                "type": "end",
                            }
                        ]
                    }
                ]
            }
        }
    },
    "violencia-diferencas": {
        "name": "Diferenças entre assédio e discriminação",
        "speech": [
            {
                "type": "info",
                "title": "Existe uma estreita relação entre assédio moral e discriminação, embora sejam fenômenos distintos. ",
                "subtitle": "Atos discriminatórios podem desencadear a prática de assédio moral, especialmente quando direcionados a grupos vulneráveis"
            },
            {
                "type": "info",
                "title": "No entanto, é importante destacar que nem toda prática de assédio moral tem como base a discriminação, assim como nem todo ato discriminatório pontual configura assédio moral.",
                "subtitle": "O assédio moral é caracterizado pela prática continuada de atos abusivos, enquanto a discriminação pode ser pontual."
            },
        ],
        "content": [
            [],
            {
                "options": [
                    {
                        "text": "O que fazer quando presenciar violência no trabalho?",
                        "followUp": "violencia-diferencas-acao"
                    }
                ]
            }
        ],
        "followUps": {
            "violencia-diferencas-acao": {
                "speech": [
                    {
                        "type": "info",
                        "title": "Dependendo do seu papel, você pode tomar diferentes ações",
                    },
                ],
                "content": [
                    [],
                    {
                        "options": [
                            {
                                "text": "Denunciar",
                                "followUp": "violencia-diferencas-acao-denunciar"
                            },
                            {
                                "text": "Apoiar",
                                "followUp": "violencia-diferencas-acao-apoiar"
                            }
                        ]
                    }
                ]
            },
            "violencia-diferencas-acao-denunciar": {
                "speech": [
                    {
                        "type": "info",
                        "title": "Denunciar é um ato de coragem e solidariedade",
                    },
                ],
                "content": [
                    [],
                    {
                        "options": [
                            {
                                "text": "Apoiar",
                                "followUp": "violencia-diferencas-acao-apoiar"
                            }
                        ]
                    }
                ]
            },
            "violencia-diferencas-acao-apoiar": {
                "speech": [
                    {
                        "type": "info",
                        "title": "Apoiar é um ato de solidariedade e empatia",
                    },
                ],
                "content": [
                    [],
                    {
                        "options": [
                            {
                                "text": "Continuar",
                                "followUp": "violencia-diferencas-acao-denunciar"
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
        addBotMessage(speech);
    })

    if (followUp.content[0].length > 0) {
        insertContent(followUp);
    } else {
        removePreviousOptions();

        followUp.content[1].options.forEach(option => {

            // Significa que é o final da conversa para esta intention
            // Aí renderiza o botão de finalizar a conversa        
            if (option.type == 'end') {
                startIntention(option['followUp']);
            } else {
                const header = document.getElementById('chat-header');
                let intention = getIntention(header['data-title']);
                addOptions(option, intention['followUps'][option['followUp']]);

            }
        });

    }
}

export function startIntention(key) {
    let intention = getIntention(key);
    const header = document.getElementById('chat-header');
    header['data-title'] = key;
    header.innerHTML = "DRICA - " + intention.name;

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

    removePreviousOptions();
    intention.content[1].options.forEach(option => {
        addOptions(option, intention['followUps'][option['followUp']]);
    });
}

export function removePreviousOptions() {
    // Remove os botões anteriores
    document.querySelectorAll('.chat-buttons').forEach(button => {
        button.remove();
    })
}

export function addOptions(option, followUp) {
    const chatLog = document.getElementById('chat-log');
    const button = document.createElement('button');
    button.textContent = option.text;
    button.classList.add('chat-buttons', 'chat-button');
    button.addEventListener('click', () => {
        addUserInteraction(option.text);
        startFollowUp(followUp);
    });
    chatLog.appendChild(button);
}

export function addUserInteraction(interaction) {
    const chatLog = document.getElementById('chat-log');
    const title = document.createElement('div');
    title.classList.add('message-2');
    title.textContent = 'Você: ' + interaction;
    chatLog.appendChild(title);
}

export function addBotMessage(speech) {
    const chatLog = document.getElementById('chat-log');
    const title = document.createElement('div');

    if (speech.type == 'image') {
        const image = document.createElement('img');
        image.classList.add('title-card-elements');
        image.src = speech.src;
        chatLog.appendChild(image);
    }

    title.classList.add(speech.type, 'message');
    let prefix = 'DRICA: '

    if (speech.type == 'link') {
        const link = document.createElement('a');
        link.href = speech.link;
        link.classList.add('link');
        link.textContent = 'Acesse: ' + speech.title;
        link.target = '_blank';
        title.appendChild(link);
    } else {
        title.textContent = prefix + speech.title;
    }

    chatLog.appendChild(title);

    if (speech.subtitle != null) {
        const subtitle = document.createElement('div');
        subtitle.classList.add('message', 'title-card-elements');
        subtitle.textContent = prefix + speech.subtitle;
        chatLog.appendChild(subtitle);
    }
}

startIntention('saudacao')
