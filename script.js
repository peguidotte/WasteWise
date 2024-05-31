//Caso o usuário não mexa o mouse por 3segundos o Header desaparece, porém caso o usuário ainda não tenha scrollado a página isso não acontecerá
let timer;

document.addEventListener('mousemove', function() {
    clearTimeout(timer);

    if (window.scrollY > 0) {
        document.querySelector('header').classList.remove('hide');

        timer = setTimeout(function() {
            document.querySelector('header').classList.add('hide');
        }, 3000);
    }
});

window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
        document.querySelector('header').classList.remove('hide');
    }
});