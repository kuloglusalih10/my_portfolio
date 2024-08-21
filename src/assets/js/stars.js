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
    t = generateParticles(500)
    n = generateParticles(250)
    a = document.getElementById("particles1")
    i = document.getElementById("particles2")
    r = document.getElementById("particles3");

    
    a && (a.style.cssText = `\n      width: 1px;\n      height: 1px;\n      border-radius: 50%;\n      box-shadow: ${e};\n      animation: animStar 50s linear infinite;\n      `),
    i && (i.style.cssText = `\n      width: 1.5px;\n      height: 1.5px;\n      border-radius: 50%;\n      box-shadow: ${t};\n      animation: animateParticle 100s linear infinite;\n      `),
    r && (r.style.cssText = `\n      width: 2px;\n      height: 2px;\n      border-radius: 50%;\n      box-shadow: ${n};\n      animation: animateParticle 150s linear infinite;\n      `);
    const s = generateStars(1e3)
      , d = generateStars(500)
      , o = generateStars(250)
      , x = document.getElementById("stars1")
      , g = document.getElementById("stars2")
      , l = document.getElementById("stars3");
    x && (x.style.cssText = `\n      width: 1px;\n      height: 1px;\n      border-radius: 50%;\n      box-shadow: ${s};\n      `),
    g && (g.style.cssText = `\n      width: 1.5px;\n      height: 1.5px;\n      border-radius: 50%;\n      box-shadow: ${d};\n      `),
    l && (l.style.cssText = `\n      width: 2px;\n      height: 2px;\n      border-radius: 50%;\n      box-shadow: ${o};\n      `)
}

