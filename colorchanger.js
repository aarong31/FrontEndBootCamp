window.onload=function(){

var butt = document.querySelector("button");
var isPurple = false;

alert("connected");
butt.addEventListener("click", function()
{
    if(isPurple)
    {
        document.body.style.background = "white";
        isPurple = false;
    }
    else {document.body.style.background = "purple";
        isPurple = true;}
});
}