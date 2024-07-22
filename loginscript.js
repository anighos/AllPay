const wrap = document.querySelector('.wrap');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
registerlink.addEventListener('click', ()=>{
    wrap.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wrap.classList.remove('active');
});
/*btnPopup.addEventListener('click', ()=>{
    wrap.classList.add('active-popup');
});*/
document.getElementById("button").addEventListener("click",function(){
    document.querySelector(".wrap").computedStyleMap.display ="flex";
})