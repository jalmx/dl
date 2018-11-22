const page = require('page');

((d) => {

    const toogleMenu = () => {
        const menu = d.querySelector('.nav__menu')
        menu.classList.toggle('active-menu')
    }

    const btMenu = d.getElementById('menu')
    btMenu.addEventListener('click', toogleMenu);

    const btBack = d.getElementById('back');
    btBack.addEventListener('click', (e) => {
        e.preventDefault();
        toogleMenu();
    });
})(document);

((d) => {
    const banner = d.querySelector('.banner')
    const path = '../assets/img/full/full-'
    let index = 1;
    setInterval(() => {
        banner.style.backgroundImage = `url(${path}${index}.png)`
        index++;
        if (index == 21) index = 1;
    }, 3000);
})(document);


// const index = (ctx) => {
//     const div = document.getElementById('mensaje');
//     div.innerHTML = "mensaje nuevo";
//     ctx.save();
// }
// const mensaje = (ctx) => {
//     const div = document.getElementById('mensaje');
//     div.innerText = "Prueba 2";
//     ctx.save();
// }

// page('/', index);
// page('/mensaje', mensaje);
// page();