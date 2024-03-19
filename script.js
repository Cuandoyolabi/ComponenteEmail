const subscribe__btn = document.querySelector('.input__subscribe');
const principal__container = document.querySelector('.container__principal__information');
const container__thankYou = document.querySelector('.container__thanks__subscribing');

const container__thankYou__span = document.querySelector('.container__thanks__subscribing__span');


subscribe__btn.addEventListener('click', ()=>{
    principal__container.classList.add('hidden');
    container__thankYou.classList.add('showed');
})

function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

