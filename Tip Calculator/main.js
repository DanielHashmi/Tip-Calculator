let amount = document.getElementsByClassName('billInp')[0]
let guestsInp = document.getElementsByClassName('guestsInp')[0]
let quality = document.getElementById('quality')
let btn = document.getElementsByClassName('btn')[0]
let ani = document.getElementsByClassName('ani')[0]
let para = document.getElementsByClassName('para')[0]

btn.addEventListener('click', () => {
    let equal = ((amount.value * quality.value) / (guestsInp.value)).toFixed(2);
    amount.value = ''
    guestsInp.value = ''
    quality.value = ''
    para.innerHTML = `Tip : ${equal}`
    ani.style.display ="block"
    setTimeout(()=>{
        ani.style.display ="none"
    },3000)
})