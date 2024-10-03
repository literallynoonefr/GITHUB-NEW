console.log($('#caixa'))

// $(#xyz).text/.html = substitui o texto atrelado a ID dentro do "$()"
$('#caixa').text('Based.')
$('#caixa').html('<h1>Basedcigar.</h1>')

$('#teste1').on('click', function(){
    alert('Way too based!')
})

$('#teste2').on('click', function(){
    $('#caixa').css('width', '160px')
    $('#caixa').css('background-color', 'green')
})

$('#teste3').on('click', function(){
    if($('#caixa').hasClass('primeiro_estado')){
        $('#caixa').addClass('segundo_estado')
        $('#caixa').removeClass('primeiro_estado')
    }else{
        $('#caixa').toggleClass('segundo_estado')
        // $('#caixa').toggleClass('primeiro_estado')
    }
    // $('#caixa').addClass('primeiro_estado').css('width', '160px')
})

$('#teste4').on('click', function(){
    $('#caixa').fadeToggle(500)
})

$('#teste5').on('click', function(){
    $('#caixa').fadeOut(500)
})

$('#teste5').on('click', function(){
    $('#caixa').fadeIn(500)
})

