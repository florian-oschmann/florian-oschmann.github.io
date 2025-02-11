// passwords.js

(function() {
    // Check if the script is loaded correctly within a <script> tag
    if (document.currentScript) {
        console.log('The script is loaded correctly through a <script> tag.');
    } else {
        // If currentScript is null or undefined, it means the script is being accessed directly.
        alert('Access to this file is restricted. Please use the proper website.');
        window.location = '/';  // Redirect to the homepage or any other page
    }

    // Your original JavaScript code for the password functionality goes here:
    function PWfun() {
        var enteredPassword = document.getElementById('inputPsw').value;
        
        // Sample passwords (you can modify this part)
        if (enteredPassword === "password1") {
            document.getElementById('container1').style.display = 'block';
        } else if (enteredPassword === "password2") {
            document.getElementById('container2').style.display = 'block';
        } else {
            alert('Incorrect password!');
        }
    }

    // Expose the function to the global scope if needed
    window.PWfun = PWfun;
})();
