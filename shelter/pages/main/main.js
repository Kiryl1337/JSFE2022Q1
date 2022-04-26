import petsArr from './petsArr.js';
import openModal from '../script.js';


// SLIDER

const LEFT_ITEMS = document.querySelector('.pet-card-items.left');
const RIGHT_ITEMS = document.querySelector('.pet-card-items.right');
const CAROUSEL = document.querySelector('.carousel-wrapper');

window.load = slider();

function moveLeft() {
  slider(LEFT_ITEMS);
  CAROUSEL.classList.add('transition-left-effect');
  document.querySelector('.btn-arrow:nth-child(1)').removeEventListener('click', moveLeft);
  document.querySelector('.btn-arrow:last-child').removeEventListener('click', moveRight);
}

function moveRight() {
  slider(RIGHT_ITEMS);
  CAROUSEL.classList.add('transition-right-effect');
  document.querySelector('.btn-arrow:nth-child(1)').removeEventListener('click', moveLeft);
  document.querySelector('.btn-arrow:last-child').removeEventListener('click', moveRight);
};

document.querySelector('.btn-arrow:nth-child(1)').addEventListener('click', moveLeft);
document.querySelector('.btn-arrow:last-child').addEventListener('click', moveRight);

function slider(item){

  let itemsCount = window.innerWidth >= 1280 ? 3 : (window.innerWidth < 1280 && window.innerWidth >= 768) ? 2 : 1;
  let petsOnPage = [];
  for (let i = 0; i < itemsCount; i++) {
    let elem = document.querySelector('.pet-card-items.center').querySelectorAll('.pet-card-item h3')[i]
    petsOnPage.push(elem.innerHTML);
  }

  let notPetsOnPage = [];
  for (let i = 0; i < petsArr.length; i++) {
    if(petsOnPage[0] !== petsArr[i]['name'] && petsOnPage[1] !== petsArr[i]['name'] && petsOnPage[2] !== petsArr[i]['name']){
      notPetsOnPage.push(petsArr[i]);
    }
  }

  let randomPets = []
  for (let i = 0; randomPets.length < 3; i++) {
    const randomPet = notPetsOnPage[Math.floor(Math.random() * notPetsOnPage.length)];
    if(!randomPets.includes(randomPet)){
      randomPets.push(randomPet);
    }
  }
 
  if(item === RIGHT_ITEMS) {
    for (let i = 0; i < 3; i++) {
      let currentItem = document.querySelector('.pet-card-items.right').querySelectorAll('.pet-card-item')[i];
      currentItem.querySelector('.pet-img img').src = randomPets[i]['img'].toString();
      currentItem.querySelector('h3').textContent = randomPets[i]['name'].toString();
    }
  } else if(item === LEFT_ITEMS){
    for (let i = 0; i < 3; i++) {
      let currentItem = document.querySelector('.pet-card-items.left').querySelectorAll('.pet-card-item')[i];
      currentItem.querySelector('.pet-img img').src = randomPets[i]['img'].toString();
      currentItem.querySelector('h3').textContent = randomPets[i]['name'].toString();
    }
  } else {
    for (let i = 0; i < 3; i++) {
      let currentItem = document.querySelector('.pet-card-items.center').querySelectorAll('.pet-card-item')[i];
      currentItem.querySelector('.pet-img img').src = randomPets[i]['img'].toString();
      currentItem.querySelector('h3').textContent = randomPets[i]['name'].toString();
    }
  }

}

CAROUSEL.addEventListener('animationend', (animationEvent) => {
  if (animationEvent.animationName === "left-effect") {
    CAROUSEL.classList.remove("transition-left-effect");
    document.querySelector(".pet-card-items.center").innerHTML = LEFT_ITEMS.innerHTML;

  } else if (animationEvent.animationName === "right-effect") {
    CAROUSEL.classList.remove("transition-right-effect");
    document.querySelector(".pet-card-items.center").innerHTML = RIGHT_ITEMS.innerHTML;
  }
  document.querySelector('.btn-arrow:nth-child(1)').addEventListener("click", moveLeft);
  document.querySelector('.btn-arrow:last-child').addEventListener("click", moveRight);

  document.querySelectorAll('.pet-card-item').forEach((el) => { 
    el.addEventListener('click', openModal) 
}); 

});
