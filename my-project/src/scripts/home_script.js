document.addEventListener("DOMContentLoaded", () => {
  // Dropdown interaction for Info, Aree, and Attività
  const dropdownParents = document.querySelectorAll('.dropdown.dropdown-right > div');
  
  dropdownParents.forEach(parent => {
    const dropdown = parent.closest('.dropdown');
    const subMenu = dropdown.querySelector('ul');
    
    // Show submenu on mouseenter
    parent.addEventListener('mouseenter', () => {
      subMenu.classList.remove('hidden');
    });
    
    // Hide submenu on mouseleave from entire dropdown
    dropdown.addEventListener('mouseleave', () => {
      subMenu.classList.add('hidden');
    });
  });

  // Immagini per il carousel
  const immagini = [
    "../assets/image-one.jpg",
    "../assets/image-two.jpg",
    "../assets/image-three.png",
    "../assets/image-four.jpg",
    "../assets/image-five.jpg",
  ];

  const carouselImages = document.querySelector(".carousel-images");

  // Carica le immagini nel carousel con supporto DaisyUI
  function caricaImmagini() {
    carouselImages.innerHTML = ''; // Metodo più efficiente per pulire

    immagini.forEach((imgSrc) => {
      const carouselItem = document.createElement("div");
      carouselItem.classList.add(
        'carousel-item', 
        'w-full', 
        'carousel-center', 
        'bg-base-100'
      );
      
      const imgElement = document.createElement("img");
      imgElement.src = imgSrc;
      imgElement.alt = "Immagine evento";
      imgElement.classList.add(
        'w-full', 
        'object-cover', 
        'rounded-box'
      );

      carouselItem.appendChild(imgElement);
      carouselImages.appendChild(carouselItem);
    });
  }

  // Resto del codice rimane invariato
  function avviaRotazioneAutomatica() { /* ... */ }
  function inviaRichiesta() { /* ... */ }

  // Inizializzazione
  caricaImmagini();
  avviaRotazioneAutomatica();

  // Aggiungi event listener per il form
  const form = document.querySelector("form");
  form.addEventListener("submit", inviaRichiesta);
});