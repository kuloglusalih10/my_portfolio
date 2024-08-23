function onScroll() {
    const l = document.getElementById("header");
    window.scrollY > 0 ? l.classList.add("scrolled") : l.classList.remove("scrolled")
}
document.addEventListener("scroll", onScroll);
console.log('scroll js')