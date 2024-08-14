let images = ["Java.png", "html.png", "Python.png"]
let img = document.getElementById("codingImg")

let index = 0

function changeImg() {
    img.src = images[index]
    index++
    if (index > 2) {
        index = 0
    }

}

setInterval(changeImg,5000)