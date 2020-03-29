const MENU=document.getElementById('menu');
const TAGS=document.getElementById('tags');
const PORTFOLIO=document.getElementById('portfolio');
const PORT_IMG = document.getElementById('portfolio-img');
const FORM = document.getElementById('form');
const MODAL = document.getElementById('modal');
window.addEventListener('scroll', (event) => {
    const SECTIONS = document.querySelectorAll('section');
    const LINKS = document.querySelectorAll('.header a');
    let CurPos = window.scrollY+35;
    SECTIONS.forEach((el)=>{
        if(el.offsetTop <= CurPos && (el.offsetTop + el.offsetHeight)>CurPos){
            LINKS.forEach((el2)=>{
                el2.classList.remove('navigation_active');
                if(el.getAttribute('id')=== el2.getAttribute('href').substring(1)){
                    el2.classList.add('navigation_active');
                }
            })
        }
    });
});
MENU.addEventListener('click', (event) =>{
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('navigation_active'));
    event.target.classList.add('navigation_active');
});
document.querySelector('.header__burger').onclick = function(){
    document.querySelector('.header__burger-menu').style.display='flex';
    document.querySelectorAll('.header__burger')[1].style.transform='rotate(90deg)';
    console.log('1');
}
document.querySelectorAll('.header__burger')[1].onclick = function(){
    document.querySelector('.header__burger-menu').style.display='none';

}
let blackbox1=document.querySelector('#blackbox1');
document.querySelector('#clickarea1').onclick = function() {
    if(blackbox1.style.display=='none'||blackbox1.style.display==''){
        blackbox1.style.display='block';
    }
    else{
        blackbox1.style.display='none';
    }
}
blackbox1.onclick = function() {
    blackbox1.style.display='none';
}

let blackbox2=document.querySelector('#blackbox2');
document.querySelector('#clickarea2').onclick = function() {
    if(blackbox2.style.display=='none'||blackbox2.style.display==''){
        blackbox2.style.display='block';
    }
    else{
        blackbox2.style.display='none';
    }
}
blackbox2.onclick = function() {
    blackbox2.style.display='none';
}
let bannerWidth=document.querySelector(".banner__block").offsetWidth;
document.querySelector('.banner__next-arrow').onclick = function(){
    let banner_item=document.querySelector('.banner__items');
    if(banner_item.children[0].style.left==`-${bannerWidth}px`||banner_item.children[0].style.left==''){
        let counter = -bannerWidth;
        let interval = setInterval(() => {
            counter-=4;
            banner_item.children[0].style.left=`${counter}px`;
            banner_item.children[1].style.left=`${counter}px`;
            banner_item.children[2].style.left=`${counter}px`;

            if(parseInt(banner_item.children[0].style.left.slice(0, -2))<=-(bannerWidth*2)){
                banner_item.children[0].style.left=`${-(bannerWidth*2)}px`;
                banner_item.children[1].style.left=`${-(bannerWidth*2)}px`;
                banner_item.children[2].style.left=`${-(bannerWidth*2)}px`;
                clearInterval(interval);
                return;
            }
    }, 1);
    document.querySelector('.banner').style.backgroundColor='#648BF0';
    document.querySelector('.banner').style.borderBottom='7px solid #648BF0';
    }
    else if(banner_item.children[0].style.left==`${-(bannerWidth*2)}px`){
        let counter = 0;
        let interval = setInterval(() => {
            counter-=4;
            banner_item.children[0].style.left=`${counter}px`;
            banner_item.children[1].style.left=`${counter}px`;
            banner_item.children[2].style.left=`${counter}px`;
            if(parseInt(banner_item.children[0].style.left.slice(0, -2))<=-bannerWidth){
                banner_item.children[0].style.left=`${-bannerWidth}px`;
                banner_item.children[1].style.left=`${-bannerWidth}px`;
                banner_item.children[2].style.left=`${-bannerWidth}px`;
                clearInterval(interval);
                return;
            }
    }, 1);
    document.querySelector('.banner').style.backgroundColor='#F06C64';
    document.querySelector('.banner').style.borderBottom='7px solid #EA676B';
    }
    else if(banner_item.children[0].style.left=='0px'){
        let counter = 0;
        let interval = setInterval(() => {
            counter-=4;
            banner_item.children[0].style.left=`${counter}px`;
            banner_item.children[1].style.left=`${counter}px`;
            banner_item.children[2].style.left=`${counter}px`;
            if(parseInt(banner_item.children[0].style.left.slice(0, -2))<=-bannerWidth){
                banner_item.children[0].style.left=`${-bannerWidth}px`;
                banner_item.children[1].style.left=`${-bannerWidth}px`;
                banner_item.children[2].style.left=`${-bannerWidth}px`;
                clearInterval(interval);
                return;
            }
    }, 1);
    document.querySelector('.banner').style.backgroundColor='#F06C64';
    document.querySelector('.banner').style.borderBottom='7px solid #F06C64';
    }
}

document.querySelector('.banner__prev-arrow').onclick = function(){
    let banner_item=document.querySelector('.banner__items');
    if(banner_item.children[0].style.left==`${-bannerWidth}px`||banner_item.children[0].style.left==''){
        let counter = -bannerWidth;
        let interval = setInterval(() => {
            counter+=4;
            banner_item.children[0].style.left=`${counter}px`;
            banner_item.children[1].style.left=`${counter}px`;
            banner_item.children[2].style.left=`${counter}px`;
            if(parseInt(banner_item.children[0].style.left.slice(0, -2))>=0){
                banner_item.children[0].style.left=`${0}px`;
                banner_item.children[1].style.left=`${0}px`;
                banner_item.children[2].style.left=`${0}px`;
                clearInterval(interval);
                return;
            }
    }, 1);
    document.querySelector('.banner').style.backgroundColor='#648BF0';
    document.querySelector('.banner').style.borderBottom='7px solid #648BF0';
    }
    else if(banner_item.children[0].style.left==`${-(bannerWidth*2)}px`){
        let counter = -bannerWidth*2;
        let interval = setInterval(() => {
            counter+=4;
            banner_item.children[0].style.left=`${counter}px`;
            banner_item.children[1].style.left=`${counter}px`;
            banner_item.children[2].style.left=`${counter}px`;
            if(parseInt(banner_item.children[0].style.left.slice(0, -2))>=-bannerWidth){
                banner_item.children[0].style.left=`${-bannerWidth}px`;
                banner_item.children[1].style.left=`${-bannerWidth}px`;
                banner_item.children[2].style.left=`${-bannerWidth}px`;
                clearInterval(interval);
                return;
            }
    }, 1);
    document.querySelector('.banner').style.backgroundColor='#F06C64';
    document.querySelector('.banner').style.borderBottom='7px solid #EA676B';
    }
    else if(banner_item.children[0].style.left=='0px'){
        let counter = -(bannerWidth*2);
        let interval = setInterval(() => {
            counter+=4;
            banner_item.children[0].style.left=`${counter}px`;
            banner_item.children[1].style.left=`${counter}px`;
            banner_item.children[2].style.left=`${counter}px`;
            if(parseInt(banner_item.children[0].style.left.slice(0, -2))>=-bannerWidth){
                banner_item.children[0].style.left=`${-bannerWidth}px`;
                banner_item.children[1].style.left=`${-bannerWidth}px`;
                banner_item.children[2].style.left=`${-bannerWidth}px`;
                clearInterval(interval);
                return;
            }
    }, 1);
    document.querySelector('.banner').style.backgroundColor='#F06C64';
    document.querySelector('.banner').style.borderBottom='7px solid #F06C64';
    }
}
TAGS.addEventListener('click', (event)=>{
    if(event.target.tagName=='BUTTON'){
        TAGS.querySelectorAll('button').forEach(el => el.classList.remove('tag_selected'));
        event.target.classList.add('tag_selected');

        let aa = Array.from(PORTFOLIO.querySelectorAll('article'));
        let cc = aa.splice(11,1);
        aa.forEach(el =>{
            document.querySelector('#portfolio-img').append(el);
        });
}
});
PORT_IMG.addEventListener('click', (event)=>{
    if(event.target.style.outline=='rgb(240, 108, 100) solid 5px'){
        event.target.style.outline='';
    }
    else if(event.target.classList.contains('portfolio__image')){
        PORT_IMG.querySelectorAll('img').forEach(el => el.style.outline='');
        event.target.style.outline = '5px solid #F06C64';
        event.target.style.outlineOffset = '-5px';
    }
});
const messageBlock = document.querySelector('.message-block');
const message = messageBlock.querySelector('.message')
const form = document.querySelector('form');
const closeButton = document.querySelector('.close-btn');
const textar = form.querySelector('.input-area');
const subject = form.querySelector('.input-text');
form.onsubmit = (event) => {
    event.preventDefault();
    messageBlock.classList.remove('hidden');

    if (subject.value !== '') {
        message.querySelector('.tema').textContent = subject.value;
    } else {
        message.querySelector('.topic_of').textContent = 'Без темы';
    }
    if (textar.value !== '') {
        message.querySelector('.description').textContent = textar.value;
    } else {
        message.querySelector('.description_of').textContent = 'Без описания';
    }

    closeButton.onclick = () => {
        messageBlock.classList.add('hidden');
        textar.value = '';
        subject.value = '';
        form.querySelector('.input-name').value = '';
        form.querySelector('.input-mail').value = '';
    }
}
