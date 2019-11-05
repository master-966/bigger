var btn1_sm=document.querySelector('.btn1_sm');
var phone=document.querySelector('.phone');
var timer;
btn1_sm.onmouseenter=function(){
    timer=setTimeout(function(){
        phone.style.display='block';
    },500);
};
btn1_sm.onmouseleave=function(){
    clearTimeout(timer);
    phone.style.display='none';
};

var btn1=document.querySelector('.btn1');
var btn2=document.querySelector('.btn2');
var btn1_sm=document.querySelector('.btn1_sm');
var btn2_sm=document.querySelector('.btn2_sm');

btn1.onclick=function(){
    btn1.children[0].style.color='red';
    btn2.children[0].style.color='#666';
    btn1_sm.classList.add('active')
    btn2_sm.classList.remove('active')
};
btn2.onclick=function(){
    btn2.children[0].style.color='red';
    btn1.children[0].style.color='#666';
    btn2_sm.classList.add('active')
    btn1_sm.classList.remove('active')
};



