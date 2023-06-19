// Typing Animation

let letter = 0;
const text = '     PAULO HENRIQUE';

function typeWriter() {
    if(letter < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(letter);
        letter++;
        setTimeout(typeWriter, 180)
    }
}

typeWriter();


// Menu Mobile

const navTogglerBtn = document.querySelector(".nav-toggler")

header = document.getElementById("header")
navTogglerBtn.addEventListener("click", () => {
    headerSectionTogglerBtn()
})
function headerSectionTogglerBtn(){
    header.classList.toggle("open")
    navTogglerBtn.classList.toggle("open")
}


// ------

// function redsocial(){
//     window.alert("[ERRO]! No momento esse botão não está funcionando")
// }