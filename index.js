let addEl1 = document.getElementById("add1")
let addEl2 = document.getElementById("add2")
let addEl3 = document.getElementById("add3")
let addEl4 = document.getElementById("add4")
let addEl5 = document.getElementById("add5")
let addEl6 = document.getElementById("add6")
let addEl7 = document.getElementById("add7")
let addEl8 = document.getElementById("add8")
let addEl9 = document.getElementById("add9")
let addElpoint = document.getElementById("addpoint")
let addEl0 = document.getElementById("add0")
let addEl00 = document.getElementById("add00")

let inputEl = document.getElementById("elements")

function clearbtn() {
    inputEl.innerHTML = ""
}

function eladd1() {
    inputEl.innerHTML += addEl1.innerHTML
}

function eladd2() {
    inputEl.innerHTML += addEl2.innerHTML
}

function eladd3() {
    inputEl.innerHTML += addEl3.innerHTML
}

function eladd4() {
    inputEl.innerHTML += addEl4.innerHTML
}

function eladd5() {
    inputEl.innerHTML += addEl5.innerHTML
}

function eladd6() {
    inputEl.innerHTML += addEl6.innerHTML
}

function eladd7() {
    inputEl.innerHTML += addEl7.innerHTML
}

function eladd8() {
    inputEl.innerHTML += addEl8.innerHTML
}

function eladd9() {
    inputEl.innerHTML += addEl9.innerHTML
}

function eladdpoint() {
    inputEl.innerHTML += addElpoint.innerHTML
}

function eladd0() {
    inputEl.innerHTML += addEl0.innerHTML
}

function eladd00() {
    inputEl.innerHTML += addEl00.innerHTML
}

let num = 0;
let str = "";
console.log(num)

function addbtn() {
    num = parseFloat(inputEl.innerHTML)
    // inputEl.innerHTML = ""
    str="+"
    console.log(num)
    inputEl.innerHTML = ""
}

function subbtn() {
    num = parseFloat(inputEl.innerHTML)
    // inputEl.innerHTML = ""
    str="-"
    console.log(num)
    inputEl.innerHTML = ""
}

function mulbtn() {
    num = parseFloat(inputEl.innerHTML)
    // inputEl.innerHTML = ""
    str="*"
    console.log(num)
    inputEl.innerHTML = ""
}

function divbtn() {
    num = parseFloat(inputEl.innerHTML)
    // inputEl.innerHTML = ""
    str="/"
    console.log(num)
    inputEl.innerHTML = ""
}

function modbtn() {
    num = parseFloat(inputEl.innerHTML)
    // inputEl.innerHTML = ""
    str="%"
    console.log(num)
    inputEl.innerHTML = ""
}

function powbtn() {
    num = parseFloat(inputEl.innerHTML)
    // inputEl.innerHTML = ""
    str="pow"
    console.log(num)
    inputEl.innerHTML = ""
}

function rootbtn() {
    num = parseFloat(inputEl.innerHTML)
    // inputEl.innerHTML = ""
    str="root"
    console.log(num)
    inputEl.innerHTML = ""
}

function addbn() {
    num = num+ parseFloat(inputEl.innerHTML)
    inputEl.innerHTML = ""
    str="+"
    console.log(num)
}

function subbn() {
    num = num - parseFloat(inputEl.innerHTML)
    inputEl.innerHTML = ""
    str="-"
    console.log(num)
}

function mulbn() {
    num = num * parseFloat(inputEl.innerHTML)
    inputEl.innerHTML = ""
    str="*"
    console.log(num)
}

function divbn() {
    num = num / parseFloat(inputEl.innerHTML)
    inputEl.innerHTML = ""
    str="/"
    console.log(num)
}

function modbn() {
    num = num % parseFloat(inputEl.innerHTML)
    inputEl.innerHTML = ""
    str="%"
    console.log(num)
}

function powbn() {
    num = Math.pow(num,parseFloat(inputEl.innerHTML))
    inputEl.innerHTML = ""
    str="pow"
    console.log(num)
}

function rootbn() {
    num = Math.pow(num,(1/parseFloat(inputEl.innerHTML)))
    inputEl.innerHTML = ""
    str="root"
    console.log(num)
}

function equalbtn() {
    if(str=="+"){
        addbn()
    }
    if(str=="-"){
        subbn()
    }
    if(str=="*"){
        mulbn()
    }
    if(str=="/"){
        divbn()
    }
    if(str=="%"){
        modbn()
    }
    if(str=="root"){
        rootbn()
    }
    if(str=="pow"){
        powbn()
    }
    inputEl.innerHTML = num
}

