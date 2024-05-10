document.addEventListener('DOMContentLoaded', function(){

//Tipos de dados
//string: Sequencia de caracter
//Number: Números inteiros ou pontos flutuantes (10.4)
//Boolean: Retorna dois valores, true ou false
//Object: Estrutura de dados que pode armazenar múltiplos valores
//NULL: Quando está vazio
//Array: Objeto especial ordenado
//Function: Bloco de código reutilizável.

//CONST É usado para declarar uma variável cujo valor é permanente
    const teste = 50;

    //LET é usado para declarar variáveis que os valores podem ser retibruidos

    let C = 0;
    C - 10;
    console.log(C);

    //const - variavel;
    const notaMedia = 5;

    //entre () comando if - condição verdadeira.
    if(notaMedia >=6){
        alert("Aluno passou!");

    }
    //else if - condição falsa, usar em conjunto.  
    else if (notaMedia >= 4 && notaMedia < 6) {
        alert("Aluno quase passou!");

    }
    else { 
        alert("Aluno reprovou!")
    }

    //------ OPERADORES -------

    // = sinal de atribuição
    // == sinal de comparação
    // === verifica se os dois são iguais e tês o mesmo tipo de dado
    // != se é diferente 
    // !== se é estritamente diferente 
    // > maior 
    // < menor 

    const professor = "João";
    if (professor == "Lucas") {
        console.log ("sim é Lucas");
    }
    else{
        console.log ("não é Lucas");
    }

})  