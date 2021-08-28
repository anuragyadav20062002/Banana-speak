var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#input");
var outputText = document.querySelector("#output");

var serverURL= "https://api.funtranslations.com/translate/minion.json";

function translationText(text){

   return serverURL+"?"+"text=" + text;
}

function errorhandler(error){

   console.log("error occured", error);
   alert("Please try after sometime server error");
}

function clickHandler() {
   var inputText= textInput.value;
   
   fetch(translationText(inputText))
   .then(response=>response.json())
   .then(json => {
      var translatedText = json;
      outputText.innerText= translatedText.contents.translated;
   })
   .catch(errorhandler);
};
btnTranslate.addEventListener("click",clickHandler)