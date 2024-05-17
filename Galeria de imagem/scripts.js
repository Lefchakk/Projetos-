document.addEventListener('DOMContentLoaded', function (){

    const baseImagens = { 
        todas: ["imagem.jpg", "cidade.png","animal.jpg","natureza.jpg"],
        natureza:[],
        cidade:[],
        animais:[],
            
    }

    //Evento de click
    document.body.addEventListener('click', function (event){ 
        //acessa a lista de classe de onde clicou e 
        //procurra pela classe botao-categoria
        if(event.target.classList.contains("botao-categoria")){
         alert(123);
        }
    })

})
