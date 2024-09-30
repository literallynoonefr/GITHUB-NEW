// Recebimento / Salvamento de valores = ".value"

class Carro{
    constructor(marca, modelo, ano, cor, vel_max){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.vel_max = vel_max;
        this.vel_min = 0;
        // this.acelerar = my_function(){}
    }
    acelerar(aceleracao){
        let aceleracao_input = Number(document.querySelector("#aceleracao_input").value)

        if(aceleracao_input <= carro.vel_max){
            carro.vel_min = aceleracao_input
            alert("Acelerou!")
            mostrar_carro()
        }else{
            alert("Velocidade máxima ultrapassada!")
            carro.vel_min = carro.vel_max
            mostrar_carro()
        }
    }
}

var carro = null
document.querySelector("#botao_cadastro").addEventListener('click', cadastrar)

function mostrar_carro(){
    document.querySelector("#resultado").innerHTML = `
        <div class="container">
            <p> ${carro.marca} </p>
            <p> ${carro.modelo} </p>
            <p> ${carro.ano} </p>
            <p> ${carro.cor} </p>
            <p> ${carro.vel_max} </p>
            <p> ${carro.vel_min} </p>
            <input id="aceleracao_input" type="number">
            <button id="acelerar_botao" type="button">ACELERACION</button>
        </div>
    `
    document.querySelector("#acelerar_botao").addEventListener('click', carro.acelerar)
}

function cadastrar(){
    let marca = document.querySelector("#marca").value
    let modelo = document.querySelector("#modelo").value
    let ano = Number(document.querySelector("#ano").value)
    let cor = document.querySelector("#cor").value
    let vel_max = Number(document.querySelector("#vel_max").value)

    carro = new Carro(marca,modelo,ano,cor,vel_max)

    mostrar_carro()
}


