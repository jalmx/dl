import suma from './modules/suma'
;
((d)=>{

    const toogleMenu = ()=>{
        const menu = d.querySelector('.nav__menu')
        menu.classList.toggle('active-menu')
    }

    const btMenu = d.getElementById('menu')
    btMenu.addEventListener('click', toogleMenu);

    const btBack = d.getElementById('back');
    btBack.addEventListener('click',(e)=>{
        e.preventDefault();
        toogleMenu();
    });

    
    
})(document);

((d) => {
    const banner = d.querySelector('.banner')
    const path = '../assets/img/full/full-'
    
    let index = 1;
    setInterval(()=>{
      banner.style.backgroundImage = `url(${path}${index}.png)`
      index++;

      if(index == 21) index = 1;
  
    },3000);
  })(document);

  (()=>{
      console.log(suma(5,9));
      
  })();