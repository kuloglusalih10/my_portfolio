function generateParticles(e) {
    let t = `${getRandom(2560)}px ${getRandom(2560)}px #000`;
    for (let n = 2; n <= e; n++)
        t += `, ${getRandom(2560)}px ${getRandom(2560)}px #000`;
    return t
}
function generateStars(e) {
    let t = `${getRandom(2560)}px ${getRandom(2560)}px #fff`;
    for (let n = 2; n <= e; n++)
        t += `, ${getRandom(2560)}px ${getRandom(2560)}px #fff`;
    return t
}
function getRandom(e) {
    return Math.floor(Math.random() * e)
}
export const initBg = () => {

    console.log('Merhaba initBG');
    const e = generateParticles(1e3)
    let t = generateParticles(500)
    let n = generateParticles(250)
    let a = document.getElementById("particles1")
    let i = document.getElementById("particles2")
    let r = document.getElementById("particles3");

    
    a && (a.style.cssText = `\n      width: 1px;\n      height: 1px;\n      border-radius: 50%;\n      box-shadow: ${e};\n      animation: animStar 50s linear infinite;\n      `),
    i && (i.style.cssText = `\n      width: 1.5px;\n      height: 1.5px;\n      border-radius: 50%;\n      box-shadow: ${t};\n      animation: animateParticle 100s linear infinite;\n      `),
    r && (r.style.cssText = `\n      width: 2px;\n      height: 2px;\n      border-radius: 50%;\n      box-shadow: ${n};\n      animation: animateParticle 150s linear infinite;\n      `);
    const s = generateStars(1e3)
      let d = generateStars(500)
      let o = generateStars(250)
      let x = document.getElementById("stars1")
      let g = document.getElementById("stars2")
      let l = document.getElementById("stars3");
    x && (x.style.cssText = `\n      width: 1px;\n      height: 1px;\n      border-radius: 50%;\n      box-shadow: ${s};\n      `),
    g && (g.style.cssText = `\n      width: 1.5px;\n      height: 1.5px;\n      border-radius: 50%;\n      box-shadow: ${d};\n      `),
    l && (l.style.cssText = `\n      width: 2px;\n      height: 2px;\n      border-radius: 50%;\n      box-shadow: ${o};\n      `)
}

