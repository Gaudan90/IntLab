document.addEventListener("DOMContentLoaded", () => {
  // Immagini per il carousel
  const immagini = [
    "../assets/image-one.jpg",
    "../assets/image-two.jpg",
    "../assets/image-three.png",
    "../assets/image-four.jpg",
    "../assets/image-five.jpg",
  ];

  const carouselImages = document.querySelector(".carousel-images");
  let currentIndex = 0;
  let carouselInterval;

  // Carica le immagini nel carousel
  function caricaImmagini() {
    // Rimuovi eventuali immagini esistenti
    while (carouselImages.firstChild) {
      carouselImages.removeChild(carouselImages.firstChild);
    }

    // Crea e aggiungi nuove immagini in modo sicuro
    immagini.forEach((imgSrc) => {
      const imgElement = document.createElement("img");
      imgElement.src = imgSrc;
      imgElement.alt = "Immagine evento";
      imgElement.style.display = "none";
      carouselImages.appendChild(imgElement);
    });
  }

  // Mostra immagine corrente
  function mostraImmagine(index) {
    const images = carouselImages.querySelectorAll("img");
    images.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
    });
  }

  // Navigazione carousel
  function navigaCarousel(direzione) {
    if (direzione === "next") {
      currentIndex = (currentIndex + 1) % immagini.length;
    } else {
      currentIndex = (currentIndex - 1 + immagini.length) % immagini.length;
    }
    mostraImmagine(currentIndex);
  }

  // Avvia rotazione automatica
  function avviaRotazioneAutomatica() {
    carouselInterval = setInterval(() => {
      navigaCarousel("next");
    }, 7000); // 7 secondi
  }

  // Gestore form
  function inviaRichiesta(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const dati = Object.fromEntries(formData.entries());

    // In una vera applicazione, si invierebbe al server
    console.log("Dati inviati:", dati);
    alert("Richiesta inviata con successo!");
  }

  // Inizializzazione
  caricaImmagini();
  mostraImmagine(currentIndex);
  avviaRotazioneAutomatica();

  const form = document.querySelector("form");
  form.addEventListener("submit", inviaRichiesta);

  //Animated Background
  const backgroundcolors = [
    "#d68015",
    "#cf7313",
    "#c96711",
    "#c35b10",
    "#bd4f0e",
    "#b7420d",
    "#b1360b",
    "#ab2a0a",
    "#a51e08",
    "#9f1207",
  ];
  let currentColorIndex = 0;

  function changeBackgroundColor() {
    document.body.style.backgroundColor = backgroundcolors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % backgroundcolors.length;
  }

  setInterval(changeBackgroundColor, 150);
  changeBackgroundColor();
});
