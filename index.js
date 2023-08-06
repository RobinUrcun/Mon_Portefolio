const button_up = document.querySelector(".button_up")
const nav_bar = document.querySelector(".top_navbar")
const footer_telephone = document.querySelector(".footer_telephone")
const footer_li_telephone = document.querySelector(".footer_li_telephone")
const footer_enveloppe = document.querySelector(".footer_enveloppe")
const footer_li_enveloppe = document.querySelector(".footer_li_enveloppe")
let btnRadio = document.querySelectorAll("input[type=radio]")
const sectionEtudes = document.getElementById("section_etudes")
const sectionExperiences = document.getElementById("section_experiences")
const label_etudes = document.getElementById("label_etudes")
const label_experiences = document.getElementById("label_experiences")
let li_navbar = document.querySelectorAll(".top_navbar ul li")
const competences_card = document.getElementsByClassName("competences_card")
const card = document.getElementsByClassName("card")


for(let i = 0; i < li_navbar.length; i++){
    li_navbar[i].addEventListener("mouseenter", () => {
        li_navbar[i].style.transform = "scale(1.1)"
    })
}
for(let i = 0; i < li_navbar.length; i++){
    li_navbar[i].addEventListener("mouseleave", () => {
        li_navbar[i].style.transform = "scale(1)"
    })
}

button_up.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
window.addEventListener("scroll", (e) =>{
    if ( window.scrollY > 200){
        button_up.style.bottom = "30px";  
        nav_bar.style.top = "-50px"
    }
    else{
        button_up.style.bottom = "-80px";  
        nav_bar.style.top = "0px"
    }
})

for (let index = 0; index < btnRadio.length; index++){
    btnRadio[index].addEventListener("change", (e) =>{
        if(e.target.value == 2){
            sectionEtudes.style.display = "none"
            sectionExperiences.style.display = "block"
            label_experiences.style.border = "4px inset #dddddd"
            label_etudes.style.border = "4px outset #dddddd"

        }else{
            sectionEtudes.style.display = "block"
            sectionExperiences.style.display = "none"
            label_etudes.style.border = "4px inset #dddddd"
            label_experiences.style.border = "4px outset #dddddd"


        }
    })
}

// EFFET CARDS //

for(let i = 0; i < competences_card.length; i++){
    competences_card[i].addEventListener("mouseenter", () => {
        card[i].style.transform = "rotateY(180deg)"
    })
}
for(let i = 0; i < competences_card.length; i++){
    competences_card[i].addEventListener("mouseleave", () => {
        card[i].style.transform = "rotateY(0)"
    })
}