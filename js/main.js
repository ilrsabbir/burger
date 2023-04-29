const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if(window.scrollY >= 100){
        header.classList.add('sticky');
    }
    else{
        header.classList.remove('sticky');
    }
});
const menuBarIcon = document.querySelector(".fa-bars");
const menuBar = document.querySelector("menu");

menuBarIcon.addEventListener("click", showMenuBar);

function showMenuBar(){
    menuBarIcon.classList.toggle("fa-times");
    if(menuBar.style.right !== "0%"){
        menuBar.style.right = "0%";
    }else{
        menuBar.style.right = "-110%";
    }
}


var swiper = new Swiper(".carousol-slider", {
    spaceBetween: 30,
    centeredslides:true,
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    loop:true,
});