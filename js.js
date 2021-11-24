var width1 = 0;
var width2 = 0;
var width3 = 0;
var widthEnd1 = 50;
var widthEnd2 = 65;
var widthEnd3 = 80;


if (width1<widthEnd1){
    var id1 = setInterval(()=>{
        width1++; 
        document.getElementById("skills-js").style.height = width1 + '%'; 
        document.getElementById("skills-js1").innerHTML =  width1 + '%';
if(width1>=widthEnd1){
    clearInterval(id1);
}},35);}


if (width2<widthEnd2){
    var id2 = setInterval(()=>{
        width2++; 
        document.getElementById("skills-css").style.height = width2 + '%'; 
        document.getElementById("skills-css1").innerHTML =  width2 + '%';
if(width2>=widthEnd2){
    clearInterval(id2);
}},30);}

if (width3<widthEnd3){
    var id3 = setInterval(()=>{
        width3++; 
        document.getElementById("skills-html").style.height = width3 + '%'; 
        document.getElementById("skills-html1").innerHTML =  width3 + '%';
if(width3>=widthEnd3){
    clearInterval(id3);
}},25);}