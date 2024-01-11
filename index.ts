import gsap from "gsap";

document.addEventListener("DOMContentLoaded", function(){
    const button = document.querySelector("#navBtn");
    if(!button) return;
    button.addEventListener("click", function(){
    const heading = document.querySelector("#heading");
    if(!heading) return;
    heading.textContent = "Built by file";
    gsap.to("#heading", {
        x:300,
        duration:3,
        delay:1
    })
    });
})
