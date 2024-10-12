/*
    1 Passo = Entrada de Dados
        - n1, n2, operacao

    2 Passo = Cálculo
        - Qual operador foi escolhido
        - Fazer o cálculo
        - Salvar em resulado
            - Se resetar : zerar variáveis
    
    3 Passo = Saída de Dados
        - Resultado no alert(" ")
*/

var n1;
var n2;
var operacao;
var resultado;

function botao_numero(botao){
    if(n1 != undefined){
        n2 = Number(botao)
        console.log("Salvei no 2")
        
    }else{
        n1 = Number(botao)
        console.log("Salvei no 1")
    }
}

function botao_operacao(botao){
    operacao = botao
}

function calcular(){
    switch(operacao){
        case "+":
            resultado = n1 + n2
        break

        case "-":
            resultado = n1 - n2
        break

        case "*":
            resultado = n1 * n2
        break

        case "/":
            resultado = n1 / n2
        break
        default:
            alert("Selecione uma operação!")
        break
    }

    alert(`${n1} ${operacao} ${n2} = ${resultado}`)
}

function reset(){
    n1 = undefined
    n2 = undefined
    operacao = undefined
}