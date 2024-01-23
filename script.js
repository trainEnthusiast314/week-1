// my-script.js
document.addEventListener("DOMContentLoaded", function() {
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    // let flag=true
    // document.getElementById("test").onclick=(event)=>{
    //     let flag=true
    //     if (flag){
    //         document.getElementById("test").style.color = "#ff0000"
    //         flag=false
    //     } else{
    //         document.getElementById("test").style.color = "#000000"
    //         flag=true
    //     }
    // }
   const changeColorToRed=(event)=>{
    
    let elementId=event.target.attributes[0].value;
    let currentColor=document.getElementById(elementId).style.color
    
    if(currentColor==="#ff0000"){
        document.getElementById(elementId).style.color="#000000"
    } else{
        document.getElementById(elementId).style.color="#ff0000"
    }
   }
   document.getElementById("test").onclick=changeColorToRed
});