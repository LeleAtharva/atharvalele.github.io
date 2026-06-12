const words = [
    "Software Engineer",
    "Backend Developer",
    "AI Engineer",
    "FastAPI Developer",
    "IIOT Engineer"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect(){

    currentWord = words[i];

    if(!isDeleting){
        document.getElementById("typing").textContent =
            currentWord.substring(0,j++);
    }else{
        document.getElementById("typing").textContent =
            currentWord.substring(0,j--);
    }

    if(j === currentWord.length + 1){
        isDeleting = true;
        setTimeout(typeEffect,1200);
        return;
    }

    if(j === 0){
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(typeEffect,isDeleting ? 60 : 120);
}

typeEffect();

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll(".card,.skill-card,.project-card,.timeline-item")
.forEach(el=>{

el.classList.add("hidden");
observer.observe(el);

});
