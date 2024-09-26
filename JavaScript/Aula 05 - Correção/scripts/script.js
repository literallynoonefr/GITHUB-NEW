function ex1(){
    var filmes = ['a', 'b', 'c', 'd', 'e', 'f']

    filmes.forEach(element => {
        document.querySelector("#resposta_ex2").innerHTML += `
            <p>${element}</p>
        `
    })
}


/*
    Passo 1
        - Buscar o input e receber o valor
    
    Passo 2
        - Pegar o valor e multiplicar até 10
    
    Passo 3
        - Imprimir o resultado na div "resposta_ex2"
*/
function ex2(){
    // ou document.querySelector("") -> mesma coisa
    // .value = utilizar o input colocado pelo usuário,
    // caso contrário, será retornado o HTML (erro)
    let numero = Number(document.getElementById("input_ex2").value)

    
    /*
    Contador por meio do while(){}
    let contador = 0
    while(contador <= 10){
        contador++
    }
    */

    if(numero == 0){
        document.getElementById("resposta_ex2").innerHTML = ``
    }else{
        for(let contador = 0; contador <= 10; contador++){
            let calculo = numero * contador
    
            document.getElementById("resposta_ex2").innerHTML += `
                <p>${numero} * ${contador} = ${calculo}</p>  
            `
        } 
    }
    // console.log(numero)
}