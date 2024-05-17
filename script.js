const burger = document.querySelector(".burger");
const close = document.querySelector(".close");
const menuContent = document.querySelector(".menu ul");

window.addEventListener("resize", () => {
  if (window.innerWidth <= 720) {
    burger.style.display = "flex";
    menuContent.style.display = "none";
    close.style.display = "none";
  }
  if (window.innerWidth > 720) {
    menuContent.style.display = "flex";
    burger.style.display = "none";
    close.style.display = "none";
  }
});

burger.addEventListener("click", () => {
  menuContent.style.display = "flex";
  burger.style.display = "none";
  close.style.display = "flex";
});

close.addEventListener("click", () => {
  menuContent.style.display = "none";
  burger.style.display = "flex";
  close.style.display = "none";
});

const img = document.querySelector(".photo-accueil img");
const modal = document.getElementById("my-modal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.title;
};

const span = document.querySelector(".close-modal");

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const enSavoirPlusButton = document.querySelector("#accueil button");
enSavoirPlusButton.addEventListener("click", () => {
  window.location.href = "#a-propos";
});

const meContacterButton = document.querySelector("#a-propos button");
meContacterButton.addEventListener("click", () => {
  window.location.href = "#contact";
});

window.addEventListener("scroll", () => {
  const accueilSection = document
    .getElementById("accueil")
    .getBoundingClientRect();
  const aProposSection = document
    .getElementById("a-propos")
    .getBoundingClientRect();
  const contactSection = document
    .getElementById("contact")
    .getBoundingClientRect();
  const menuItems = document.querySelectorAll(".menu ul li a");

  let currentSection = "";

  const ratio = window.innerHeight * 0.1;

  if (accueilSection.top <= ratio && accueilSection.bottom > ratio) {
    currentSection = "accueil";
  } else if (aProposSection.top <= ratio && aProposSection.bottom > ratio) {
    currentSection = "a-propos";
  } else if (contactSection.top <= ratio && contactSection.bottom > ratio) {
    currentSection = "contact";
  }

  menuItems.forEach((item) => {
    item.classList.remove("active");
  });

  const currentMenuItem = document.querySelector(
    `.menu ul li a[href="#${currentSection}"]`
  );
  if (currentMenuItem) {
    currentMenuItem.classList.add("active");
  }
});

const formulaire = document.querySelector("form");
const alertContainer = document.getElementById("alert-container");

formulaire.addEventListener("submit", (event) => {
  event.preventDefault();

  const nom = formulaire.querySelector("#nom");
  const email = formulaire.querySelector("#email");
  const message = formulaire.querySelector("#message");

  // Effacer les alertes existantes
  alertContainer.innerHTML = "";

  if (
    nom.value.trim() === "" ||
    email.value.trim() === "" ||
    message.value.trim() === ""
  ) {
    showAlert("Veuillez remplir tous les champs du formulaire.", "error");
  } else {
    showAlert("Merci de nous avoir contacté :)", "success");
    nom.value = "";
    email.value = "";
    message.value = "";
  }
});

function showAlert(message, type) {
  const alertDiv = document.createElement("div");
  alertDiv.className = `alert ${type}`;
  alertDiv.textContent = message;
  alertContainer.appendChild(alertDiv);

  // Supprimer l'alerte après quelques secondes
  setTimeout(() => {
    alertDiv.remove();
  }, 2000); // 2 secondes
}
