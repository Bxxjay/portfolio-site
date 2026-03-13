let form = document.getElementById("signForm");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let result = document.getElementById("result");
let errorMessage = document.getElementById("error-message1");
let passwordStrength = document.getElementById("passwordStrength");
let displayButton = document.getElementById("display");
let errorMessage2 = document.getElementById("error-message2");
let errorMessage3 = document.getElementById("error-message3");
let errorMessage4 = document.getElementById("error-message4");
let submitButton = document.getElementById("submit");


function showError(field, message) {
    field.innerHTML = message;
}
function clearError(field) {
    field.innerHTML = "";
}

function validateName() {
    let nameValue = username.value.trim();
    if (nameValue === "") {
        showError(errorMessage, "Username is required");
        return false;
    } else {
        clearError(errorMessage);
        return true;
    }
}

function validateEmail() {
    let emailValue = email.value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === "") {
        showError(errorMessage2, "Email is required");
        return false;
    } else if (!emailRegex.test(emailValue)) {
        showError(errorMessage2, "Please enter a valid email address");
        return false;
    } else {
        clearError(errorMessage2);
        return true;
    }
}

function validatePassword() {
    let passwordValue = password.value.trim();
    if (passwordValue === "") {
        showError(errorMessage3, "Password is required");
        return false;
    } else if (passwordValue.length < 6) {
        showError(errorMessage3, "Password must be at least 6 characters long");
        return false;
    } else {
        clearError(errorMessage3);
        return true;
    }
}

function validateConfirmPassword() {
    let passwordValue = password.value.trim();
    let confirmPasswordValue = confirmPassword.value.trim();
    if (confirmPasswordValue === "") {
        showError(errorMessage4, "Please confirm your password");
        return false;
    } else if (passwordValue !== confirmPasswordValue) {
        showError(errorMessage4, "Passwords do not match!");
        return false;
    } else {
        clearError(errorMessage4);
        return true;
    }
}

function checkPasswordStrength() {
    let passwordValue = password.value.trim();
    if (passwordValue.length < 8) {
        passwordStrength.innerHTML = "Password is Weak";
        passwordStrength.style.color = "red";
    } else if (passwordValue.length >= 12 && /[A-Za-z]/.test(passwordValue) && /[0-9]/.test(passwordValue)) {
        passwordStrength.innerHTML = "Password is Strong";
        passwordStrength.style.color = "green";
    } else {
        passwordStrength.innerHTML = "Password is Medium";
        passwordStrength.style.color = "orange";
    }
}

function validateForm() {
    let okName = validateName();
    let okEmail = validateEmail();
    let okPassword = validatePassword();
    let okConfirmPassword = validateConfirmPassword();
    return okName && okEmail && okPassword && okConfirmPassword;
}

password.addEventListener("input", checkPasswordStrength);

form.addEventListener("submit", function(event) {
    event.preventDefault();

       result.innerHTML = "";

    if (validateForm()) {
        result.innerHTML = "Form submitted successfully!";
        result.className = "ok";
    } else {
        result.innerHTML = "Please fix the errors above.";
        result.className = "error";
    }
});

submitButton.disabled = true;

function checkFormValidity() {
    if (validateForm()) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

username.addEventListener("input", checkFormValidity);
email.addEventListener("input", checkFormValidity);
password.addEventListener("input", checkFormValidity);
confirmPassword.addEventListener("input", checkFormValidity);



// Load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  displayButton.textContent = "☀️"; // show sun if dark
} else {
  displayButton.textContent = "🌙"; // default moon
}

// Toggle theme on button click
displayButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    displayButton.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    displayButton.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
