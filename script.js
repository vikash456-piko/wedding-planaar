// Function to handle form submission for login and signup
function handleFormSubmission(event, formType) {
    event.preventDefault();

    let username = document.querySelector(`#${formType} input[name="username"]`).value;
    let email = document.querySelector(`#${formType} input[name="email"]`).value;
    let password = document.querySelector(`#${formType} input[name="password"]`).value;

    if (formType === 'login') {
        if (username === '' || password === '') {
            alert('Please fill in all fields.');
            return;
        }
    } else if (formType === 'signup') {
        if (username === '' || email === '' || password === '') {
            alert('Please fill in all fields.');
            return;
        }
        // Simple email validation
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert('Please enter a valid email address.');
            return;
        }
    }

    // Assuming an AJAX request or form submission would take place here
    alert(`${formType.charAt(0).toUpperCase() + formType.slice(1)} successful!`);
}

// Attach event listeners to login and signup forms
document.getElementById('login-form').addEventListener('submit', (event) => handleFormSubmission(event, 'login'));
document.getElementById('signup-form').addEventListener('submit', (event) => handleFormSubmission(event, 'signup'));


