/**
 * OpenFlowBot - Arquivo de Inicialização
 * Conecta o engine aos fluxos de conversa
 */

// Aguardar o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Verificar se os fluxos estão carregados
    if (typeof chatFlows === 'undefined') {
        console.error('❌ Fluxos de conversa não encontrados. Certifique-se de incluir flows-example.js');
        return;
    }

    // Criar instância do bot com configurações
    const bot = new OpenFlowBot({
        container: '#chat-messages',
        botName: 'DRICA',
        botAvatar: '🤖',
        userAvatar: '👤',
        typingDelay: 1000,
        messageDelay: 400,
        autoScroll: true
    });

    // Carregar os fluxos
    bot.loadFlows(chatFlows);

    // Iniciar a conversa
    bot.start('saudacao');

    // Expor o bot globalmente para debug (opcional)
    window.chatbot = bot;

    console.log('✅ OpenFlowBot inicializado com sucesso!');
    console.log('💡 Dica: Use window.chatbot para acessar a instância do bot no console');
});
