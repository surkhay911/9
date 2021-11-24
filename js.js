var width1 = 1;
var width2 = 1;
var widthEnd1 = 50;
var widthEnd2 = 75;



if (width1<widthEnd1){
var id1 = setInterval(()=>{
    width1++; 
    document.getElementById("skills-js").style.height = width1 + '%'; 
    document.getElementById("skills-js").innerHTML = width1 + '%';
if(width1>=widthEnd1){
    clearInterval(id1);
}},25);}


if (width2<widthEnd2){
    var id2 = setInterval(()=>{
        width2++; 
        document.getElementById("skills-js1").style.height = width2 + '%'; 
        document.getElementById("skills-js1").innerHTML = width2 + '%';
    if(width2>=widthEnd2){
        clearInterval(id2);
    }},10);}