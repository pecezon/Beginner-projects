let count = 0
function changeCount(change) {
    count += change
    document.getElementById("count").innerHTML = count 
}

function reset() {
    count = 0
    document.getElementById("count").innerHTML = count
}