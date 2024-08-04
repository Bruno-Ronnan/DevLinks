function toggleMode(){
const html = document.documentElement
html.classList.toggle('light')

const img = document.querySelector("#profile img")

if(html.classList.contains('light')) {
//se tiver light mode, a imagem será adicionada aqui
img.setAttribute("src", "./assets/assets/avatar-light.png")
    } else {
//se o light mode estiver desligado, manter a imagem desligado
img.setAttribute("src", "./assets/assets/avatar.png")
    }
}
