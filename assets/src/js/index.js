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
    copy = document.querySelector('#copy');

soundBtn.addEventListener('click', () => {
    // speak quote text and author with text-to-speech
    let newVoice = new SpeechSynthesisUtterance(`${quoteText.innerHTML} , by ${writer.innerHTML}`)
    speechSynthesis.speak(newVoice)
})

copy.addEventListener('click', () => {
    // copy quote text to clipboard
    navigator.clipboard.writeText(quoteText.innerHTML)

})

twitter.addEventListener('click', () => {
    // open new tab to prefilled tweet with quote text
    let twUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerHTML}`
    window.open(twUrl, '_blank')
})