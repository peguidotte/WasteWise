//Caso o usuário não mexa o mouse por 3segundos o Header desaparece, porém caso o usuário ainda não tenha scrollado a página isso não acontecerá
let timer;

document.addEventListener('mousemove', function () {
    clearTimeout(timer);

    if (window.scrollY > 0) {
        document.querySelector('header').classList.remove('hide');

        timer = setTimeout(function () {
            document.querySelector('header').classList.add('hide');
        }, 3000);
    }
});

window.addEventListener('scroll', function () {
    if (window.scrollY === 0) {
        document.querySelector('header').classList.remove('hide');
    }
});


function openMenu() {
    console.log ("Botão clicado")
    const itens_nav = document.querySelector('.nav_list');
    if (itens_nav && (itens_nav.style.display === 'none' || !itens_nav.style.display)) {
        itens_nav.style.display = 'block';
        itens_nav.style.position = 'absolute';
        itens_nav.style.top = '100%';
        itens_nav.style.right = '0';
        itens_nav.style.textAlign = 'center';
        itens_nav.style.backgroundColor = 'rgba(227, 227, 227, 0.2)';
        
        const navItems = document.querySelectorAll('.nav_list li');
            navItems.forEach(item => {
                item.style.padding = '20px';
            });


    } else if (itens_nav) {
        itens_nav.style.display = 'none'
    }
}

// Caso o usuario role a página com o header visível, troca a cor da logo e das escritas para não haver interferência na leitura
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const slidePrincipalHeight = document.querySelector('#slide_main').offsetHeight;
    if (window.scrollY > slidePrincipalHeight) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//Validando Formulário
document.getElementById('contatoForm').addEventListener('submit', function(event) {
    var isValid = true;
    
    // Validação do nome
    var nome = document.getElementById('nome').value;
    if (nome.length <= 5) {
        document.getElementById('nomeError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('nomeError').style.display = 'none';
    }
    
    // Validação do email
    var email = document.getElementById('email').value;
    if (!email.includes('@') || !email.includes('.com')) {
        document.getElementById('emailError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }
    
    // Validação da mensagem
    var mensagem = document.getElementById('mensagem').value;
    if (mensagem.split(' ').length <= 3) {
        document.getElementById('mensagemError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('mensagemError').style.display = 'none';
    }
    
    // Se não for válido, prevenir o envio do formulário
    if (!isValid) {
        event.preventDefault();
    }
});