const slide = document.querySelector(".slide");
const vid = document.querySelector(".vid");

const button = document.querySelector(".button").addEventListener("click", ()=>{
    if(slide.classList.contains("slide-switch")){
        slide.classList.remove("slide-switch")
        vid.play();
    }
    else{
        slide.classList.add("slide-switch")
        vid.pause();
    }
})