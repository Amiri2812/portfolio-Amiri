const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = [...document.querySelectorAll('.nav-menu a')];
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const copyButton = document.querySelector('.copy-email');
const copyFeedback = document.querySelector('.copy-feedback');
const year = document.querySelector('#year');

const setMenuState = (isOpen) => {
  navMenu.classList.toggle('open', isOpen);
  navToggle.classList.toggle('active', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  document.body.classList.toggle('menu-open', isOpen);
};

navToggle.addEventListener('click', () => {
  setMenuState(!navMenu.classList.contains('open'));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => setMenuState(false));
});

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 12);
});

const preferredTheme = localStorage.getItem('portfolio-theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

document.documentElement.dataset.theme = preferredTheme;
themeIcon.textContent = preferredTheme === 'dark' ? '☀' : '◐';

themeToggle.addEventListener('click', () => {
  const newTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem('portfolio-theme', newTheme);
  themeIcon.textContent = newTheme === 'dark' ? '☀' : '◐';
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.13 }
);

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', isCurrent);
      });
    });
  },
  { rootMargin: '-35% 0px -55% 0px' }
);

document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));

if (copyButton && copyFeedback) {
  copyButton.addEventListener('click', async () => {
    const email = copyButton.dataset.email;

    try {
      await navigator.clipboard.writeText(email);
      copyFeedback.textContent = 'Adresse e-mail copiée.';
    } catch (error) {
      copyFeedback.textContent = `Copiez cette adresse : ${email}`;
    }

    window.setTimeout(() => {
      copyFeedback.textContent = '';
    }, 2600);
  });
}

year.textContent = new Date().getFullYear();

// --------------------------------------------------
// Formulaire de contact avec EmailJS
// --------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const submitButton = document.getElementById("contact-submit");
  const formStatus = document.getElementById("form-status");
  const timeInput = document.getElementById("contact-time");

  if (!contactForm || !submitButton || !formStatus || !timeInput) {
    return;
  }

  // Initialisation d'EmailJS avec la clé publique
  emailjs.init({
    publicKey: "E3bRkV2mHe52P80x9",
  });

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    timeInput.value = new Date().toLocaleString("fr-FR");

    submitButton.disabled = true;
    submitButton.textContent = "Envoi en cours...";
    formStatus.textContent = "";
    formStatus.className = "form-status";

    try {
      await emailjs.sendForm(
        "service_o8answj",
        "template_c4n1xba",
        contactForm
      );

      formStatus.textContent =
        "Votre message a été envoyé avec succès.";
      formStatus.className = "form-status success";

      contactForm.reset();
    } catch (error) {
      console.error("Erreur EmailJS :", error);

      formStatus.textContent =
        "Une erreur est survenue. Veuillez réessayer ou me contacter directement par e-mail.";
      formStatus.className = "form-status error";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Envoyer le message";
    }
  });
});
