
function generate() {
    let quotes = {
        "― Jules Renard": '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
        "― Albert Einstein": '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',
        "― Pierce Brown": '"Man cannot be freed by the same injustice that enslaved it."',
        "― Deepak Chopra": '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."'
    }
    
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random()* authors.length)]
    let quote = quotes[author]

    document.getElementById("quote").innerHTML = quote
    document.getElementById("author").innerHTML = author

    console.log(authors)
}