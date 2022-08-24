(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
    
    
})();

document.querySelectorAll(".view-resume").forEach(ele => {
    ele.addEventListener("click", function() {
        document.querySelectorAll(".control").forEach(button => {

            document.querySelector(".active-btn").classList.remove("active-btn");
            document.getElementsByClassName("ctrl-res")[0].classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById("resume").classList.add("active");
        })
    })
});