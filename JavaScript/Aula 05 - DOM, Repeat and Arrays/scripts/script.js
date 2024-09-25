function teste(){
    // document = refere ao documento html
    // getElement = pegar um elemento (pode ser por id ou class)
    // .value = pegar o valor dentro do input
    var input_teste = document.getElementById("input_teste").value

    // .innerHTML = colocar algo dentro do elemento HTML com tags
    // .innerTEXT = colocar algo dentro do elemento apenas em texto (string)
    document.getElementById("resposta").innerHTML += `
        <div class="elementos">
            ${input_teste}
        </div>
    ` 
}

function repeticao(){
    // enquanto(condicao) faca "X" fimenquanto
    let contador = 0
    while(contador <= 10){
        document.getElementById("resposta2").innerHTML += "*"
        contador++
    }

    for(let i = 0;i <= 10; i++){
        document.getElementById("resposta2").innerHTML += i
    }
}

function lista(){
    // var array_exemplo = Array()
    // array_exemplo[0] = "info"

    var livros = [true, "string", 100, []]
    console.log(livros[2])

    var lista_produtos = ['Mangá', 'Livros', 'Revistas', 'Apostila']
    
    lista_produtos.forEach(produto => {
        document.getElementById("resposta3").innerHTML += `
            <div class="elementos">
                ${produto}
            </div>
       `
    })
}

