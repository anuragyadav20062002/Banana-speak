var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#input");
var outputText = document.querySelector("#output");

function clickHandler() {
   outputText.innerText= "jjdbafi" + textInput.value;
};
btnTranslate.addEventListener("click",clickHandler)