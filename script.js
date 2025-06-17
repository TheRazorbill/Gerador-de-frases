document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        {
            text: "O único modo de fazer um excelente trabalho é amar o que você faz.",
            author: "Steve Jobs"
        },
        {
            text: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
            author: "John Lennon"
        },
        {
            text: "Se você pode sonhar, você pode realizar.",
            author: "Zig Ziglar"
        },
        {
            text: "A persistência é o caminho do êxito.",
            author: "Charles Chaplin"
        },
        {
            text: "Não espere. O tempo nunca será 'perfeito'.",
            author: "Napoleon Hill"
        },
        {
            text: "Comece onde você está. Use o que você tem. Faça o que você pode.",
            author: "Arthur Ashe"
        },
        {
            text: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
            author: "Winston Churchill"
        }
    ];

    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const newQuoteBtn = document.getElementById('new-quote-btn');

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function displayQuote() {
        const quote = getRandomQuote();
        quoteText.textContent = `"${quote.text}"`;
        quoteAuthor.textContent = `- ${quote.author}`;
    }

    newQuoteBtn.addEventListener('click', displayQuote);

    displayQuote();
});