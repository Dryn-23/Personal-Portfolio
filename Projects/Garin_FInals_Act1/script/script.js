// console.log(document)

// const var1 = document.getElementById("output")
// const Button1 = document.getElementById("btn1")
// const image = document.getElementById("image1")
// const Double = document.getElementById("doubleCLick")
// const text = document.getElementById("input")
// const img = document.createElement("img")
// const img2 = document.createElement("img2")

// Button1.addEventListener(
//     "click",function (){
//         var1.innerHTML = "Welcome to js"
//     }
// )
    
// Double.addEventListener(
//     "dblclick", function (){
//         var1.innerHTML = "DoubleClick"
//     }
// )

// image.addEventListener(
//     "mouseenter", function (){
//         image.style.transform = "scale(1.1)"
//         var1.innerHTML = "mouse in"
//         image.src = img.src = "images/box.png"
//     }
// )

// image.addEventListener(
//     "mouseout", function (){
//         image.style.transform = "scale(1)"
//         var1.innerHTML = "mouse out"
//         image.src = img2.src = "images/image.png"
//     }
// )

// text.addEventListener(
//     "focus", function (){
//         text.style.backgroundColor = "red"
//         var1.innerHTML = "text in"
//     }
// )

// text.addEventListener(
//     "blur", function (){
//         text.style.backgroundColor = "white"
//         var1.innerHTML = "text in"
//     }
// )

// text.addEventListener(
//     "change", function (){
//         var1.innerHTML = "Hello: " + text.value
//     }
// )

// text.addEventListener(
//     "input", function (){
//         var1.innerHTML = "Hello: " + text.value
//     }
// )


const img1 = document.getElementById("img")
const name = document.getElementById("name")
const course = document.getElementById("course")
const text = document.getElementById("text")
const select = document.getElementById("selection")
const values1 = document.getElementById("value1")
const values2 = document.getElementById("value2")
const values3 = document.getElementById("value3")
const values4 = document.getElementById("value4")
const click = document.getElementById("click")
const DbClick = document.getElementById("dbCLick")
const presHold = document.getElementById("pressHold")
const output = document.getElementById("output")
const baddies = document.getElementById("body")

 click.addEventListener(
     "click",function (){
         output.innerHTML = "Pressed Click"
         name.innerHTML = "FUTURE WEB DEVELOPER"
     }
 )

DbClick.addEventListener(
     "dblclick",function (){
         name.style.color = "red"
         output.innerHTML = "Pressed Double Click"
     }
 )

presHold.addEventListener(
     "mouseup",function (){
         presHold.style.backgroundColor = "aqua"
         output.innerHTML = "Waiting for interaction..."
         presHold.style.transform = "scale(1)"
     }
 )

presHold.addEventListener(
     "mousedown",function (){
         presHold.style.backgroundColor = "lightgreen"
         presHold.style.backgroundColor = "green"
         output.innerHTML = "Pressed Press and Hold"
         presHold.style.transform = "scale(0.9)"
     }
 )

select.addEventListener(
     "click",function (){
         output.innerHTML ="You are " + select.value
     }
 )

 values2.addEventListener(
     "click",function (){
         output.innerHTML = "You are 2st Year"
     }
 )

 values3.addEventListener(
     "click",function (){
         output.innerHTML = "You are 3st Year"
     }
 )

 values4.addEventListener(
     "click",function (){
         output.innerHTML = "You are 4st Year"
     }
 )

// text.addEventListener(
//     "change", function (){
//         name.innerHTML = "Hello: " + text.value
//     }
// )

text.addEventListener(
    "input", function (){
        name.innerHTML =  text.value || "Garin"
        output.innerHTML = "Typing"
    }
)

img1.addEventListener(
    "mouseenter", function (){
        img1.style.transform = "scale(1.1)"
        output.innerHTML = "Hovering Image"
        baddies.style.backgroundColor = "black"
        name.style.color = "white"
        course.style.color = "white"
        output.style.color = "white"
        // image.src = img.src = "images/box.png"
    }
)

img1.addEventListener(
    "mouseout", function (){
        img1.style.transform = "scale(1)"
        baddies.style.backgroundColor = "white"
                name.style.color = "black"
        course.style.color = "black"
        output.style.color = "black"
        output.innerHTML = "Waiting for interaction..."
        // image.src = img2.src = "images/image.png"
    }
)

text.addEventListener(
    "focus", function (){
        text.style.backgroundColor = "yellow"
        output.innerHTML = "Input is Active"
    }
)

text.addEventListener(
    "blur", function (){
        text.style.backgroundColor = "white"
        output.innerHTML = "Input is not Active"
    }
)