const button_up = document.querySelector(".button_up")
const nav_bar = document.querySelector(".top_navbar")
const block_menu_deroulant = document.querySelector(".block_menu_deroulant")
const main = document.querySelector("main")
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
const text_etudes = document.querySelectorAll("#label_etudes span")
const text_experiences = document.querySelectorAll("#label_experiences span")
const btn_full_effect_etudes = document.querySelector("#label_etudes .btn_full_effect")
const btn_full_effect_experiences = document.querySelector("#label_experiences .btn_full_effect")
const btn_shadow_etudes = document.querySelector("#label_etudes .label_btn_shadow")
const btn_shadow_experiences = document.querySelector("#label_experiences .label_btn_shadow")
const box_effet_telephone = document.getElementById("box_effet_telephone")
const effet_telephone = document.getElementById("effet_telephone")
const effet_telephone_img = document.getElementById("effet_telephone_img")
const homepage_card = document.querySelectorAll(".homepage_section_menu a")
const contact_lettres = document.getElementsByClassName("lettre_delay")
const formulaire = document.querySelector("form")
const zone_saisie_contenu = document.querySelectorAll(".zone_saisie input")

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

block_menu_deroulant.addEventListener("click", () =>{
    block_menu_deroulant.style.display = "none"
    nav_bar.style.left = "0"
    main.style.filter = "blur(2px)"
})
if(window.matchMedia("(max-width: 800px)").matches){
    window.addEventListener("scroll", (e) =>{
        if ( window.scrollY > 200){
            button_up.style.bottom = "30px";  
        }
        else{
            button_up.style.bottom = "-80px";  
        }
    })
    main.addEventListener("click", () =>{
        block_menu_deroulant.style.display = "block"
        nav_bar.style.left = "-50%"
        main.style.filter = "none"
    
    })
    
}
else{
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


}


for (let index = 0; index < btnRadio.length; index++){
    btnRadio[index].addEventListener("change", (e) =>{
        if(e.target.value == 2){
            sectionEtudes.style.display = "none"
            sectionExperiences.style.display = "block"
            label_experiences.classList.toggle("label_box_fin_annimation")
            label_etudes.classList.toggle("label_box_fin_annimation")
            btn_full_effect_experiences.style.opacity = "1"
            btn_full_effect_etudes.style.opacity = "0"
            btn_shadow_experiences.style.opacity = "1"
            btn_shadow_etudes.style.opacity = "0.7"
            for (let i = 0; i < text_experiences.length; i++){
                text_experiences[i].classList.toggle("text_end_flash_blue")
            }
            for (let i = 0; i < text_etudes.length; i++){
                text_etudes[i].classList.toggle("text_end_flash_blue")
            }


        }else{
            sectionEtudes.style.display = "block"
            sectionExperiences.style.display = "none"
            label_experiences.classList.toggle("label_box_fin_annimation")
            label_etudes.classList.toggle("label_box_fin_annimation")
            for (let i = 0; i < text_etudes.length; i++){
                text_etudes[i].classList.toggle("text_end_flash_blue")
            }
            for (let i = 0; i < text_experiences.length; i++){
                text_experiences[i].classList.toggle("text_end_flash_blue")
                
            }
            btn_full_effect_experiences.style.opacity = "0"
            btn_full_effect_etudes.style.opacity = "1"
            btn_shadow_experiences.style.opacity = "0.7"
            btn_shadow_etudes.style.opacity = "1"
        }
    })
}

// EFFET CARDS PAGE 

        // HOMEPAGE

for (let i=0; i<homepage_card.length;i++){
    homepage_card[i].addEventListener("mouseenter",() => {
        homepage_card[i].classList.add("homepage_card_effet")
    })
}
for (let i=0; i<homepage_card.length;i++){
    homepage_card[i].addEventListener("mouseleave",() => {
        homepage_card[i].classList.remove("homepage_card_effet")
    })
}

        // PAGE COMPETENCES
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

// EFFET TELEPHONE FOOTER //

effet_telephone.addEventListener("mouseenter", () => {
    effet_telephone_img.style.transform ="scale(0)"
    box_effet_telephone.style.transform ="scale(1)"
    box_effet_telephone.style.opacity ="1"


})

effet_telephone.addEventListener("mouseleave", () => {
    effet_telephone_img.style.transform ="scale(1)"
    box_effet_telephone.style.transform ="scale(0)"
})

// EFFET DECALAGE LETTRE CONTACT //

for (let i = 0; i < contact_lettres.length; i++){
    let delay = 0.15 * i;
    contact_lettres[i].style.animationDelay = `${delay}s`
}

// PAGE CONTACT //

if(window.matchMedia("(max-width: 800px)").matches){
    for ( let i = 0; i < zone_saisie_contenu.length; i++){
        zone_saisie_contenu[i].addEventListener('keydown', () =>{
            let string_number = zone_saisie_contenu[i].value.length
            console.log(string_number);
            let calc_width = (string_number + 1) * 10
            zone_saisie_contenu[i].style.width = `${calc_width}px`
        })
        
    }
}
else{
    for ( let i = 0; i < zone_saisie_contenu.length; i++){
        zone_saisie_contenu[i].addEventListener('keydown', () =>{
            let string_number = zone_saisie_contenu[i].value.length
            console.log(string_number);
            let calc_width = (string_number + 1) * 25
            zone_saisie_contenu[i].style.width = `${calc_width}px`
        })
        
    }
    
}
formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
});