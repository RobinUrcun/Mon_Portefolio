
const formulaire = document.querySelector("form")


formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    }
)

form_button.addEventListener("mouseenter", () => {
    form_button.style.transform = "scale(1.2)"
})
form_button.addEventListener("mouseleave", () => {
    form_button.style.transform = "scale(1)"
})