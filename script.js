let fn = Math.floor(Math.random() * 6) + 1;
console.log(fn)

if (fn == 1) {
    let a = document.getElementsByClassName("img1")[0]
    a.setAttribute("src", `./images/dice1.png`)
}
if (fn == 2) {
    let a = document.getElementsByClassName("img1")[0]
    a.setAttribute("src", `./images/dice2.png`)
}
if (fn == 3) {
    let a = document.getElementsByClassName("img1")[0]
    a.setAttribute("src", `./images/dice3.png`)
}
if (fn == 4) {
    let a = document.getElementsByClassName("img1")[0]
    a.setAttribute("src", `./images/dice4.png`)
}
if (fn == 5) {
    let a = document.getElementsByClassName("img1")[0]
    a.setAttribute("src", `./images/dice5.png`)
}
if (fn == 6) {
    let a = document.getElementsByClassName("img1")[0]
    a.setAttribute("src", `./images/dice6.png`)
}



let sn = Math.floor(Math.random() * 6) + 1;
console.log(sn)

if (sn == 1) {
    let a = document.getElementsByClassName("img2")[0]
    a.setAttribute("src", `./images/dice1.png`)
}
if (sn == 2) {
    let a = document.getElementsByClassName("img2")[0]
    a.setAttribute("src", `./images/dice2.png`)
}
if (sn == 3) {
    let a = document.getElementsByClassName("img2")[0]
    a.setAttribute("src", `./images/dice3.png`)
}
if (sn == 4) {
    let a = document.getElementsByClassName("img2")[0]
    a.setAttribute("src", `./images/dice4.png`)
}
if (sn == 5) {
    let a = document.getElementsByClassName("img2")[0]
    a.setAttribute("src", `./images/dice5.png`)
}
if (sn == 6) {
    let a = document.getElementsByClassName("img2")[0]
    a.setAttribute("src", `./images/dice6.png`)
}

if (fn == sn) {
    let a = document.body.getElementsByClassName("h")[0]
    a.innerHTML = "Draw...."
} else if (fn < sn) {
    let a = document.body.getElementsByClassName("h")[0]
    a.innerHTML = "Player2 Wins...."
} else {
    let a = document.body.getElementsByClassName("h")[0]
    a.innerHTML = "Player1 Wins...."
}