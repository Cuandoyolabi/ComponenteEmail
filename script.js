const subscribe__btn = document.querySelector('.input__subscribe');
const principal__container = document.querySelector('.container__principal__information');
const container__thankYou = document.querySelector('.container__thanks__subscribing');
const container__thankYou__span = document.querySelector('.container__thanks__subscribing__span');


function validateEmail(email){
    const emailInput = document.querySelector('.input__email');
    const emailError = document.querySelector('.bottons__spanError');
        
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(emailInput.value === "" || emailInput.value != pattern){
        emailError.textContent = "Valid email required";
        emailInput.style.borderColor = "var(--Orange)";
        emailInput.style.color = "var(--Orange)";
        
    } if (emailInput.value.match(pattern)){
        principal__container.classList.add('hidden');
        container__thankYou.classList.add('showed');
    }
};   
               
subscribe__btn.addEventListener('click', ()=>{
    validateEmail();
});
