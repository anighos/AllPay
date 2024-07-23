const wrap = document.querySelector('.wrap');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.login');
const iconClose = document.querySelector('.iconclose');
registerlink.addEventListener('click', ()=>{
    wrap.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wrap.classList.remove('active');
});
btnPopup.addEventListener('click', ()=>{
    wrap.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=>{
    wrap.classList.remove('active-popup');
});
