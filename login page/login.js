document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // For demonstration purposes, we're just checking if the fields are filled
    if (email && password) {
        alert('Login successful!'); // You can redirect to the main page here
        window.location.href = 'main.html'; // Redirect to the main website after login
    } else {
        alert('Please fill in all fields.');
    }
});
