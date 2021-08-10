console.log('js File Connected...');

const show = () => {
    $('.menuIcon').toggleClass('open');
    if ($('.menuIcon').toggleClass('open')) {
        $('.resNav').slideDown();
    } else {
        $('.resNav').slideUp();
    }
}  