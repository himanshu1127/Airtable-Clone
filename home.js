



document.querySelector(".product-button a").addEventListener("click", dispro)
document.querySelector(".solution-button a").addEventListener("click", dissol)
document.querySelector(".enterprise-button a").addEventListener("click", disent)
document.querySelector(".resourses-button a").addEventListener("click", disres)

let display = document.querySelector(".body");

function dispro() {
    display.classList.toggle("boom")
    document.querySelector(".products").classList.add("boom2")

}
function dissol() {
    display.classList.toggle("boom")
    document.querySelector(".solutions").classList.add("boom2")
}


function disent() {
    display.classList.toggle("boom")
    document.querySelector(".Enterprise").classList.add("boom2")
}


function disres() {
    display.classList.toggle("boom")
    document.querySelector(".Resources").classList.add("boom2")
}








function myfun() {
    display.classList.toggle("boom")
    document.querySelector(".solutions").classList.add("boom2")
}



