document
.getElementById('shareBtn')
.addEventListener('click',()=>{

const url=window.location.href;

window.open(
`https://wa.me/?text=${encodeURIComponent(url)}`,
'_blank'
);

});