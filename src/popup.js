import './popup.css';

const popup = document.getElementById('popup');

let outputObj = [] ;
  chrome.storage.local.get("output", function(result) {
    outputObj = result.output;
    console.log(outputObj);
    outputObj.forEach(element => {
            const autoReplacement = document.createElement('div');
            autoReplacement.classList.add('replEl');
            autoReplacement.textContent = element;
            popup.append(autoReplacement);
        })
});

chrome.storage.local.clear(function() {
    var error = chrome.runtime.lastError;
    if (error) {
        console.error(error);
    }
});



document.addEventListener("DOMContentLoaded", function() {
    popup.addEventListener('click', e => {
        let replValue = e.target.textContent;
        chrome.tabs.query({active: true, lastFocusedWindow: true}, functon = (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {todo: "ChangeInputWord", clickedWord: replValue})
        })
        document.querySelector('body').classList.add('hide');
        popup.onblur();
    })
  });