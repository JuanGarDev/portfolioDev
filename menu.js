
const toggle = document.getElementById('modo');
const body = document.querySelector('body');
const tarjeta = document.querySelector('#backend');
const tarjeta2 = document.querySelector('#frontend');

toggle.addEventListener('click', function(){
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')){
        body.style.background = 'linear-gradient(30deg, #00c8f5 0%, #3a47d5 100%)';
        body.style.transition = '4s';
        tarjeta.style.background = 'white';
        tarjeta.style.color = 'black';
        tarjeta2.style.background = 'white';
        tarjeta2.style.color = 'black';
    }else{
        body.style.background = 'linear-gradient(30deg, #1C2266 0%, #0c0f2d 100%)';
        body.style.transition = '4s';
        tarjeta.style.background = '#21287A';
        tarjeta.style.color = 'white';
        tarjeta2.style.background = '#21287A';
        tarjeta2.style.color = 'white';
    }
});