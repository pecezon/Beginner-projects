
// Quote generator
function generate() {
    let quotes = {
        "― Jules Renard": '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
        "― Albert Einstein": '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',
        "― Pierce Brown": '"Man cannot be freed by the same injustice that enslaved it."',
        "― Deepak Chopra": '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."',
        "― Diego López": '"Kanye West is da GOAT"'
    }
    
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random()* authors.length)]
    let quote = quotes[author]

    document.getElementById("quote").innerHTML = quote
    document.getElementById("author").innerHTML = author

    console.log(authors)
}

//Pass the message page
const messageInput = document.getElementById("message-input");

messageInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        getMessage();
    }
})

function getMessage() {
    document.getElementById("message-output").innerHTML = messageInput.value;
    console.log(messageInput.value)
    messageInput.value = ""
}

//Counter
let count = 0
function changeCount(change) {
    count += change
    document.getElementById("count").innerHTML = count 
}

function reset() {
    count = 0
    document.getElementById("count").innerHTML = count
}

//Digital clock
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
