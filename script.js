document.getElementById("leadForm").addEventListener("submit", function(e){

e.preventDefault();

const name = document.querySelector("input[type='text']").value;
const email = document.querySelector("input[type='email']").value;

fetch("https://hook.make.com/pwopi0r8ufitjcm3qoaybutp1alj6ud5", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({
name: name,
email: email,
source: "Landing Page",
date: new Date().toISOString()
})

})

.then(() => {
document.getElementById("successMessage").innerText =
"Thank you! Your information has been received.";
});

});

