
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


let intentions =
{
    "saudacao": {
        "name": "Saudação",
        "speech": [
            {
                "type": "info",
                "title": "Olá! Eu sou a CATARINA, assistente da DIC para auxiliar na inscrição do prêmio Honestidade nas Escolas 2024",
                "subtitle": "Meu objetivo é te auxiliar nas dúvidas relacionadas ao prêmio. Vamos começar?"
            }
        ],
        "content": [
            [
                {
                    "title": "Sua dúvida é sobre o processo de inscrição ou sobre o andamento do prêmio",
                    "type": "info"
                }
            ],
            {
                "options": [
                    {
                        "text": "Já fiz a minha inscrição, tenho dúvidas sobre o prêmio",
                        "followUp": "fiz-inscricao",
                        "type": "next",
                    },
                    {
                        "text": "Não fiz a minha inscrição e estou com dúvidas sobre esse processo",
                        "followUp": "nao-fiz-inscricao",
                        "type": "next",
                    },
                ]
            }
        ],
        "followUps": {
            "nao-fiz-incricao": {
                "speech": [
                    {
                        "type": "info",
                        "title": "Selecione a opção referente a sua dúvida.",
                    },
                    {
                        "options": [
                            {
                                "text": "Tenho dúvidas sobre a documentação",
                                "followUp": ".doc",
                                "type": "next",
                            },
                            {
                                "text": "Tenho dúvidas com os prazos",
                                "followUp": ".prazo",
                                "type": "next",
                            },
                            {
                                "text": "Outras dúvidas",
                                "followUp": ".outro",
                                "type": "next",
                            },
                        ]
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
