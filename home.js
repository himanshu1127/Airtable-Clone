let logoname = document.querySelector(".Brandname")
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        logoname.classList.add("scrolled")
    } else {
        logoname.classList.remove("scrolled")
    }
});