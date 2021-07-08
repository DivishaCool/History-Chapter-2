function light(){
  btn=document.getElementById('mode');
body=document.querySelector('body');
btn.addEventListener('click',()=>{
  body.classList.toggle('color');
});
}

document.querySelector('#mode');