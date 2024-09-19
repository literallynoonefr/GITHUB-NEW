function calc_conta(){
    var n_all = parseInt (prompt(`Insira a quantidade de pessoas a dividir a conta: `))
    var val_conta = parseFloat (prompt(`Insira o valor total da conta a ser paga:`))

    var result = val_conta / n_all

    alert(`A quantia a ser paga por cada um é: ${result}`)
}