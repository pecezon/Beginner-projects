const billAmount = document.getElementById("amount");
const numberGuests = document.getElementById("guest")
const quality = document.getElementById("quality")
const tip_amount = document.getElementById("tip-amount")

function calculate() {
    const tip = ((billAmount.value * quality.value) / (numberGuests.value)).toFixed(2);

    billAmount.value = ""
    numberGuests.value = ""
    quality.value = ""

    if (tip === "NaN") {
        tip_amount.innerHTML = `Tip $0 each`
        showTipAmount()
    } else {
        tip_amount.innerHTML = "The tip should be $" + tip + " each"
        showTipAmount()
    }
}

function showTipAmount(){
    let x = document.getElementById("tip-amount");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}