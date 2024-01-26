// Animacao plugin
if (window.SimpleAnime) {
    new SimpleAnime();
    
}

function scroll(event){
    const alturaPagina = window.scrollY;
    console.log(alturaPagina)
 
}


window.addEventListener("scroll", scroll)