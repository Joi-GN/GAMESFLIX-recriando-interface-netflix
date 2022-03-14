$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function thankyou(){
    alert("Obrigada por visitar meu site!! 😃");
}

function notification(){
    alert("Sem notificações");
}

const lighModeClass = 'light-mode';
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

function changeMode(){
    body.classList.toggle(lighModeClass);
    footer.classList.toggle(lighModeClass);
}