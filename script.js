const form=document.getElementById("contactForm");
const msg=document.getElementById("msg");

form.addEventListener("submit",(e)=>{

e.preventDefault();

msg.innerHTML="Message Sent Successfully ✅";

form.reset();

});
window.onload = function () {
    document.querySelector(".html").style.width = "90%";
    document.querySelector(".css").style.width = "85%";
    document.querySelector(".js").style.width = "75%";
    document.querySelector(".node").style.width = "70%";
    document.querySelector(".mongo").style.width = "65%";
};