window.addEventListener("load", calculateTime)

function onlyHour(hour, minute, ampm) {
    document.getElementById("title").innerHTML = `Son las ${hour}:${minute} ${ampm}`
}

function calculateTime() {
    let date = new Date()
    let dayNumber = date.getDay()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let ampm = hour >= 12 ? "PM" : "AM"
    let dayNames = ["DOM","LUN","MAR","MIE","JUE","VIE","SAB"]

    hour = hour % 12
    hour = hour ? hour : "12"
    hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute

    document.getElementById("day").innerHTML = dayNames[dayNumber]
    document.getElementById("hour").innerHTML = hour
    document.getElementById("minute").innerHTML = minute
    document.getElementById("ampm").innerHTML = ampm

    onlyHour(hour, minute, ampm)
    setTimeout(calculateTime, 200)
}

