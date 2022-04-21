// BURGER MENU

const divLayer = document.createElement('div')
document.body.append(divLayer)

function openMenu(){
    document.querySelector('.burger').classList.toggle('open-menu')
    document.querySelector('nav').classList.toggle('open-menu')
    document.querySelector('body').classList.toggle('open-menu')
    document.querySelector('.logo').classList.toggle('open-menu')
    divLayer.classList.toggle('layer-open-menu')
}

document.querySelector('.burger').addEventListener('click', openMenu)

document.querySelectorAll('.nav-link').forEach(elem => {
    elem.addEventListener('click',openMenu)
})

divLayer.addEventListener('click', openMenu)