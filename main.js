let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick=()=>{
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick=()=>{
    menu.classList.toggle('active');
    search.classList.removee('active');
}

window.onscroll=()=>{
    menu.classList.remove('active');
    search.classList.remove('active');
}
let header=document.querySelector('header');

window.addEventListener('scroll' ,()=>{
    header.classList.toggle('shadow' , window.scrollY>0);
});
const myInput = document.getElementById('myInput');
myInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    alert('API is not used!');
  }
});

