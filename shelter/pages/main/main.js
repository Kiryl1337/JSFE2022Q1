import petsArr from './pets.js';
// SLIDER

window.load = slider();
document.querySelector('.btn-arrow:nth-child(1)').addEventListener('click', previousEffect);
document.querySelector('.btn-arrow:last-child').addEventListener('click', nextEffect);

function slider(){

  let itemsCount = window.innerWidth >= 1280 ? 3 : (window.innerWidth < 1280 && window.innerWidth >= 768) ? 2 : 1;
  let petsOnPage = [];
  for (let i = 0; i < itemsCount; i++) {
    let elem = document.querySelectorAll('.pet-card-item h3')[i]
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

  for (let i = 0; i < 3; i++) {
    let currentItem = document.querySelectorAll('.pet-card-item')[i];
    currentItem.querySelector('.pet-img img').src = randomPets[i]['img'].toString();
    currentItem.querySelector('h3').textContent = randomPets[i]['name'].toString();
  }
  
}

function previousEffect(){
  slider()
  document.querySelector('.pet-card-items').classList.toggle('previous-effect');
  setTimeout(() => document.querySelector('.pet-card-items').classList.toggle('previous-effect'), 500)
}

function nextEffect(){
  slider()
  document.querySelector('.pet-card-items').classList.toggle('next-effect');
  setTimeout(() => document.querySelector('.pet-card-items').classList.toggle('next-effect'), 500)
} 
