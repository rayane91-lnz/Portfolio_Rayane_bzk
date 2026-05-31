const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.15
});

reveals.forEach((element) => observer.observe(element));

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".card[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projectCards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const contactForm = document.getElementById("contactForm");
const formState = document.querySelector(".form-state");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formState.textContent = "Message prêt à être envoyé. Merci pour votre visite.";
  contactForm.reset();
});

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// ================= MODALE PROJETS =================

const projects = {
  jeu: {
    title: "Jeu vidéo 2D en C++",
    desc: "Développement d’un jeu avec logique de gameplay et programmation orientée objet.",
    skills: [
      "Gérer le patrimoine informatique",
      "Répondre aux incidents",
      "Organiser son développement professionnel"
    ],
    bilan: "Ce projet m’a permis de renforcer ma logique algorithmique et la structuration du code."
  },

  bdd: {
    title: "Modélisation de base de données",
    desc: "Conception complète : MCD, MLD, SQL et structuration des données.",
    skills: [
      "Gérer le patrimoine informatique",
      "Répondre aux incidents",
      "Travailler en mode projet",
      "Organiser son développement professionnel"
    ],
    bilan: "J’ai appris à concevoir une base de données complète et optimisée."
  },

  odoo: {
    title: "Module Odoo",
    desc: "Développement d’un module métier pour gérer les demandes de VM.",
    skills: [
      "Gérer le patrimoine informatique",
      "Répondre aux incidents",
      "Mettre à disposition un service informatique",
      "Organiser son développement professionnel"
    ],
    bilan: "Ce projet m’a permis de découvrir un environnement professionnel et le framework Odoo."
  },

  vva: {
    title: "Resa_VVA",
    desc: "Application web de réservation avec gestion des utilisateurs et base de données.",
    skills: [
      "Gérer le patrimoine informatique",
      "Répondre aux incidents",
      "Organiser son développement professionnel"
    ],
    bilan: "J’ai amélioré mes compétences en développement web et en base de données."
  },

  atelier: {
    title: "Gestion Atelier",
    desc: "Application Java Swing pour la gestion des appareils et clients.",
    skills: [
      "Gérer le patrimoine informatique",
      "Répondre aux incidents",
      "Organiser son développement professionnel"
    ],
    bilan: "J’ai appris à créer une interface graphique et structurer une application."
  },

  futsal: {
    title: "Projet Futsal",
    desc: "Site web de réservation développé en équipe.",
    skills: [
      "Gérer le patrimoine informatique",
      "Répondre aux incidents",
      "Travailler en mode projet",
      "Organiser son développement professionnel"
    ],
    bilan: "Ce projet m’a permis de travailler en équipe et de gérer un projet web complet."
  }
};

const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".open-modal").forEach(btn => {
  btn.addEventListener("click", () => {
    const p = projects[btn.dataset.project];

    document.getElementById("modal-title").textContent = p.title;
    document.getElementById("modal-desc").textContent = p.desc;

    let skillsHTML = "";
    p.skills.forEach(skill => {
      skillsHTML += `<li>${skill}</li>`;
    });

    document.getElementById("modal-skills").innerHTML = skillsHTML;
    document.getElementById("modal-bilan").textContent = p.bilan;

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});