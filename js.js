const hamburguer = document.getElementById("hamburguer");
const content = document.getElementById("content");
const close = document.getElementById("close")

hamburguer.addEventListener("click", () => {
    content.style.display = "flex"
    hamburguer.style.display = "none"
})

close.addEventListener("click", () => {
    content.style.display = "none"
    hamburguer.style.display = "flex"
})