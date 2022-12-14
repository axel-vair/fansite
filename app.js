// Déclaration des variables et pointeur vers les classes
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Ajout d'un addEventListener on click qui rajoutera la classe active au toggle. On ouvre la fenêtre.
hamburger.addEventListener("click" , () => { 
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// Pour chaque lien, à chaque fois que l'on clique, on enlève la classe active. On ferme la fenêtre.
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>
{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))



document.addEventListener('scroll', () => 
{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})


// Ajout d'une fenêtre splash qui va s'ouvrir durant 2 secs.
const splash = document.querySelector('.splash');
document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(() => {
        splash.classList.add('display-none');
    }, 2000); 
})