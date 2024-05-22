document.addEventListener('DOMContentLoaded', function (){

    const baseImagens = { 
        todas: ["cidade.jpg","animais.png","natureza.png"],
        natureza:["natureza.png"],
        cidade:["cidade.jpg"],
        animais:["animais.png"],
            
    }

    function carregaImagens(){
        const galeria = document.querySelector("#galeria-imagens"); //Selecionar elementos HTML com base em um seletor
        
        const imagens = baseImagens["todas"]

        imagens.forEach(img => { 
                console.log(img);     
                galeria.innerHTML += '<div> <img src="imagens/'+ img + '" </div>';                
        })
        
    }
    carregaImagens();

    //Evento de click
    document.body.addEventListener('click', function (event){ 
        //acessa a lista de classe de onde clicou e 
        //procurra pela classe botao-categoria
        if(event.target.classList.contains("botao-categoria")){
         //alert(123);
        }
    })

})
