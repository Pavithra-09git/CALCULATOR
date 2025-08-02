
function displaybutton(val){
document.getElementById("screen").value+=val;
}
function clearScreen(){
document.getElementById("screen").value=""
}
function equalClick(){
var text=document.getElementById("screen").value
var result=eval(text)
document.getElementById("screen").value=result
}

function deleteLast(){
   const deletEl = document.getElementById("screen");
   deletEl.value=deletEl.value.slice(0,-1);
}
