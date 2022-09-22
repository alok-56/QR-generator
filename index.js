var inp = document.getElementById("inp");
var btn = document.getElementById("btn");
var qr = document.querySelector("#qr img");
var head =document.getElementsByClassName("heading")[0];
btn.addEventListener("click",function()
{   
     var qrvalue =inp.value;
     if(!qrvalue) return alert("enter the url");
     btn.innerHTML="generating your QR ";
     qr.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
     qr.classList.add("active");  
     qr.addEventListener("load", function(){
          btn.innerHTML="generated your QR";
     })    
})