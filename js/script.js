const buttonArray = document.querySelectorAll("button");

function toggleButtonAria(t) {
    t.addEventListener("click", () => {
        t.getAttribute("aria-expanded") === "true"
            ? t.setAttribute("aria-expanded", "false")
            : t.setAttribute("aria-expanded", "true");
    });
}

buttonArray.forEach(toggleButtonAria);

window.onscroll = function () {
    myFunction();
};

var header = document.getElementById("sticky-navbar");
var sticky = header.offsetTop;

function myFunction() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

document.querySelectorAll(".accordian-header").forEach(t => {
    t.addEventListener("click", e => {
        t.parentElement.classList.toggle("active");
    });
});
