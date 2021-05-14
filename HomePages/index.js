const portfolioitems = document.querySelectorAll('.portfolio-item-wrapper');

portfolioitems.forEach(portfolioitem => {
    portfolioitem.addEventListener('mouseover', () => {
        portfolioitem.childNodes[1].classList.add('img-overlay');
    });

    portfolioitem.addEventListener('mouseout', () => {
        portfolioitem.childNodes[1].classList.remove('img-overlay');
    });
});