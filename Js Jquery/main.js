$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })

    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, Insira seu Nome Completo',
            email: 'Por favor, Insira um Email válido',
            telefone: 'Por favor, Insira um número de telefone válido',
            cpf: 'Por favor, Insira um CPF válido',
            endereco: 'Por favor, Insira um Endereço válido',
            cep: 'Por favor, Insira um CEP válido'
        },
        submitHandler: function(form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        // fiz a validação colocando o valor dos itens restantes e mudei a frase só por estetica mesmo
        invalidHandler: function (form, validator) {
            const camposInpreenchidos = validator.numberOfInvalids();
            if (camposInpreenchidos) {
                alert(`Por favor, Verifique seu formulário pois faltam ${camposInpreenchidos} informações para finalizar a Compra!`);
            }
        }
    })

})    