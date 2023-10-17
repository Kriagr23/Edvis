
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

       
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }


        const userData = {
            username,
            email,
            password,
        };

      

      
      

        form.reset();
    });
});