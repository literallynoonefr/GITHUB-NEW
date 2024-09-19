function suc_ant(){
    var user_input = parseInt (prompt(`Insira um número inteiro qualquer: `))

    var sucessor = user_input + 1
    var antecessor = user_input - 1

    alert(`O sucessor é ${sucessor} e o antecessor é ${antecessor}`)
}