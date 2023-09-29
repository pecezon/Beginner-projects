function changeColor(params) {
    let hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    let hex_code = ""
    for (let i = 0; i < 6; i++) {
        let random_index = Math.floor(Math.random() * hex_numbers.length)
        hex_code += hex_numbers[random_index]
    }
    console.log(hex_code)

    document.getElementById("hex-code").innerHTML = hex_code

    document.getElementsByTagName("body")[0].style.background = "#" + hex_code
}