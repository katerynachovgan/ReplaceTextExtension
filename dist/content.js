(()=>{let e={Cat:["Dog","Rat","bat"],Helo:["hello","Help","Hell"],heldp:["help","held","hello"]},t=Object.keys(e);document.addEventListener("DOMContentLoaded",(function(){document.addEventListener("keyup",(o=>{if("Space"===o.code){let l=o.target;l.classList.add("focusInput");let a=o.target.value;if(window,top,"input"==l.tagName.toLowerCase()&&"text"==l.getAttribute("type").toLowerCase()){let n=l.value.split(" "),u=n[n.length-2];if(t.includes(u)){let t=e[u];chrome.storage.local.set({output:t},(function(){chrome.runtime.onMessage.addListener(((e,t,l)=>{if("ChangeInputWord"==e.todo){let t=e.clickedWord;o.target.value=a.replace(u,t),document.querySelector(".focusInput").focus(),o.target.classList.remove("focusInput")}}))}))}}}}))}))})();