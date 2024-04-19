let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>
{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}



const accordion = document.getElementsByClassName('Q-box');

for (i= 0; i<accordion.length;i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}

