// FUNÇÃO PARA TROCAR DE TEMA
function trocarTema(index){
    let body = document.querySelector('body');
    let btnTemaImg = document.querySelector("#btnTemaImg")

    // hasAtributes = verifica se tem atributo
    // getAtributes = recebe o valor do atributo
    // setAtributes = seta um novo atributo ou substitui
    if(body.getAttribute("data-bs-theme") == "dark"){
        body.setAttribute("data-bs-theme","light");
        btnTema.classList.replace("btn-outline-light","btn-outline-dark")

        if(index){
            btnTemaImg.setAttribute("src","images/moon-stars-fill.svg")
        }else{
            btnTemaImg.setAttribute("src","../images/moon-stars-fill.svg")
        }
    }else{
        body.setAttribute("data-bs-theme","dark");
        btnTema.classList.replace("btn-outline-dark","btn-outline-light")

        if(index){
            btnTemaImg.setAttribute("src","images/sun-fill.svg")
        }else{
            btnTemaImg.setAttribute("src","../images/sun-fill.svg")
        }
    }
}