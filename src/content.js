let dictionary = {
    'Cat': ['Dog', 'Rat', 'bat'],
    'Helo': ['hello', 'Help', 'Hell'],
    'heldp': ['help', 'held', 'hello']
};

let dictKeys = Object.keys(dictionary);

// let frames = window.frames;
// console.log(frames);
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener('keyup', event => {

        if (event.code === 'Space') {
            let elem = event.target;
            elem.classList.add('focusInput');
            let elemValue = event.target.value;

            let isFrame = window == top;

            if (elem.tagName.toLowerCase() == 'input' &&
                elem.getAttribute('type').toLowerCase() == 'text') {
                let elValue = elem.value.split(' ');
                let lastInputWord = elValue[elValue.length - 2];

                if (dictKeys.includes(lastInputWord)) {
                    let outpArray = dictionary[lastInputWord];

                    chrome.storage.local.set({
                        output: outpArray
                    }, function () {

                        chrome.runtime.onMessage.addListener((request, sender, responce) => {
                            if (request.todo == 'ChangeInputWord') {
                                let replaceWord = request.clickedWord;
                                event.target.value = elemValue.replace(lastInputWord, replaceWord);
                                let focusInput = document.querySelector('.focusInput');
                                focusInput.focus();
                                event.target.classList.remove('focusInput')
                            }
                        })
                    });
                };
            }
        };
    })
})