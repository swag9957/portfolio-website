const form=document.getElementById("contactForm");
const msg=document.getElementById("msg");

form.addEventListener("submit", async (e) => {
console.log("Button clicked");
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message")
    };
console.log("Sending Data:", data);
    const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    msg.innerHTML = result.message + " ✅";

    form.reset();
});
window.onload = function () {
    document.querySelector(".html").style.width = "90%";
    document.querySelector(".css").style.width = "85%";
    document.querySelector(".js").style.width = "75%";
    document.querySelector(".node").style.width = "70%";
    document.querySelector(".mongo").style.width = "65%";
};
