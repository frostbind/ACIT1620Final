const toggleButton = document.querySelector(".toggle");
const body = document.querySelector(".light-theme");

const submitButton = document.querySelector("#frm-btn");
const email = document.querySelector("#email");
const nameInput = document.querySelector("#name");
const message = document.querySelector("#msg")
let submissions = {};
toggleButton.addEventListener("click", function() {
    if (body.classList == "light-theme") {
        body.removeAttribute("light-theme")
        body.setAttribute("class", "dark-theme");
    } else {
        body.removeAttribute("dark-theme");
        body.setAttribute("class", "light-theme");
    }
})

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    let submission = {
        email: email.value,
        name: nameInput.value,
        message: message.value
    }
    console.log(submission)
})