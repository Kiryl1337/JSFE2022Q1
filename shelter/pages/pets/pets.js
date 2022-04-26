import petsArr from '../main/petsArr.js';

// PAGINATION

document.querySelector('.btn-pagination.single-left').addEventListener('click', function () {
    let pageNumber = +btnNumber.innerHTML;
    btnNumber.innerHTML = `${--pageNumber}`;
    anotherPage();
  });
  
  document.querySelector('.btn-pagination.single-right').addEventListener('click', function () {
    let pageNumber = +btnNumber.innerHTML;
    btnNumber.innerHTML = `${++pageNumber}`;
    anotherPage();
  });
  
  document.querySelector('.btn-pagination.double-left').addEventListener('click', function () {
    btnNumber.innerHTML = '1';
    anotherPage();
  });
  
  document.querySelector('.btn-pagination.double-right').addEventListener('click', function () {
    btnNumber.innerHTML = pageCount;
    anotherPage();
  });
  
  
  const btnNumber = document.querySelector('.btn-pagination.number');
  
  function countOurPets() {
    if (window.innerWidth >= 1280) {
       return 8 
    } else if (window.innerWidth >= 768) {
       return 6 
    }else if (window.innerWidth < 768){
       return 3 
    }
  }
  
  let newPetsArray = [];
  let petsOnPage = [];
  let pageCount = 48 / countOurPets();
  
  while (newPetsArray.length < pageCount) {
      while (petsOnPage.length < countOurPets()) {
        let petIndex = Math.floor(Math.random() * 8);
        if (!petsOnPage.includes(petIndex)) {
          petsOnPage.push(petIndex);
        }
      }
      newPetsArray.push(petsOnPage);
      petsOnPage = []; 
  }
  
  let startSet = newPetsArray[0];
  for (let i in startSet) {
    document.querySelector('.pet-card-items').children[i].querySelector('.pet-img img').src = petsArr[startSet[i]].img;
    document.querySelector('.pet-card-items').children[i].querySelector('.pet-card-item h3').innerHTML = petsArr[startSet[i]].name;
  }
  
  function anotherPage() {
    let petsSet;
    let activePageNumber = +btnNumber.innerHTML;
  
    if (activePageNumber === 1) {
      document.querySelector('.btn-pagination.double-left').classList.add('inactive');
      document.querySelector('.btn-pagination.single-left').classList.add('inactive');
      document.querySelector('.btn-pagination.single-right').classList.remove('inactive');
      document.querySelector('.btn-pagination.double-right').classList.remove('inactive');
      petsSet = newPetsArray[0];
    } else if (activePageNumber === pageCount) {
      document.querySelector('.btn-pagination.double-left').classList.remove('inactive');
      document.querySelector('.btn-pagination.single-left').classList.remove('inactive');
      document.querySelector('.btn-pagination.single-right').classList.add('inactive');
      document.querySelector('.btn-pagination.double-right').classList.add('inactive');
      petsSet = newPetsArray[pageCount - 1];
    } else {
      document.querySelector('.btn-pagination.double-left').classList.remove('inactive');
      document.querySelector('.btn-pagination.single-left').classList.remove('inactive');
      document.querySelector('.btn-pagination.single-right').classList.remove('inactive');
      document.querySelector('.btn-pagination.double-right').classList.remove('inactive');
      let pageNumber = +btnNumber.innerHTML - 1;
      petsSet = newPetsArray[pageNumber];
    }
  
    for (let i in petsSet) {
      document.querySelector('.pet-card-items').children[i].querySelector('.pet-img img').src = petsArr[petsSet[i]].img;
      document.querySelector('.pet-card-items').children[i].querySelector('.pet-card-item h3').innerHTML = petsArr[petsSet[i]].name;
    }
  }