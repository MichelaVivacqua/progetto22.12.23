window.addEventListener("scroll", function () {
  const navbar = document.getElementById("nav");
  const currentPosition = window.scrollY;

  const scrollChange = 500;

  if (currentPosition > scrollChange) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  const button = document.getElementById("started");
  const currentPosition = window.scrollY;

  const scrollChange = 500;

  if (currentPosition > scrollChange) {
    button.classList.add("scrolled");
  } else {
    button.classList.remove("scrolled");
  }
});

//GRAZIE AL SUGGERIMENTO NELLA CONSEGNA DI SETINTERVAL HO TROVATO IL METODO CHE SECONDO IL MIO RAGIONAMENTO AVREI POTUTO USARE PER L'EFFETTO DELLE M CHE APPAIONO E SCOMPAIONO, MA NON RIESCO A FARLO FUNZIONARE IN QUANTO IN QUESTA STRUTTURA SVG NON SONO CAPACE DI TROVARE IL PERCORSO DELLE SINGOLE LETTERE M PER IMPOSTARLA AL QUERYSELECTORALL//
const paths = document.querySelectorAll("svg path"); // Ho provato a mettere questo ma non funziona

let index = 0;
setInterval(() => {
  paths[index].style.opacity = "1"; // avrebbe fatto apparire la lettera M
  setTimeout(() => {
    paths[index].style.opacity = "0"; // M scompare
  }, 1000); // Tempo tra l'apparizione e la scomparsa
  index = (index + 1) % paths.length;
}, 1500); // Intervallo di tempo tra l'apparizione di una M e la seguente
