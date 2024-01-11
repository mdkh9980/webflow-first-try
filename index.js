document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector("#navBtn");
    // if(!button) return;
    button.addEventListener("click", function () {
        var heading = document.querySelector("#heading");
        if (!heading)
            return;
        heading.textContent = "Built With TSC";
    });
});
