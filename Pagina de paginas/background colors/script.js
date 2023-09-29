function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function changeColors() {
    let color = []
    for (let i = 0; i < 3; i++) {
        color.push(getRandomInt(0, 256))  
    }
    document.getElementsByTagName("body")[0].style.background = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    console.log(color)
}