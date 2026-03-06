document.getElementById("leadForm").addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("successMessage").innerText =
"Thank you! Your guide will be sent to your email.";

});
