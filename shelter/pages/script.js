import petsArr from './main/pets.js';

// BURGER MENU

const divLayer = document.createElement('div')
document.body.append(divLayer)

function openMenu(){
    document.querySelector('.burger').classList.toggle('open-menu')
    document.querySelector('nav').classList.toggle('open-menu')
    document.querySelector('body').classList.toggle('open-menu')
    document.querySelector('header').classList.toggle('open-menu')
    document.querySelector('.logo').classList.toggle('open-menu')
    divLayer.classList.toggle('layer-open-menu')
}

document.querySelector('.burger').addEventListener('click', openMenu)

document.querySelectorAll('.nav-link').forEach(elem => {
    elem.addEventListener('click',openMenu)
})

divLayer.addEventListener('click', openMenu)

// POPUP

const divBlackout = document.createElement('div')
document.body.append(divBlackout)


function openModal(event) {
  document.querySelector('body').classList.toggle('open-modal')
  document.querySelector('.modal-window-wrapper').style.display = 'block';
  divBlackout.classList.add('blackout');
  const petName = event.currentTarget.querySelector('section.pets .container .pet-card-items .pet-card-item h3').innerHTML;
  const petInfo = petsArr.find((_, i, arr) => {
    if (arr[i]["name"] === petName) {
      return arr[i];
    }
  });

  document.querySelector('.modal-window-container img').src = petInfo["img"].toString();
  document.querySelector('.pet-name').textContent = petInfo["name"].toString();
  document.querySelector('.pet-type').textContent = petInfo["type"].toString() + ' - ' + petInfo["breed"].toString();
  document.querySelector('.pet-description').textContent = petInfo["description"].toString();
  document.querySelector('.value.age').textContent = petInfo["age"].toString();
  document.querySelector('.value.inoculations').textContent = petInfo["inoculations"].toString();
  document.querySelector('.value.diseases').textContent = petInfo["diseases"].toString();
  document.querySelector('.value.parasites').textContent = petInfo["parasites"].toString();
}

function closeModal() {
  document.querySelector('body').classList.toggle('open-modal')
  document.querySelector('.modal-window-wrapper').style.display = 'none';
  divBlackout.classList.remove('blackout')
}

document.querySelectorAll('.pet-card-item').forEach((el) => { 
    el.addEventListener('click', openModal) 
}); 

divBlackout.addEventListener('click', closeModal);
document.querySelector('.btn-modal-close').addEventListener('click', closeModal);