$('.owl-carousel').owlCarousel({
    loop:true, //loop das imagens
    margin:10,  //margem entra as imagens
    nav:true,    //botao de navegacao embaixo
    responsive:{   // quantidade de imagens que vai aparecer em cada tamanho de tela
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

