function scrool() {
    var image = document.querySelector('.subject');
    var introPosition = image.getBoundingClientRect().top;
    var screenPosition = window.innerHeight ;

    if(introPosition < screenPosition) {
        image.classList.add('item-animation');
    }
}

window.addEventListener('scroll', scrool);