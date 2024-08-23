

function changeTheme() {
    const e = document.documentElement
      , t = e.classList.contains("dark") ? "light" : "dark"
      , n = document.createElement("style");
    n.appendChild(document.createTextNode("* {\n           -webkit-transition: none !important;\n           -moz-transition: none !important;\n           -o-transition: none !important;\n           -ms-transition: none !important;\n           transition: none !important;\n        }")),
    document.head.appendChild(n),
    "dark" === t ? e.classList.add("dark") : e.classList.remove("dark"),
    window.getComputedStyle(n).opacity,
    document.head.removeChild(n),
    localStorage.theme = t
}
function preloadTheme() {
    const e = (()=>{
        const e = localStorage.theme;
        return "light" === e || "dark" === e ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    )()
      , t = document.documentElement;
    "dark" === e ? t.classList.add("dark") : t.classList.remove("dark"),
    localStorage.theme = e
}
window.onload = ()=>{
    function e() {
        const e = document.getElementById("header-theme-button")
          , t = document.getElementById("drawer-theme-button");
        e?.addEventListener("click", changeTheme),
        t?.addEventListener("click", changeTheme)
    }
    document.addEventListener("astro:after-swap", e),
    e()
}
,
document.addEventListener("astro:after-swap", preloadTheme),
preloadTheme();
