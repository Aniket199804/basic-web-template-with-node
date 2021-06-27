buger=document.querySelector('.buger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.navlist')
buger.addEventListener('click',()=>{
    navbar.classList.toggle('navhrsp');
    navlist.classList.toggle('uvlistrsp');

})