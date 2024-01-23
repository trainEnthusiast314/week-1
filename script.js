// my-script.js
document.addEventListener("DOMContentLoaded", function() {
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    document.getElementById("test").onclick=()=>{
        document.getElementById("test").style.color = "#ff0000"
    }
    changeColorToRed=(id)=>{
        document.getElementById(id)
    }
});