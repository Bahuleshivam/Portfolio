const hamburger = document.getElementById("hamburger")
const expand = document.getElementById("expand")


function hamburg() {
    expand.classList.toggle('active')

    if (expand.style.display === "none") {
        expand.style.display = "flex";
    } else {
        expand.style.display = "none";
    }
}


