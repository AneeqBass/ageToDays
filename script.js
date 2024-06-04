let age = document.querySelector('#age')
let days = document.querySelector('#days')
let convertBtn = document.querySelector('#convert')

convertBtn.addEventListener('click', ()=>{
    days.innerHTML = age.value * 365
})