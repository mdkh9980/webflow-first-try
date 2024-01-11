document.addEventListener("DOMContentLoaded", function(){
    const button = document.querySelector("#navBtn");
    // if(!button) return;
    button.addEventListener("click", function(){
    const heading = document.querySelector("#heading");
    if(!heading) return;
    heading.textContent = "Built by file";
    });
})
