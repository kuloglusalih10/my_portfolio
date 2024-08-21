function animate() {
    document.querySelectorAll(".animate").forEach(((e,t)=>{
        setTimeout((()=>{
            e.classList.add("show")
        }
        ), 150 * t)
    }
    ))
}
document.addEventListener("DOMContentLoaded", animate),
document.addEventListener("astro:after-swap", animate);
