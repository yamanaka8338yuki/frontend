const textarea = document.querySelector("textarea");
console.log(textarea);
textarea.addEventListener("input", checkNGWord);
const ngWord = "バカ"
const message = document.querySelector("p.message")

function checkNGWord(event){
    console.log(event);
    console.log(event.target.value)
    if(event.target.value.indexOf(ngWord) > -1){
        console.log("テキストエリアにバカが含まれている");
        message.textContent = "不適切な言葉が含まれています"
    }
    else{
        message.textContent = ""
    }
}