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

catalogo.push(new Produto(0, '../images/products/productImage.png', 'COLEIRA', 'A coleira é o acessório essencial para manter o seu companheiro de quatro patas seguro e com estilo. Feita com materiais de alta qualidade, nossa coleira é resistente e confortável para o seu cão. Com diversos designs e cores disponíveis, você pode encontrar a coleira perfeita que combina com a personalidade do seu peludo amigo. Além de proporcionar segurança durante os passeios, a coleira é uma expressão do amor e cuidado que você tem pelo seu cão.', 100))
catalogo.push(new Produto(0, '../images/products/productImage2.png', 'COMIDA', 'Ofereça ao seu cão a nutrição de que ele precisa com a nossa seleção de alimentos premium. Nossas opções de comida são formuladas com ingredientes de alta qualidade, proporcionando uma dieta equilibrada e saborosa. Temos uma variedade de rações secas, úmidas e até mesmo opções naturais e orgânicas para atender às necessidades alimentares do seu pet. Cuide da saúde do seu cão com o melhor em nutrição, garantindo que ele se sinta energizado e feliz todos os dias.', 100))
catalogo.push(new Produto(0, '../images/products/productImage3.png', 'DISCO DE BRINQUEDO', 'Mantenha seu cão entretido e ativo com nosso disco de brinquedo, projetado para horas de diversão ao ar livre. Feito de materiais seguros e duráveis, o disco é perfeito para jogos de busca e interação com o seu cão. Seu design aerodinâmico permite lançamentos precisos, proporcionando ao seu peludo momentos de alegria e exercício. Leve-o para o parque ou o quintal e desfrute de momentos emocionantes e saudáveis com seu cão, fortalecendo ainda mais a conexão entre vocês.', 100))
catalogo.push(new Produto(0, '../images/products/productImage4.png', 'CASINHA', 'Nossa casinha para cães é um verdadeiro lar dentro de casa. Feita com materiais duráveis e resistentes às intempéries, ela oferece um refúgio seguro e aconchegante para o seu pet. Com um design espaçoso e confortável, a casinha é o local perfeito para seu cão descansar, se abrigar do sol ou da chuva, e relaxar com todo o conforto que merece. Garanta que seu melhor amigo tenha um lugar aconchegante para chamar de seu com a nossa casinha de qualidade.', 100))

function mostrar_catalogo(){
    catalogo.forEach(cada_produto => {
        document.querySelector("#catalogo").innerHTML += `
            <div id="loja_midsection_controller">
                <div id="loja_midsection_img1">
                    <img src=${cada_produto.imgSrc}>
                    <h1>${cada_produto.titulo}</h1>
                    <p>${cada_produto.desc}</p>
                    <h2>R$ ${cada_produto.valor}</h2>
                    <button data-bs-toggle="offcanvas" data-bs-target="#carrinho" class="botao_ver_mais" type="button">Comprar</button>
                </div>
            </div>
        `
    });
}

var btnTema = document.getElementById("btnTema");

btnTema.addEventListener('click',trocarTema);

function trocarTema(){
    let body = document.querySelector('body');
    let btnTemaImg = document.querySelector("#btnTemaImg")

    // hasAtributes = verifica se tem atributo
    // getAtributes = recebe o valor do atributo
    // setAtributes = seta um novo atributo ou substitui
    if(body.getAttribute("data-bs-theme") == "dark"){
        body.setAttribute("data-bs-theme","light");
        btnTemaImg.setAttribute("src","../images/moon-stars-fill.svg")
        btnTema.classList.replace("btn-outline-light","btn-outline-dark")
    }else{
        body.setAttribute("data-bs-theme","dark");
        btnTemaImg.setAttribute("src","../images/sun-fill.svg")
        btnTema.classList.replace("btn-outline-dark","btn-outline-light")
    }
}

mostrar_catalogo()
