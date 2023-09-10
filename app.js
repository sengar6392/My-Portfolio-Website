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


// Adding
let skillIcons=document.querySelectorAll(".skill-icons i")
skillIcons.forEach(icon=>{
    icon.style.color = getRandomColor();
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
    let card=generateProjectCard(project)
    
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
function generateProjectCard(project){
    const{image,title,description,url,netlifyLink,githubLink}=project
    let card=document.createElement("div")
    card.className="project card"
    card.innerHTML=/*html*/`
        <img src="${image}" alt="${title}">
        <div class="content">
            <h3 class="tertiary-heading title">${title}</h3>
            <p class="description sub-heading">${description}</p>
            <div class="btn-section">
                <div class="btn-container">
                    <div class="btn"><a href=${githubLink} target="_blank">GitHub</a></div>
                </div>
                <div class="btn-container">
                    <div class="btn"><a href=${netlifyLink} target="_blank">Demo</a></div>
                </div>
            </div>
        </div>
    `

    return card
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }