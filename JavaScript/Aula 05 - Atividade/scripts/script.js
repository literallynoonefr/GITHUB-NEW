function movies(){
    var lista_filmes = ['No Country for Old Men', 'Old Boy', 'Fight Club', 'Zodiac',  'Apocalypse Now', 'Dune']

    lista_filmes.forEach(element => {
        document.getElementById("teste1").innerHTML += `<div class="divisao_array">${element}</div>`
    })
}

function calculo(){
    let n = document.getElementById("user_choice").value;
    for(let i = 1; i <= 10; i++){
        console.log(n + "*" + i + "=" + n * i);
    }
}