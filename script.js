const wrapper = document.querySelector('.wrapper');
const login = document.querySelector('.login-link');
const btn = document.querySelector('.login');
const register = document.querySelector('.register-link');
const close = document.querySelector('.icon-close');

register.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

login.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});
btn.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});
close.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});
