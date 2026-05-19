// WHATSAPP SHARE

document
.getElementById('shareBtn')
.addEventListener('click',()=>{

const url = window.location.href;

window.open(
`https://wa.me/?text=${encodeURIComponent(url)}`,
'_blank'
);

});

// COUNTDOWN TIMER

const target =
new Date("June 7, 2026 18:00:00").getTime();

const countdown =
document.getElementById('countdown');

setInterval(()=>{

const now =
new Date().getTime();

const diff =
target - now;

if(diff <= 0){

countdown.innerHTML =
"The Celebration Has Started";

return;
}

const days =
Math.floor(diff / (1000 * 60 * 60 * 24));

const hours =
Math.floor(
(diff % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

countdown.innerHTML =
`${days} Days • ${hours} Hours Remaining`;

},1000);

// SCROLL REVEAL

const reveals =
document.querySelectorAll('.reveal');

window.addEventListener('scroll',()=>{

reveals.forEach((el)=>{

const top =
el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

el.classList.add('active');

}

});

});

// INITIAL LOAD

window.addEventListener('load',()=>{

document
.querySelector('.content')
.classList.add('active');

});