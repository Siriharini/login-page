document.addEventListener('DOMContentLoaded', () => {
    // 1. Password Visibility Toggle
    const passwordField = document.getElementById('password');
    const togglePasswordButton = document.querySelector('.toggle-password');
    const toggleIcon = togglePasswordButton ? togglePasswordButton.querySelector('i') : null;

    if (togglePasswordButton && passwordField && toggleIcon) {
        togglePasswordButton.addEventListener('click', () => {
            // Toggle the type attribute
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);

            // Toggle the eye icon (Font Awesome classes)
            if (type === 'password') {
                toggleIcon.classList.remove('fa-eye-slash');
                toggleIcon.classList.add('fa-eye');
            } else {
                toggleIcon.classList.remove('fa-eye');
                toggleIcon.classList.add('fa-eye-slash');
            }
        });
    }

    // 2. Form Submission Handling (Example: Simulate Login)
    const loginButton = document.querySelector('.login-button');
    const emailInput = document.getElementById('email');

    if (loginButton) {
        loginButton.addEventListener('click', (event) => {
            // Prevent the default form submission (page reload)
            event.preventDefault();

            // Basic validation (you'd have more robust validation in a real app)
            if (!emailInput.value || !passwordField.value) {
                alert('Please enter both email and password.');
                return;
            }

            // Simulate a login process
            console.log('Attempting to log in...');
            console.log('Email:', emailInput.value);
            console.log('Password:', passwordField.value); // In a real app, NEVER send raw password like this!

            // Add a "loading" state or animation to the button
            loginButton.textContent = 'Logging In...';
            loginButton.disabled = true;
            loginButton.style.cursor = 'not-allowed';
            loginButton.style.backgroundColor = '#6c757d'; // Grey out button

            // Simulate an API call delay
            setTimeout(() => {
                // Reset button state
                loginButton.textContent = 'Login';
                loginButton.disabled = false;
                loginButton.style.cursor = 'pointer';
                loginButton.style.backgroundColor = '#007bff';

                // Display a success or failure message
                alert('Login successful! (This is a simulation)');
                // In a real app, you would redirect or show user dashboard
                // window.location.href = '/dashboard';

                // Or, for an error:
                // alert('Login failed. Please check your credentials.');

            }, 2000); // Simulate a 2-second delay
        });
    }

    // 3. Input Field Focus/Blur Animations (Adding/Removing CSS classes)
    const inputFields = document.querySelectorAll('.input-group input');

    inputFields.forEach(input => {
        input.addEventListener('focus', () => {
            input.closest('.input-group').classList.add('is-focused');
            input.classList.add('input-active'); // Add a class to the input itself
        });

        input.addEventListener('blur', () => {
            input.closest('.input-group').classList.remove('is-focused');
            input.classList.remove('input-active');
            // You might want to add a 'has-content' class if the input has a value
            if (input.value.trim() !== '') {
                input.classList.add('has-content');
            } else {
                input.classList.remove('has-content');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const loginFox = document.querySelector('.login-fox');
    if (loginFox) {
        document.addEventListener('mousemove', (e) => {
            // Get fox's position (center of its head/body)
            const foxRect = loginFox.getBoundingClientRect();
            const foxX = foxRect.left + foxRect.width / 2;
            const foxY = foxRect.top + foxRect.height / 2;

            // Calculate angle from fox to mouse
            const angleRad = Math.atan2(e.clientY - foxY, e.clientX - foxX);
            const angleDeg = angleRad * 180 / Math.PI;

            // Limit the head rotation (e.g., +/- 15 degrees from its initial forward direction)
            // You'll need to adjust initial offset depending on your fox image's orientation
            let limitedAngle = Math.max(-15, Math.min(15, angleDeg - 90)); // Example adjustment for upward-facing fox

            loginFox.style.transform = `rotateZ(${limitedAngle}deg)`;
        });
    }
});