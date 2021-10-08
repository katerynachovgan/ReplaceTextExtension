import './content.css';

let dictionary = {
    'Cat': ['Dog', 'Rat', 'bat'],
    'Helo': ['hello', 'Help', 'Hell'],
    'heldp': ['help', 'held', 'hello']
};

let dictKeys = Object.keys(dictionary);

    document.addEventListener('keyup', event => {

        if (event.code === 'Space') {
            let elem = event.target;

            if (elem.tagName.toLowerCase() == 'input' &&
                elem.getAttribute('type').toLowerCase() == 'text') {
                let elValue = elem.value.split(' ');
                let lastInputWord = elValue[elValue.length - 2];

                if (dictKeys.includes(lastInputWord)) {

                    let replaceWordsArray = dictionary[lastInputWord];

                    const body = document.querySelector('body');

                    const popup = document.createElement('div');
                    popup.classList.add('popup');
                    const eclipse = document.createElement('div');
                    eclipse.classList.add('eclipse');
                    eclipse.append(popup);
                    body.prepend(eclipse);
                   
                    const header = document.createElement('div');
                    header.classList.add('header');
                    const replaceWordsContainer = document.createElement('div');
                    replaceWordsContainer.classList.add('replaceWordsContainer');
                
                    popup.append(header, replaceWordsContainer);
                
                    header.textContent = "How do you want to change:";
                
                    replaceWordsArray.forEach(element => {
                        let replacementWord = document.createElement('div');
                        replacementWord.classList.add('elementForReplace');
                        replacementWord.textContent = element;
                        replaceWordsContainer.append(replacementWord);
                    });

                    let targetWord;
                    replaceWordsContainer.addEventListener('click', function(e){
                        targetWord = e.target.innerText;
                        elem.value = elem.value.replace(lastInputWord, targetWord);
                        eclipse.remove();
                        elem.focus();
                    });


                    //         if (request.todo == 'ChangeInputWord') {
                    //             let replaceWord = request.clickedWord;
                    //             event.target.value = elemValue.replace(lastInputWord, replaceWord);
                    //             let focusInput = document.querySelector('.focusInput');
                    //             focusInput.focus();
                    //             event.target.classList.remove('focusInput')
                    //         }
                };
            }
        };
    })
