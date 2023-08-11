// Developer : @HAMEDPYN
// Version : 1.0
// Date : 08 / 10 / 2023


// Select DOM Elements

// button to trigger text-to-speech
let soundBtn = document.querySelector('#sound'),
    // element containing quote text
    quoteText = document.querySelector('#quote'),
    // button to fetch new quote
    quoteBtn = document.querySelector('#button'),
    // element containing quote author
    writer = document.querySelector('#quoteWriter'),
    // button to tweet quote
    twitter = document.querySelector('#twitter'),
    // button to copy quote to clipboard
    copy = document.querySelector('#copy'),
    // an text to alert the copy success
    copyAlert = document.querySelector('.tooltiptext')

soundBtn.addEventListener('click', () => {
    // speak quote text and author with text-to-speech
    let newVoice = new SpeechSynthesisUtterance(`${quoteText.innerHTML} , by ${writer.innerHTML}`)
    speechSynthesis.speak(newVoice)
})

copy.addEventListener('click', () => {
    // copy quote text to clipboard
    navigator.clipboard.writeText(quoteText.innerHTML)
    // success alert been shown
    copyAlert.style.display = 'block'
    // it disappear after 1s
    setTimeout(() => {
        copyAlert.style.display = 'none'
    }, 1000);
})

twitter.addEventListener('click', () => {
    // open new tab to prefilled tweet with quote text
    let twUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerHTML}`
    window.open(twUrl, '_blank')
})

// random Quote function
function randomQuote() {
    // fetch new quote from API
    quoteBtn.classList.add('loading')
    quoteBtn.innerHTML = `Loading Quote`
    fetch('https://api.quotable.io/random').then(res => {
        res.json().then(result => {
            quoteText.innerHTML = result.content
            writer.innerHTML = result.author
            quoteBtn.innerHTML = `new Quote`
            quoteBtn.classList.remove('loading')
        })
    })
}

quoteBtn.addEventListener('click', randomQuote)