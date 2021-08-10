console.log('js File Connected...');

const show = () => {
    $('.resNav').slideDown();
    $('.menuIcon').toggleClass('open');
    $('.open').on('click', () => {
        $('.resNav').slideUp();
    })
}  