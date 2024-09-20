function calculadora(){
    alert("Bem-vindo a CalculadoraJS")

    var operacao = prompt(`Escolha a operação a ser feita: + - * /`)
    var n1 = Number(prompt(`Insira o PRIMEIRO número: `))
    var n2 = Number(prompt(`Insira o SEGUNDO número: `))

    if (operacao == `+`){
        var resultado = n1 + n2
    }

    if (operacao == `-`){
        var resultado = n1 - n2
    }

    if(operacao == `*`){
        var resultado = n1 * n2
    }

    if (operacao == `/`){
        var resultado = n1 / n2
    }

    alert(`O resultado da operação é ${resultado}`)
}