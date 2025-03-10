document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value;
        let errorMessage = document.getElementById("error-message");

        // Regular expression to allow only letters in username (no numbers or special characters)
        let usernameRegex = /^[A-Za-z]+$/;

        if (!usernameRegex.test(username)) {
            errorMessage.textContent = "Username must contain only letters (no numbers or special symbols).";
            alert("Login failed")
            return;
        }

        alert("Login successful!");
        errorMessage.textContent = "";
    });
});
