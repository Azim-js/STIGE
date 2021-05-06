
const menuButton=document.querySelector('.toggle');
const view=document.querySelector('.view');

menuButton.addEventListener('click',()=>{
menuButton.classList.toggle('active');
view.classList.toggle('active');
})

