var catalogo = []
var carrinho = []
var id = 0;


class Produto {
    constructor(id, imgSrc, titulo, desc, valor){
        this.id = id
        this.imgSrc = imgSrc
        this.titulo = titulo
        this.desc = desc
        this.valor = valor
    }
}

catalogo.push(new Produto(0, '../images/products/productImage.png', 'Coleira', 'Lorem', 100))

function mostrar_catalogo(){
    catalogo.forEach(cada_produto => {
        document.querySelector("#catalogo").innerHTML += `
            <div id="middle_section_controller">
                <div id="mid_section_img1">
                    <img src=${cada_produto.imgSrc}>
                    <h1>${cada_produto.titulo}</h1>
                    <p>${cada_produto.desc}</p>
                    <h2>R$ ${cada_produto.valor}</h2>
                    <button data-bs-toggle="offcanvas" data-bs-target="#carrinho" class="botao_ver_mais" type="button">VER MAIS</button>
                </div>
            </div>
        `
    });
}

mostrar_catalogo()
