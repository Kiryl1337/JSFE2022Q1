document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.burger').classList.toggle('open-menu')
    document.querySelector('nav').classList.toggle('open-menu')
    document.querySelector('body').classList.toggle('open-menu')
    document.querySelector('.logo').classList.toggle('open-menu')
    
})