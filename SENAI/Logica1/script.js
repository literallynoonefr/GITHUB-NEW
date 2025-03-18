alert("Informe o saldo inicial da peça");

let saldo = parseInt(prompt("Saldo:"));

let continuar = true

while (continuar) {
    let opcao = prompt("Opção:\n- 1 para entrada\n- 2 para saída")
 
    if (opcao === "1") {
        let adicionar = true
       
        while (adicionar) {
            let quantidade = parseInt(prompt("Insira a quantidade de peças"))
       
            saldo = saldo + quantidade
       
            alert("Saldo atual: " + saldo)
       
            adicionar = confirm("Deseja adicionar mais peças?")
        }
    } else {
        let remover = true
        while (remover) {
            let quantidade = parseInt(prompt("Insira a quantidade de peças"))
       
            if (saldo < quantidade) {
                alert("Saldo insuficiente")
                continue
            }
 
            saldo = saldo - quantidade
 
            alert("Saldo atual: " + saldo)
 
            remover = confirm("Deseja remover mais peças")
        }
    }
 
    continuar = confirm("Deseja continuar no sistema?")
}
 
alert("Saldo Final: " + saldo)
alert("Sistema Encerrado")