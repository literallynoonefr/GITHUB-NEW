var livros = [
    ['../images/livros/harry potter 2.jpg', 'Harry Potter', 'lorem'],
    ['../images/livros/girlRed.jpg', 'Girl Red', 'lorem'],
    ['../images/livros/divergente.jpg', 'Pijama Listrado', 'lorem'],
    ['../images/livros/dontlettheforestin.jpg', 'Dont Let the Forest In', 'lorem'],
    ['../images/livros/therestlessdark.jpg', 'The Restless Dark', 'lorem'],
    ['../images/livros/percy1.jpg', 'Percy Jackson 1', 'lorem'],
    ['../images/livros/percy2.jpg', 'Percy Jackson 2', 'lorem'],
    
]

function atualizar_biblioteca(){
    document.querySelector("#available_books_section").innerHTML = ``
    livros.forEach(element => {
        document.querySelector("#available_books_section").innerHTML += `
                <div id="available_books_controller">
                    <div class="available_books">
                        <img src="${element[0]}" alt="">
                        <h2 class="book_name">${element[1]}</h2>
                        <p class="book_description">${element[2]}</p>
                    </div>
                </div>
        `
    });
}

function manipular_livros(){
    // push = adiciona um novo elemento ao final
    // unshift = adiciona um novo elemento no começo
    // pop = deleta o último elemento adicionado
    // shift = deleta o primeiro elemento
    livros.push(["#", "Game of Thrones", "Lorem"])
    livros.unshift(["#", "Independence Day", "Lorem"])
    livros.pop()
    livros.shift()
    // splice com terceiro atributo ([])= substitui o valor
    livros.splice(1, 1, ["#", "Independence Day", "Lorem"])
    // splice com 0 (no delete) após o seletor = adiciona um valor
    livros.splice(1, 0, ["#", "Vingadores", "Lorem"])
    // splice sem terceiro atributo !([]) = deleta o valor por completo
    livros.splice(2, 1)
}

manipular_livros()
atualizar_biblioteca()




