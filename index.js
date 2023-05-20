


const togl = document.querySelector('#mobile-menu')
const menyLinks = document.querySelector('.nav-menu')


togl.addEventListener('click' , function(){
   togl.classList.toggle('is-active')
   menyLinks.classList.toggle('active')
})


