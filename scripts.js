// Cuenta regresiva para el Cyber Monday
const countdownElement = document.getElementById('countdown');

function startCountdown(endDate) {
        const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "<b>¡La oferta ha comenzado!</b>";
        }
    }, 1000);
}

// Fecha de inicio del Cyber Monday (4 de noviembre, UTC-3)
const cyberMondayDate = new Date("2025-09-21T00:00:00Z").getTime(); 
startCountdown(cyberMondayDate);

// Suscripción al newsletter
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("¡Gracias por suscribirte!");
});
// Mostrar/Ocultar Respuestas en la Sección FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
