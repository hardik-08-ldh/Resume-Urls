
const copyBtn=[...document.getElementsByClassName('copy-btn')]


let previous=null

copyBtn.forEach(btn=> btn.addEventListener("click", ()=> {
    const url=btn.getAttribute('data-url')
    navigator.clipboard.writeText(url)
    btn.textContent='Copied!!!'

    if (previous){
        previous.textContent="click"
    }
    previous=btn
}))