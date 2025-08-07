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

// Mostrar/Ocultar Respuestas en la Sección FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

  window.REQUIRED_CODE_ERROR_MESSAGE = 'Elija un código de país';
  window.LOCALE = 'es';
  window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "La información que ha proporcionado no es válida. Compruebe el formato del campo e inténtelo de nuevo.";

  window.REQUIRED_ERROR_MESSAGE = "Este campo no puede quedarse vacío. ";

  window.GENERIC_INVALID_MESSAGE = "La información que ha proporcionado no es válida. Compruebe el formato del campo e inténtelo de nuevo.";




  window.translation = {
    common: {
      selectedList: '{quantity} lista seleccionada',
      selectedLists: '{quantity} listas seleccionadas',
      selectedOption: '{quantity} seleccionado',
      selectedOptions: '{quantity} seleccionados',
    }
  };

  var AUTOHIDE = Boolean(0);


