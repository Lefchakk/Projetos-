document.addEventListener('DOMContentLoaded', function (){

    const baseImagens = { 
        todas: ["cidade.jpg","animais.png","natureza.png","pesquisa"],
        natureza:["natureza.png"],
        cidade:["cidade.jpg"],
        animais:["animais.png"],
            
    }

    function carregaImagens(categoria){
        //Selecionar elementos HTML com base em um seletor
        const galeria = document.querySelector("#galeria-imagens"); 
        galeria.innerHTML="";

        const imagens = baseImagens[categoria]

        imagens.forEach(img => { 
                galeria.innerHTML += '<div class="imagem-item"> <img src="imagens/'+ img + '" </div>';                
        })
        
    }

    function ordenaImagens(ordem){

        const imagens = Array.from(document.querySelectorAll("#galeria-imagens .imagem-item"))

        imagens.sort((a,b) => {
            console.log(a)


        })
    }



    carregaImagens("todas");

    //Evento de click
    document.body.addEventListener('click', function (event){ 
        //acessa a lista de classe de onde clicou e 
        //procurra pela classe botao-categoria
        if(event.target.classList.contains("botao-categoria")){
        
        const categoria = event.target.dataset.categoria;

        //alert(categoria);
         carregaImagens(categoria);
            
        }
        if(event.target.classList.contains("botao-ordenar")){

            const ordem = event.target.dataset.ordem;
            ordenaImagens(ordem)

        }
    })

})
