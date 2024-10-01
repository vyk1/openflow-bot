
/**
 * Estrutura de intenções do chatbot. Cada intenção possui um nome, falas, conteúdos e ramificações de seguimento.
 * 
 * @typedef {Object} Intention
 * @property {string} name - Nome da intenção, representando o propósito ou tópico. Aparecerá no header do chatbot.
 * @property {Array<Dialog>} speech - Uma lista de falas que o chatbot irá pronunciar.
 * @property {Content} content - Conteúdo adicional que pode ser exibido, como opções e informações.
 * @property {FollowUps} followUps - Opções de seguimento que levam a novas intenções, baseadas na escolha do usuário.
 */

/**
 * Estrutura de diálogo do chatbot. Cada diálogo possui um tipo e um conteúdo.
 * @typedef {Object} Dialog
 * @property {string} type - Tipo do diálogo, podendo ser "info", "image" ou "link".
 * @property {string} title - Conteúdo do diálogo.
 * @property {string} [subtitle] - Subtítulo do diálogo, opcional.
 * @property {string} [src] - URL da imagem, opcional. Obrigatório se o tipo for "image".
 * @property {string} [link] - URL do link, opcional. Obrigatório se o tipo for "link".
 */

/**
 * Estrutura de conteúdo adicional do chatbot. Cada conteúdo possui uma lista de diálogos e opções.
 * @typedef {Object} Content
 * @property {Array<Dialog>} 0 - Lista de diálogos que serão exibidos.
 * @property {Array<Option>} 1 - Opções que o usuário pode escolher.
 */

/**
 * Estrutura de opções do chatbot. Cada opção possui um texto, uma chave de seguimento e talvez um tipo.
 * @typedef {Object} Option
 * @property {string} text - Texto da opção.
 * @property {string} followUp - Chave da intenção/followUp que será seguida ao escolher a opção.
 * @property {string} [type] - Tipo da opção, podendo ser "next" ou "end". Use "next" ou "end" apenas se o followUp for uma intenção. Caso contrário, e for uma followUp irmã, não é necessário.
 */


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
                        "text": "Não sei o que é um bot",
                        "followUp": "nao-sei-bot"
                    },
                    {
                        "text": "Sei o que é um bot",
                        "followUp": "sei-bot"
                    },
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
                "subtitle": "O Manual de Saúde e Segurança de SC define violência no trabalho como ação ou comportamento que cause agressão, humilhação ou ameaça ao servidor ou relacionados."
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
                                "text": "Diferenças entre assédio e discriminação",
                                "followUp": "violencia-diferencas",
                                "type": "next",
                            },
                            {
                                "text": "Mais sobre assédio",
                                "followUp": "violencia-assedio"
                            },
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
                                "text": "Mais sobre discriminação",
                                "followUp": "violencia-discriminacao"
                            },
                            {
                                "text": "Assédio moral",
                                "followUp": "violencia-assedio-moral"
                            },
                            {
                                "text": "Assédio sexual",
                                "followUp": "violencia-assedio-sexual"
                            },
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
                                "text": "Diferenças entre assédio e discriminação",
                                "followUp": "violencia-diferencas",
                                "type": "next",
                            },
                            {
                                "text": "Assédio moral",
                                "followUp": "violencia-assedio-moral"
                            },
                            {
                                "text": "Mais sobre discriminação",
                                "followUp": "violencia-discriminacao"
                            },
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
                                "text": "Vítimas",
                                "followUp": "acao-vitimas",
                                "type": "next"
                            },
                            // {
                            //     "text": "Testemunhas",
                            //     "followUp": "acao-testemunhas"
                            // },
                            // {
                            //     "text": "Gestores",
                            //     "followUp": "acao-gestores"
                            // }
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
    },
    "acao-vitimas": {
        "name": "Ação para vítimas",
        "speech": [
            {
                "type": "info",
                "title": "Você foi a vítima. E agora?",
            },
        ],
        "content": [
            [
                {
                    "title": "Em primeiro lugar, livre-se do sentimento de culpa, uma vez que a irregularidade da conduta não depende do comportamento da vítima, mas sim do agressor.",
                    "type": "text",
                },
                {
                    "title": "Portanto, em não se cale!",
                    "subtitle": "Deixe claro ao assediador que você não tolera tal comportamento e que a ação se configura como assédio. Diga, claramente, NÃO ao assediador. Rompa o silêncio e busque o auxílio de outras pessoas.",
                    "type": "info",
                },
                {
                    "title": "Evite conversar e permanecer sozinho(a), sem testemunhas, com o(a) assediador(a)?",
                    "type": "text",
                },
                {
                    "title": "Peça a um colega que observe a conduta do (a) assediador(a) em relação a você",
                    "type": "text",
                },
                {
                    "title": "Após identificar o tipo de violência sofrido, confira o que pode ser feito em cada caso",
                    "type": "text",
                }
            ],
            {
                "options": [
                    {
                        "text": "Ainda não compreendi as diferenças entre assédio e discriminação",
                        "followUp": "violencia-diferencas",
                        "type": "next"
                    },
                    {
                        "text": "Assédio",
                        "followUp": "acao-vitima-assedio",
                        "type": "next"
                    },
                    // {
                    //     "text": "Discriminação",
                    //     "followUp": "acao-vitima-discriminacao",
                    //     "type": "next"
                    // },
                    // {
                    //     "text": "Importunação",
                    //     "followUp": "acao-vitima-importunacao",
                    //     "type": "next"
                    // }
                ]
            }
        ],
        "followUps": {
            "violencia-diferencas": {
                "speech": [
                    {
                        "type": "info",
                        "title": "Diferenças entre assédio e discriminação",
                    },
                ],
                "content": [
                    [],
                    {
                        "options": [
                            {
                                "text": "Continuar",
                                "followUp": "violencia-diferencas",
                                "type": "end"
                            }
                        ]
                    }
                ]
            },
            "acao-vitima-assedio": {
                "speech": [
                    {
                        "type": "info",
                        "title": "Ação para vítimas de assédio",
                    }
                ],
                "content": [
                    [],
                    {
                        "options": [
                            {
                                "text": "Continuar",
                                "followUp": "acao-vitima-assedio",
                                "type": "end"
                            }
                        ]
                    }
                ]
            }
        }
    },
    "acao-vitima-assedio": {
        "name": "Ação para vítimas de assédio",
        "speech": [
            {
                "type": "info",
                "title": "O que fazer em caso de assédio?",
            },
        ],
        "content": [
            [],
            {
                "options": [
                    {
                        "text": "Denunciar na polícia civil",
                        "followUp": "acao-vitima-assedio-denunciar-policia",
                    },
                    {
                        "text": "Denunciar na ouvidoria",
                        "followUp": "acao-vitima-assedio-denunciar-ouvidoria",
                    },
                    {
                        "text": "Buscar acolhimento",
                        "followUp": "acao-vitima-assedio-acolhimento",
                    },
                    {
                        "text": "Buscar outros serviços",
                        "followUp": "acao-vitima-assedio-outros-servicos",
                    },
                    {
                        "text": "Voltar",
                        "followUp": "voltar-acao-vitima",
                    },
                    {
                        "text": "Despedir-se",
                        "followUp": "despedida",
                    }
                ]
            }
        ],
        "followUps": {
            "acao-vitima-assedio-denunciar-policia": {
                "speech": [
                    {
                        "type": "info",
                        "title": "Primeiro, você vai precisar coletar as provas",
                        "subtitle": "Anote datas, horários, locais, testemunhas e outras informações que possam ajudar a esclarecer o caso."
                    },
                    {
                        "type": "info",
                        "title": "Após coletar as informações, formalize a sua denúncia em uma delegacia mais próxima de você ou faça pelo site da Polícia Civil.",
                    },
                    {
                        "link": "https://delegaciavirtual.sc.gov.br",
                        "type": "link",
                        "title": "Delegacia Virtual"
                    },
                    {
                        "type": "link",
                        "title": "Procurar delegacia perto de mim",
                        "link": "https://www.pc.sc.gov.br/delegacias"
                    }
                ],
                "content": [
                    [],
                    {
                        "options": [
                            {
                                "text": "Continuar",
                                "followUp": "acao-vitima-assedio",
                                "type": "end"
                            }
                        ]
                    }
                ],
                "followUps": {}
            },
            "acao-vitima-assedio-denunciar-ouvidoria": {
                "speech": [
                    {
                        "type": "info",
                        "title": "Denunciar na ouvidoria",
                        "subtitle": "Caso o assédio ocorra no ambiente de trabalho, a denúncia pode ser feita na ouvidoria da instituição."
                    }
                ],
                "content": [
                    [],
                    {
                        "options": [
                            {
                                "text": "Continuar",
                                "followUp": "acao-vitima-assedio",
                                "type": "end"
                            }
                        ]
                    }
                ],
                "followUps": {}

            },
            "acao-vitima-assedio-acolhimento": {
                "speech": [
                    {
                        "type": "info",
                        "title": "Buscar acolhimento",
                        "subtitle": "Procure apoio de amigos e familiares, além de profissionais de saúde mental."
                    }
                ],
                "content": [
                    [],
                    {
                        "options": [
                            {
                                "text": "Continuar",
                                "followUp": "acao-vitima-assedio",
                                "type": "end"
                            }
                        ]
                    }
                ]
            },
            "acao-vitima-assedio-outros-servicos": {
                "speech": [
                    {
                        "type": "info",
                        "title": "Buscar outros serviços",
                        "subtitle": "Existem diversos serviços de apoio à vítimas de violência, como o Centro de Referência de Atendimento à Mulher (CRAM) e o Centro de Referência Especializado de Assistência Social (CREAS)."
                    }
                ],
                "content": [
                    [],
                    {
                        "options": [
                            {
                                "text": "Continuar",
                                "followUp": "acao-vitima-assedio",
                                "type": "end"
                            }
                        ]
                    }
                ]
            },
            "voltar-acao-vitima": {
                "speech": [
                    {
                        "type": "info",
                        "title": "Voltar",
                    }
                ],
                "content": [
                    [],
                    {
                        "options": [
                            {
                                "text": "Voltar",
                                "followUp": "acao-vitimas",
                                "type": "end"
                            }
                        ]
                    }
                ]
            },
            "despedida": {
                "speech": [
                    {
                        "type": "info",
                        "title": "Obrigada por usar a DRICA!",
                    }
                ],
                "content": [
                    [
                        {
                            "type": "info",
                            "title": "Se precisar de mais informações, estarei por aqui.",
                        },
                        {
                            "type": "link",
                            "title": "Mais informações",
                            "link": "https://www.cge.sc.gov.br/combateaoassedio/"
                        },
                        {
                            "type": "link",
                            "title": "Entrar em contato",
                            "link": "mailto:dic@cge.sc.gov.br"
                        },
                        {
                            "type": "link",
                            "title": "Avaliar a DRICA",
                            "link": "https://forms.gle/"
                        },
                        {
                            "type": "link",
                            "title": "Site da CGE SC",
                            "link": "https://www.cge.sc.gov.br/"
                        },
                        {
                            "type": "info",
                            "title": "Até mais!"
                        }
                    ],
                    {
                        "options": []
                    }
                ]
            }
        }
    }
}

/**
 * 
 * @param {FollowUp} followUp 
 */
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
                // se for btn para outra intention
            } else if (option.type == 'next') {
                createIntetionButton(option['followUp'], option);
            } else {
                const header = document.getElementById('chat-header');
                let intention = getIntention(header['data-title']);
                addOptions(option, intention['followUps'][option['followUp']]);

            }
        });

    }
}

/**
 *  Cria um botão de intenção
 * @param {string} key - Chave da intenção
 * @param {Option} option - Opção de seguimento
 * @returns {void}
 * 
 */

export function createIntetionButton(key, option) {
    const chatLog = document.getElementById('chat-log');
    const button = document.createElement('button');
    button.classList.add('chat-buttons', 'chat-button');


    if (option.type == 'next') {
        button.classList.add('btn-next');
    }

    button.textContent = option.text;
    button.addEventListener('click', () => {
        startIntention(key);
    });
    chatLog.appendChild(button);
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

    if (option.type == 'next') {
        button.classList.add('btn-next');
    }

    button.addEventListener('click', () => {
        addUserInteraction(option.text);
        startFollowUp(followUp);
    });
    chatLog.appendChild(button);
}

export function addUserInteraction(interaction) {
    const chatLog = document.getElementById('chat-log');
    const title = document.createElement('div');
    title.classList.add('message-user');
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

    title.classList.add(speech.type, 'message-bot');
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
        subtitle.classList.add('message-bot', 'title-card-elements');
        subtitle.textContent = prefix + speech.subtitle;
        chatLog.appendChild(subtitle);
    }
}

startIntention('saudacao')
