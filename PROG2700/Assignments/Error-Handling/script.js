/*
// Select the form by its ID and add an event listener for the submit event
document.getElementById('signup-form').addEventListener('submit', function (e) {
    // Prevent the default form submission behavior (which would reload the page)
    e.preventDefault();

    // Get references to all input fields
    const fullName = document.getElementById('full-name');
    const email = document.getElementById('email');
    const username = document.getElementById('username');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    // Clear any previous error messages before running validation again
    clearErrors();

    // Variable to track if all fields are valid
    let isValid = true;

    // === Full Name Validation ===
    // The full name should contain at least two words (first and last name)
    if (fullName.value.trim().split(' ').length < 2) {
        showError('name-error', 'Please enter your full name (first and last).');
        fullName.classList.add('error')
        isValid = false; // Mark the form as invalid
    }

    // === Email Validation ===
    // Regular expression (regex) to check for a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) { // If the email doesn't match the pattern
        showError('email-error', 'Please enter a valid email address.');
        email.classList.add('error')
        isValid = false;
    }

    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phoneRegex.test(phone.value)) {
        showError('phone-error', 'Phone Number is invalid, Please enter a valid phone number. Ex: (123) 456-7890.');
        phone.classList.add('error');
        isValid = false;
    }

    const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;
    if (!usernameRegex.test(username.value)) {
        showError('username-error', 'Username must be between 3-15 characters and contain only letters and numbers.');
        username.classList.add('error');
        isValid = false;
    }

    // === Password Validation ===
    // Regular expression for password:
    // - At least 12 characters long
    // - Contains at least one uppercase letter
    // - Contains at least one number
    // - Contains at least one special character (@$!%*?&)
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    if (!passwordRegex.test(password.value)) {
        showError(
            'password-error',
            'Password must be at least 12 characters long and include an uppercase letter, a number, and a special character.'
        );
        password.classList.add('error')
        isValid = false;
    }

    // === Confirm Password Validation ===
    // Ensure the "Confirm Password" field matches the "Password" field
    if (password.value !== confirmPassword.value) {
        showError('confirm-password-error', 'Passwords do not match.');
        confirmPassword.classList.add('error')
        isValid = false;
    }

    // === Form Submission ===
    // If all fields pass validation, show a success message
    if (isValid) {
        alert('Form submitted successfully!');
        
        // Optionally, reset the form fields after submission
        this.reset();
    }
});


 * Function to display an error message for a specific input field
 * @param {string} elementId - The ID of the error message container
 * @param {string} message - The error message to display
 *
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId); // Get the error message element
    errorElement.textContent = message; // Set the error message
    errorElement.style.display = 'block'; // Make the error message visible
}


 * Function to clear all error messages before revalidating the form

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(errorElement => {
        errorElement.style.display = 'none'; // Hide error messages
        errorElement.textContent = ''; // Clear text content
    });

    document.querySelectorAll('input').forEach(input => {
        input.classList.remove('error');

    });

}
*/

// Event listeners for each input field to trigger validation on user input
// Select the form by its ID and add an event listener for the submit event
document.getElementById('full-name').addEventListener('input', function () {
    validateFullName(this);
});

document.getElementById('email').addEventListener('input', function () {
    validateEmail(this);
});

document.getElementById('phone').addEventListener('input', function () {
    validatePhone(this);
});

document.getElementById('username').addEventListener('input', function () {
    validateUsername(this);
});

document.getElementById('password').addEventListener('input', function () {
    validatePassword(this);
});

document.getElementById('confirm-password').addEventListener('input', function () {
    validateConfirmPassword(this);
});

 // Get references to all input fields
// Clear any previous error messages before running validation again

   // === Full Name Validation ===
    // The full name should contain at least two words (first and last name)
function validateFullName(input) {
    const fullNameError = document.getElementById('name-error');
    if (input.value.trim().split(' ').length < 2) {
        showError(fullNameError, 'Please enter your full name (first and last).');
        input.classList.add('error');
    } else {
        clearError(fullNameError, input);
    }
}

// === Email Validation ===
    // Regular expression (regex) to check for a valid email format
function validateEmail(input) {
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.value)) { // If the email doesn't match the pattern
        showError(emailError, 'Please enter a valid email address.');
        input.classList.add('error');
    } else {
        clearError(emailError, input);
    }
}

// Phone Validation
function validatePhone(input) {
    const phoneError = document.getElementById('phone-error');
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phoneRegex.test(input.value)) {
        showError(phoneError, 'Phone Number is invalid. Please enter a valid phone number (Ex: (123) 456-7890).');
        input.classList.add('error');
    } else {
        clearError(phoneError, input);
    }
}

// Username Validation
function validateUsername(input) {
    const usernameError = document.getElementById('username-error');
    const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;
    if (!usernameRegex.test(input.value)) {
        showError(usernameError, 'Username must be between 3-15 characters and contain only letters and numbers.');
        input.classList.add('error');
    } else {
        clearError(usernameError, input);
    }
}

// === Password Validation ===
    // Regular expression for password:
    // - At least 12 characters long
    // - Contains at least one uppercase letter
    // - Contains at least one number
    // - Contains at least one special character (@$!%*?&)
function validatePassword(input) {
    const passwordError = document.getElementById('password-error');
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    if (!passwordRegex.test(input.value)) {
        showError(passwordError, 'Password must be at least 12 characters long and include an uppercase letter, a number, and a special character.');
        input.classList.add('error');
    } else {
        clearError(passwordError, input);
    }
}

// === Confirm Password Validation ===
    // Ensure the "Confirm Password" field matches the "Password" field
function validateConfirmPassword(input) {
    const confirmPasswordError = document.getElementById('confirm-password-error');
    const password = document.getElementById('password').value;
    if (input.value !== password) {
        showError(confirmPasswordError, 'Passwords do not match.');
        input.classList.add('error');
    } else {
        clearError(confirmPasswordError, input);
    }
}

// Helper function to show error message
function showError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Helper function to clear error message
function clearError(errorElement, inputElement) {
    errorElement.style.display = 'none';
    errorElement.textContent = '';
    inputElement.classList.remove('error');
}

// Form Submission Validation (final check before submitting)
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let isFormValid = true;
    
    // Run validations for all fields by triggering the input event
    ['full-name', 'email', 'phone', 'username', 'password', 'confirm-password'].forEach(id => {
        const input = document.getElementById(id);
        input.dispatchEvent(new Event('input')); // Trigger the input event for each field
    });

    // After validating each field, check if there are any errors
    if (document.querySelectorAll('.error').length > 0) {
        isFormValid = false;
    }

    if (isFormValid) {
        alert('Form submitted successfully!');
        // Optionally, reset the form after successful submission
        this.reset();
    } else {
        alert('Please check the errors in the form, Submit when complete.');
    }
});