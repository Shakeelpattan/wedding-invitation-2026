// OPEN INVITATION

function openInvitation(){

document
.getElementById('hero')
.classList.add('exit');

setTimeout(()=>{

document
.getElementById('hero')
.style.display='none';

document
.getElementById('invitation')
.classList.add('show');

window.scrollTo(0,0);

},1000);

}

// COUNTDOWN

const target =
new Date("June 7, 2026 18:00:00").getTime();

function updateCountdown(){

const now =
new Date().getTime();

const diff =
target - now;

if(diff <= 0)return;

document.getElementById('days').textContent =
Math.floor(diff/(1000*60*60*24));

document.getElementById('hours').textContent =
Math.floor(
(diff%(1000*60*60*24))
/
(1000*60*60)
);

document.getElementById('minutes').textContent =
Math.floor(
(diff%(1000*60*60))
/
(1000*60)
);

document.getElementById('seconds').textContent =
Math.floor(
(diff%(1000*60))
/
1000
);

}

setInterval(updateCountdown,1000);

updateCountdown();

// PROGRESS BAR

window.addEventListener('scroll',()=>{

const scrollTop =
window.scrollY;

const height =
document.documentElement.scrollHeight
-
window.innerHeight;

const progress =
(scrollTop/height)*100;

document
.getElementById('progress-bar')
.style.width =
progress + '%';

});

// REVEAL

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

// PARTICLES

const canvas =
document.getElementById('particles-canvas');

const ctx =
canvas.getContext('2d');

function resizeCanvas(){

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}

resizeCanvas();

window.addEventListener(
'resize',
resizeCanvas
);

const particles = [];

for(let i=0;i<45;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*2.5+1,

dx:(Math.random()-.5)*0.35,

dy:(Math.random()-.5)*0.35,

a:Math.random()*0.5+0.1

});

}

function animate(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

particles.forEach(p=>{

p.x += p.dx;
p.y += p.dy;

if(
p.x < 0 ||
p.x > canvas.width
) p.dx *= -1;

if(
p.y < 0 ||
p.y > canvas.height
) p.dy *= -1;

ctx.beginPath();

ctx.arc(
p.x,
p.y,
p.r,
0,
Math.PI*2
);

ctx.fillStyle =
`rgba(201,168,76,${p.a})`;

ctx.fill();

});

requestAnimationFrame(animate);

}

animate();