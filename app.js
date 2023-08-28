import { data } from "./data.js"

let controls=document.querySelectorAll(".control")
let allSections=document.querySelectorAll(".section")

// Adding events to nav links*****************************************************************************************************
let navLinks=document.querySelectorAll(".nav-links ul li")
navLinks.forEach(navLink=>{
    navLink.addEventListener("click",()=>{
        let targetId=navLink.getAttribute("data-id")
        let targetSection=document.getElementById(targetId)
        targetSection.scrollIntoView({ behavior: "smooth" })
    })
})


// Adding events to controls*********************************************************************************************
controls.forEach(control=>{
    control.addEventListener("click",()=>{
        controls.forEach(control=>{
            control.classList.remove("active-btn")
        })
        control.classList.add("active-btn")
        let targetId=control.getAttribute("data-id")
        // 
        let targetSection=document.getElementById(targetId)
        // 
        targetSection.scrollIntoView({ behavior: "smooth" })
    })
})




// Adding skills************************************************************************************************
data.skills.forEach(skill=>{
    const {name,icon}=skill
    let card=generateSkillCard(name,icon)
    // 
    let skillContainer=document.querySelector(".skill-container")
    skillContainer.append(card)
})

// Adding projects**********************************************************************************************
data.projects.forEach(project=>{
    const{image,title,description,url}=project
    let card=generateProjectCard(image,title,description,url)
    
    document.querySelector(".projects-container").append(card)
})


// Utility funtions*******************************************************************************************

function generateSkillCard(name,icon){
    let card=document.createElement("div")
    card.className="skill card"
    card.id=name
    card.innerHTML=/*html*/`
        <i class="${icon}"></i>
        <p>${name}</p>
    `
    return card
}
function generateProjectCard(image,title,description,url){
    let card=document.createElement("div")
    card.className="project card"
    card.innerHTML=/*html*/`
        <img src="${url}" alt="${title}">
        <div class="content">
            <h3 class="tertiary-heading title">${title}</h3>
            <p class="description sub-heading">${description}</p>
        </div>
        <div class="btn-container">
            <div class="btn"><a href=${url}>Demo</a></div>
        </div>
    `
    return card
}