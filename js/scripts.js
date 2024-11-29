// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Simple email and password check (you can replace this with more complex validation)
    if (email === "jean@email.com" && password === "password123") {
        // Redirect to homepage if login is successful
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials, please try again.");
    }
});