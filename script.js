document.addEventListener("DOMContentLoaded", function () {
  const words = ["Summit"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 150;
  const delayAfterTyping = 1500;

  function typeEffect() {
    const typingElement = document.querySelector(".typing-text");
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayAfterTyping);
        return;
      }
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? speed : speed);
  }
  typeEffect();
});

var all = document.getElementById("navbar");
var navega = document.getElementById("textnav");
var tudao = document.getElementById("conteudo");
var mostrar = false;

function sidebar() {
  mostrar = !mostrar;
  if (mostrar) {
    navega.style.marginLeft = "-10vw";
    navega.style.animationName = "mostrar";
    tudao.style.filter = "blur(2px)";
  } else {
    navega.style.marginLeft = "-100vw";
    navega.style.animationName = "esconder";
    tudao.style.filter = "";
  }
}
function fechar() {
  if (mostrar) {
    sidebar();
  }
}
window.addEventListener("resize", function (event) {
  if (window.innerWidth > 768 && mostrar) {
    sidebar();
  }
});

document.getElementById("formular").addEventListener("submit", function (lkm) {
  if (!this.checkValidity()) {
    lkm.preventDefault();
    alert("Preencha todos os dados");
  } else {
    lkm.preventDefault();
    window.location.href = "Boa.html";
  }
});
