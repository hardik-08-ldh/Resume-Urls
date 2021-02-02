
const copyBtn=[...document.getElementsByClassName('copy-btn')]


let previous=null

copyBtn.forEach(btn=> btn.addEventListener("click", ()=> {
    const url=btn.getAttribute('data-url')
    navigator.clipboard.writeText(url)
    btn.textContent='URL Copied To Clipboard'

    if (previous){
        previous.textContent="click to copy URL"
    }
    previous=btn
}))