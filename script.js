// ================= FORM SUBMIT =================
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("floatingname").value.trim();
    let email = document.getElementById("floatingemail").value.trim();
    let message = document.getElementById("floatingmessage").value.trim();
    let msg = document.getElementById("formMsg");

    if (name === "" || email === "" || message === "") {
        msg.style.color = "red";
        msg.innerText = "Please fill all fields!";
    } else {
        msg.style.color = "lightgreen";
        msg.innerText = "Message sent successfully!";
        this.reset();
    }
});


// ================= ENTER KEY NAVIGATION =================
document.getElementById("floatingname").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("floatingemail").focus();
    }
});

document.getElementById("floatingemail").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("floatingmessage").focus();
    }
});
