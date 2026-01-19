/**
 * OpenFlowBot Engine v2.0
 * Sistema de chatbot baseado em fluxo JSON
 * Melhorado com responsividade e UX aprimorada
 */

class OpenFlowBot {
    constructor(config = {}) {
        this.config = {
            container: config.container || '#chat-messages',
            typingDelay: config.typingDelay || 800,
            messageDelay: config.messageDelay || 300,
            autoScroll: config.autoScroll !== false,
            botName: config.botName || 'Bot',
            botAvatar: config.botAvatar || '🤖',
            userAvatar: config.userAvatar || '👤',
            ...config
        };
        
        this.flows = {};
        this.currentFlow = null;
        this.history = [];
        this.container = document.querySelector(this.config.container);
        
        this.init();
    }

    init() {
        // Atualizar nome do bot no header se fornecido
        if (this.config.botName) {
            const botNameEl = document.getElementById('bot-name');
            if (botNameEl) botNameEl.textContent = this.config.botName;
        }

        // Atualizar avatar do bot se fornecido
        if (this.config.botAvatar) {
            const botAvatarEl = document.getElementById('bot-avatar');
            if (botAvatarEl) botAvatarEl.textContent = this.config.botAvatar;
        }
    }

    /**
     * Carrega os fluxos de conversa
     */
    loadFlows(flows) {
        this.flows = flows;
        return this;
    }

    /**
     * Inicia a conversa a partir de um fluxo específico
     */
    start(flowId = 'saudacao') {
        if (!this.flows[flowId]) {
            console.error(`Fluxo "${flowId}" não encontrado`);
            return;
        }

        this.currentFlow = flowId;
        this.processFlow(this.flows[flowId]);
    }

    /**
     * Processa um fluxo de conversa
     */
    async processFlow(flow) {
        // Adicionar ao histórico
        this.history.push({
            flowId: this.currentFlow,
            timestamp: new Date()
        });

        // Processar mensagens iniciais (speech)
        if (flow.speech && flow.speech.length > 0) {
            for (const message of flow.speech) {
                await this.showTypingIndicator();
                await this.addBotMessage(message);
            }
        }

        // Processar conteúdo
        if (flow.content && flow.content.length > 0) {
            for (const contentBlock of flow.content) {
                if (Array.isArray(contentBlock)) {
                    // Bloco de mensagens
                    for (const message of contentBlock) {
                        await this.showTypingIndicator();
                        await this.addBotMessage(message);
                    }
                } else if (contentBlock.options) {
                    // Bloco de opções
                    await this.addOptions(contentBlock.options);
                }
            }
        }
    }

    /**
     * Adiciona uma mensagem do bot
     */
    async addBotMessage(message) {
        await this.delay(this.config.messageDelay);
        this.removeTypingIndicator();

        const messageEl = document.createElement('div');
        messageEl.className = 'message bot-message';

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = this.config.botAvatar;

        const content = document.createElement('div');
        content.className = 'message-content';

        const bubble = document.createElement('div');
        
        // Processar tipo de mensagem
        switch (message.type) {
            case 'info':
                bubble.className = 'info-message';
                if (message.title) {
                    const title = document.createElement('h3');
                    title.textContent = message.title;
                    bubble.appendChild(title);
                }
                if (message.subtitle) {
                    const subtitle = document.createElement('p');
                    subtitle.textContent = message.subtitle;
                    bubble.appendChild(subtitle);
                }
                if (message.content) {
                    const text = document.createElement('p');
                    text.textContent = message.content;
                    bubble.appendChild(text);
                }
                break;

            case 'image':
                bubble.className = 'message-bubble';
                const img = document.createElement('img');
                img.src = message.url;
                img.alt = message.alt || 'Imagem';
                img.className = 'message-image';
                bubble.appendChild(img);
                if (message.caption) {
                    const caption = document.createElement('p');
                    caption.textContent = message.caption;
                    caption.style.marginTop = '8px';
                    bubble.appendChild(caption);
                }
                break;

            case 'link':
                bubble.className = 'message-bubble';
                const link = document.createElement('a');
                link.href = message.url;
                link.textContent = message.text;
                link.className = 'message-link';
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                bubble.appendChild(link);
                break;

            default:
                bubble.className = 'message-bubble';
                bubble.textContent = message.text || message.title || message.content;
        }

        content.appendChild(bubble);
        messageEl.appendChild(avatar);
        messageEl.appendChild(content);
        this.container.appendChild(messageEl);

        if (this.config.autoScroll) {
            this.scrollToBottom();
        }
    }

    /**
     * Adiciona uma mensagem do usuário
     */
    addUserMessage(text) {
        const messageEl = document.createElement('div');
        messageEl.className = 'message user-message';

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = this.config.userAvatar;

        const content = document.createElement('div');
        content.className = 'message-content';

        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.textContent = text;

        content.appendChild(bubble);
        messageEl.appendChild(avatar);
        messageEl.appendChild(content);
        this.container.appendChild(messageEl);

        if (this.config.autoScroll) {
            this.scrollToBottom();
        }
    }

    /**
     * Adiciona opções de resposta
     */
    async addOptions(options) {
        await this.delay(this.config.messageDelay);

        const messageEl = document.createElement('div');
        messageEl.className = 'message bot-message';

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = this.config.botAvatar;

        const content = document.createElement('div');
        content.className = 'message-content';

        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-container';

        options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-button';
            
            const span = document.createElement('span');
            span.textContent = option.text;
            button.appendChild(span);

            button.style.animationDelay = `${index * 0.1}s`;

            button.addEventListener('click', () => {
                this.handleOptionClick(option);
            });

            optionsContainer.appendChild(button);
        });

        content.appendChild(optionsContainer);
        messageEl.appendChild(avatar);
        messageEl.appendChild(content);
        this.container.appendChild(messageEl);

        if (this.config.autoScroll) {
            this.scrollToBottom();
        }
    }

    /**
     * Lida com o clique em uma opção
     */
    async handleOptionClick(option) {
        // Adicionar mensagem do usuário
        this.addUserMessage(option.text);

        // Desabilitar todos os botões de opção
        const buttons = document.querySelectorAll('.option-button');
        buttons.forEach(btn => {
            btn.disabled = true;
            btn.style.opacity = '0.5';
            btn.style.cursor = 'not-allowed';
        });

        // Seguir para o próximo fluxo
        if (option.followUp && this.flows[option.followUp]) {
            await this.delay(500);
            this.currentFlow = option.followUp;
            this.processFlow(this.flows[option.followUp]);
        } else if (option.action) {
            // Executar ação personalizada
            if (typeof option.action === 'function') {
                option.action(this);
            }
        }
    }

    /**
     * Mostra indicador de digitação
     */
    async showTypingIndicator() {
        await this.delay(200);

        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.id = 'typing-indicator';

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.style.background = 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)';
        avatar.style.color = 'white';
        avatar.textContent = this.config.botAvatar;

        const dots = document.createElement('div');
        dots.className = 'typing-dots';
        
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('div');
            dot.className = 'typing-dot';
            dots.appendChild(dot);
        }

        indicator.appendChild(avatar);
        indicator.appendChild(dots);
        this.container.appendChild(indicator);

        if (this.config.autoScroll) {
            this.scrollToBottom();
        }

        await this.delay(this.config.typingDelay);
    }

    /**
     * Remove indicador de digitação
     */
    removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    /**
     * Rola para o final da conversa
     */
    scrollToBottom() {
        this.container.scrollTop = this.container.scrollHeight;
    }

    /**
     * Utilitário para delay
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Limpa a conversa
     */
    clear() {
        this.container.innerHTML = '';
        this.history = [];
    }

    /**
     * Reinicia a conversa
     */
    restart() {
        this.clear();
        this.start();
    }

    /**
     * Obtém o histórico da conversa
     */
    getHistory() {
        return this.history;
    }

    /**
     * Exporta a conversa como JSON
     */
    exportConversation() {
        const messages = [];
        const messageElements = this.container.querySelectorAll('.message');
        
        messageElements.forEach(el => {
            const isBot = el.classList.contains('bot-message');
            const bubble = el.querySelector('.message-bubble, .info-message');
            
            if (bubble) {
                messages.push({
                    type: isBot ? 'bot' : 'user',
                    content: bubble.textContent,
                    timestamp: new Date()
                });
            }
        });

        return {
            messages,
            history: this.history,
            exportedAt: new Date()
        };
    }
}

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OpenFlowBot;
} else {
    window.OpenFlowBot = OpenFlowBot;
}
