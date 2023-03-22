
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
        body.style.background = 'linear-gradient(30deg, #141847 0%, #070919 100%)';
        body.style.transition = '4s';
        tarjeta.style.background = '#1A2061';
        tarjeta.style.color = 'white';
        tarjeta2.style.background = '#1A2061';
        tarjeta2.style.color = 'white';
    }
});