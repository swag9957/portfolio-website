const form=document.getElementById("contactForm");
const msg=document.getElementById("msg");

form.addEventListener("submit",(e)=>{

e.preventDefault();

msg.innerHTML="Message Sent Successfully ✅";

form.reset();

});