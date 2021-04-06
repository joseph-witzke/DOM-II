//On Load
window.addEventListener('load', function(event){
    alert('Welcome to Fun Bus!!');
});

// Navbar
const navLinks = document.querySelectorAll('.nav .nav-link');
const navHeader = document.querySelector('.logo-heading');

navHeader.addEventListener('mouseover', function(event){
    navHeader.style.color = 'fuchsia';
});


//h2 subtitles
const welcomeSub = document.querySelector(".intro h2");
const busImg = document.querySelector('.intro img');

welcomeSub.addEventListener('mouseover', function(event){
    welcomeSub.style.texTransform = 'uppercase';
});
    
busImg.addEventListener('dblclick', function(event){
    busImg.src = ('https://images.unsplash.com/photo-1470472304068-4398a9daab00?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFkdmVudHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')
});

//background color
const background = document.querySelector(".content-section");


background.addEventListener('mouseover', function(event){
    background.style.backgroundColor = "blue";
})


