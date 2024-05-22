const icon = document.querySelector('.menuopen');
const open = document.querySelector('.navbar');
const closes = document.querySelector('.close');
icon.addEventListener('click', ()=>{
    open.classList.toggle('nav_open');
});

closes.addEventListener('click', ()=>{
    open.classList.remove('nav_open');
})