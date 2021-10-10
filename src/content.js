import './content.css';

let dictionary = {
    'Cat': ['Dog', 'Rat', 'bat'],
    'Helo': ['hello', 'Help', 'Hell'],
    'heldp': ['help', 'held', 'hello']
};

let dictKeys = Object.keys(dictionary);
let enteredText = '';
let elementValue = '';


const isTextEndsWithDictKey = (enteredText, dictKeys) => {
    for (let key of dictKeys) {
        if (enteredText.endsWith(key)) {
            return key;
        }
    }
    return false;
}

const replacementWord = (key) => {
    let replaceWordsArray = dictionary[key];

    const body = document.querySelector('body');

    const popup = document.createElement('div');
    popup.classList.add('popup');
    const eclipse = document.createElement('div');
    eclipse.setAttribute('id', 'eclipse');
    eclipse.classList.add('eclipse');
    eclipse.append(popup);
    body.prepend(eclipse);

    const header = document.createElement('div');
    header.classList.add('header');
    const replaceWordsContainer = document.createElement('div');
    replaceWordsContainer.classList.add('replaceWordsContainer');
    replaceWordsContainer.setAttribute('id', 'replaceWordsContainer');

    popup.append(header, replaceWordsContainer);

    header.textContent = "How do you want to change:";

    replaceWordsArray.forEach(element => {
        let replacementWord = document.createElement('div');
        replacementWord.classList.add('elementForReplace');
        replacementWord.textContent = element;
        replaceWordsContainer.append(replacementWord);
    });

}

document.addEventListener('input', event => {
    enteredText += event.data;
     console.log(enteredText);

    if (event.data === ' ') {
        enteredText = enteredText.trimEnd();
        let elem = event.target;
        // console.log(event);

        let key = isTextEndsWithDictKey(enteredText, dictKeys);
        console.log(key)

        if ((elem.tagName.toLowerCase() == 'input' &&
                elem.getAttribute('type').toLowerCase() == 'text')) {
            elementValue = elem.value;
            console.log(elementValue);
        }

        if (elem.isContentEditable) {
            elementValue = elem.textContent;
            console.log(elementValue);
        }

        if (key) {
            let textForReplace = enteredText.slice(0, -key.length);
            console.log("entered text after slice: ", textForReplace)
            replacementWord(key);

            let targetWord;
            replaceWordsContainer.addEventListener('click', function (e) {
                targetWord = e.target.innerText;
                textForReplace += targetWord + " ";
                console.log('enteredText after replace: ', textForReplace)
                elementValue = elementValue.replace(enteredText, textForReplace);
                console.log(elementValue)
                eclipse.remove();
                elem.isContentEditable ? elem.textContent = elementValue :
                    elem.value = elementValue;
                    elem.focus();
                enteredText = '';
                elementValue = '';
            });

        };

    };
})