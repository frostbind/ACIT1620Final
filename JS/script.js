//  --variables--

const toggleButton = document.querySelector(".toggle"); //toggle button
const body = document.querySelector(".light-theme"); //body function for changing from light to dark theme

const submitButton = document.querySelector("#frm-btn"); //submit button
const email = document.querySelector("#email"); //email input
const nameInput = document.querySelector("#name"); //name input (generic variable name "name" was noted to be deprecated)
const message = document.querySelector("#msg"); //message input


//  --event handlers--

toggleButton.addEventListener("click", function() { //event handler for when the toggle button is clicked
    if (body.classList == "light-theme") {
        body.removeAttribute("light-theme")
        body.setAttribute("class", "dark-theme");
    } else {
        body.removeAttribute("dark-theme");
        body.setAttribute("class", "light-theme");
    }
})

submitButton.addEventListener("click", function(event) { //event handler for when the submit button is clicked
    event.preventDefault();

    let submission = {
        email: email.value,
        name: nameInput.value,
        message: message.value
    }
    console.log(submission)
})

//end of script