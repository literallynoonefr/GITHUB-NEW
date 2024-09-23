function explicacao(){

    let idade = Number(prompt("Qual é a idade?"))

    if(idade >= 0 && idade < 15){
        document.getElementById('resultado').innerText = 'Você é uma criança'
        // alert("Criança")
        // location.reload()
    }
    
    if (idade >= 15 && idade < 30){
        alert("Jovem")
        location.reload()
    }

    if (idade >= 30 && idade < 60){
        alert("Adulto")
        location.reload()
    }

    if(idade >= 60){
        alert("Idoso")
        location.reload()
    }
}