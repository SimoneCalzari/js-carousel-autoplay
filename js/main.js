'use strict';

//************* CODICE VECCHIO INIZIO

// prendo contenitore immagini PRINCIPALE
const items = document.querySelector('.items');
// prendo contenitore immagini laterali LATERALE
const itemsMini = document.querySelector('.items-mini');


// creo array con src da inserire nelle img che andrò a creare
const imgs = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];

// inizializzo una variabile per la foto attiva e mostrata in pagina
let itemActive = 0;


// ciclo for per inserimento immagini e contenitori html
for (let i = 0; i < imgs.length; i++) {

  // creo div contenitore per immagine PRINCIPALE
  const divItem = document.createElement('div');

  // creo div contenitore immagini mini LATERALE
  const divItemMini = document.createElement('div');

  // aggiungo la classe active all'elemento che voglio attivo
  if (i === itemActive) {
    divItem.classList.add('active'); // PRINCIPALE
    divItemMini.classList.add('active'); // LATERALE
  }


  // PRINCIPALE INIZIO
  // aggiungo la classe item a tutti i div contenitori per avere lo stile voluto
  divItem.classList.add('item');
  // inserisco i div contenitore immagine dentro il contenitore grande item
  items.append(divItem);

  // creo le img in html
  const img = document.createElement('img');
  // inserisco il contenuto dell'attributo src dentro ogni img
  img.src = `${imgs[i]}`;
  // inserisco l'immagine dentro il suo contenitore
  divItem.append(img);
  // PRINCIPALE FINE


  //LATERALE INIZIO
  // aggiungo la classe item-mini a tutti i div contenitori per avere lo stile voluto
  divItemMini.classList.add('item-mini');
  // inserisco i div contenitore immagine dentro il contenitore grande item
  itemsMini.append(divItemMini);

  // creo le img miniMini in html
  const imgMini = document.createElement('img');
  // inserisco il contenuto dell'attributo src dentro ogni img
  imgMini.src = `${imgs[i]}`;
  // inserisco l'immagine dentro il suo contenitore
  divItemMini.append(imgMini);
  //LATERALE FINE

}

// mi salvo i due div bottone in due costanti
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// creo una sorta di array con i miei div contenitore di immagine PRINCIPALE
const arrayItems = document.querySelectorAll('.item');

// creo una sorta di array con i miei div contenitore di immagine LATERALE
const arrayItemsMini = document.querySelectorAll('.item-mini');

// evento click next
next.addEventListener('click', 
function () {
  // condizione sull'ultima foto che mi riporta alla prima
  if (itemActive === arrayItems.length - 1){
    arrayItems[itemActive].classList.remove('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.remove('active'); // LATERALE
    itemActive = 0;
    arrayItems[itemActive].classList.add('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.add('active'); // LATERALE
    console.log(`La foto corrente è ${itemActive + 1}`);
  } 
  // condizione di avanzamento in tutti i casi tranne quando sono all'ultima foto
  else if (itemActive < arrayItems.length - 1 ) {
    arrayItems[itemActive].classList.remove('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.remove('active'); // LATERALE
    itemActive++;
    arrayItems[itemActive].classList.add('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.add('active'); // LATERALE
    console.log(`La foto corrente è ${itemActive + 1}`);
  }
})


// evento click prev
prev.addEventListener('click', 
function () {
  // condizione sulla prima foto che mi riporta all'ultima
  if (itemActive === 0){
    arrayItems[itemActive].classList.remove('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.remove('active'); // LATERALE
    itemActive = arrayItems.length - 1;
    arrayItems[itemActive].classList.add('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.add('active'); // LATERALE
    console.log(`La foto corrente è ${itemActive + 1}`);
  } 
  // condizione di retrocessione alla foto precedenete tranne nel caso in cui sono alla prima foto
  else if (itemActive > 0 ) {
    arrayItems[itemActive].classList.remove('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.remove('active'); // LATERALE
    itemActive--;
    arrayItems[itemActive].classList.add('active'); // PRINCIPALE 
    arrayItemsMini[itemActive].classList.add('active'); // LATERALE
    console.log(`La foto corrente è ${itemActive + 1}`);
  }
})



// SOLUZIONE OTTIMIZZATA CON CICLO FOR

for (let j = 0; j < arrayItemsMini.length; j++) {
  arrayItemsMini[j].addEventListener('click',
  function() {
    if (j !== itemActive) {
      arrayItems[itemActive].classList.remove('active'); // PRINCIPALE
      arrayItemsMini[itemActive].classList.remove('active'); // LATERALE
      itemActive = j;
      arrayItems[j].classList.add('active'); // PRINCIPALE
      arrayItemsMini[j].classList.add('active'); // LATERALE
    }
  })
}

//************* CODICE VECCHIO FINE


//************* CODICE NUOVO INIZIO

//FUNCTIONS AUTOPLAY 

// AVANTI
function autoPlayForward() {
  // condizione sull'ultima foto che mi riporta alla prima
  if (itemActive === arrayItems.length - 1){
    arrayItems[itemActive].classList.remove('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.remove('active'); // LATERALE
    itemActive = 0;
    arrayItems[itemActive].classList.add('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.add('active'); // LATERALE
  } 
  // condizione di avanzamento in tutti i casi tranne quando sono all'ultima foto
  else if (itemActive < arrayItems.length - 1 ) {
    arrayItems[itemActive].classList.remove('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.remove('active'); // LATERALE
    itemActive++;
    arrayItems[itemActive].classList.add('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.add('active'); // LATERALE
  }
}

// INDIETRO
function autoPlayBackward() {
  // condizione sulla prima foto che mi riporta all'ultima
  if (itemActive === 0){
    arrayItems[itemActive].classList.remove('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.remove('active'); // LATERALE
    itemActive = arrayItems.length - 1;
    arrayItems[itemActive].classList.add('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.add('active'); // LATERALE
  } 
  // condizione di retrocessione alla foto precedenete tranne nel caso in cui sono alla prima foto
  else if (itemActive > 0 ) {
    arrayItems[itemActive].classList.remove('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.remove('active'); // LATERALE
    itemActive--;
    arrayItems[itemActive].classList.add('active'); // PRINCIPALE 
    arrayItemsMini[itemActive].classList.add('active'); // LATERALE
  }
}

// RICHIAMO LE FUNZIONI OGNI 3 SECONDI, PROVO SIA IL CASO AVANTI CHE INDIETRO
// setInterval(autoPlayForward, 3000);
// setInterval(autoPlayBackward, 3000);


//************* CODICE NUOVO FINE