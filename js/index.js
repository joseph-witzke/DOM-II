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
const background2 = document.querySelector(".content-section.inverse-content");
const background3 = document.querySelector(".content-destination");
const background4 = document.querySelector(".intro h2");


background.addEventListener('mouseover', function(event){
    background.style.backgroundColor = "blue";
})

background2.addEventListener('mouseover', function(event){
    background2.style.backgroundColor = "aqua";
})

background3.addEventListener('mouseover', function(event){
    background3.style.backgroundColor = "darksalmon";
});

background4.addEventListener('mouseover', function(event){
    background4.style.backgroundColor = "pink";
});

const bottomSubs = document.querySelectorAll("h4")

bottomSubs[0].addEventListener('click', function(event){
    bottomSubs[0].style.color = 'pink';
});
bottomSubs[1].addEventListener('click', function(event){
    bottomSubs[1].style.color = 'cyan';
});
bottomSubs[2].addEventListener('click', function(event){
    bottomSubs[2].style.color = 'darkmagenta';
});



