function buttonClick(val){
    document.getElementById("screen").value+=val
}
function clearWhole(){
    document.getElementById("screen").value=""
}
function equalClick(){
    var text=document.getElementById("screen").value
    var result= eval(text)
    document.getElementById("screen").value=result
}
function clearOne(){
    var text=document.getElementById("screen").value
    document.getElementById("screen").value=text.slice(0,-1)
}
