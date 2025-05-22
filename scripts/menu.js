const menu = document.querySelector("[data-menu]")
const menuClose = document.querySelector("[data-menuClose]")
const menuOpen = document.querySelector("[data-menuOpen]")

menuOpen.addEventListener("click", () => {
    menu.classList.add("unhide")
})

menuClose.addEventListener("click", () => {
    menu.classList.remove("unhide")
})