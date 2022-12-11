function pressbutton(buttonvalue){
    let caltext = document.querySelector(".input-screen").value + buttonvalue + "" ;
    document.querySelector(".input-screen").value = caltext;
}
function calculate() {
    let calText = document.querySelector(".input-screen").value;
    document.querySelector(".input-screen").value = eval(calText);
}
function clearScreen() {
    document.querySelector(".input-screen").value = "";
}
function clearone(){
   let back = document.querySelector(".input-screen").value ;
   document.querySelector(".input-screen").value = back.substring(0,back.length-1);
}