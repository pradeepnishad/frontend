document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirm-password');
    const message = document.getElementById('message');

    function validatePassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmInput.value;

        if (password.length < 8) {
            message.textContent = 'Password must be at least 8 characters long.';
            return false;
        }

        if (password !== confirmPassword) {
            message.textContent = 'Passwords do not match.';
            return false;
        }

        message.textContent = '';
        return true;
    }

    document.getElementById('password-form').addEventListener('submit', function (e) {
        if (!validatePassword()) {
            e.preventDefault();
        }
    });

    passwordInput.addEventListener('input', validatePassword);
    confirmInput.addEventListener('input', validatePassword);
});
