const email = document.getElementById("email");
const country = document.getElementById("country");
const postalCode = document.getElementById("postalcode");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("passwordconfirm");
const form = document.getElementById("form");
const error = document.getElementById("error");

const constraints = {
  ch: [
    "^(CH-)?\\d{4}$",
    "Swiss postal codes must have exactly 4 digits: e.g. CH-1950 or 1950",
  ],
  fr: [
    "^(F-)?\\d{5}$",
    "French postal codes must have exactly 5 digits: e.g. F-75012 or 75012",
  ],
  de: [
    "^(D-)?\\d{5}$",
    "German postal codes must have exactly 5 digits: e.g. D-12345 or 12345",
  ],
  nl: [
    "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
    "Dutch postal codes must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
  ],
  in: [
    "^(IN-)?\\d{6}$",
    "Indian postal codes must have exactly 6 digits: e.g. IN-110001 or 110001",
  ],
};

form.addEventListener("submit", (e) => {
  let message = [];

  const constraint = constraints[countryCode];

  // Email check
  if (!email.value) {
    message.push("Email is required");
  }

  // Country code check
  if (!constraint) {
    message.push("Please enter a valid country code: CH, FR, DE, NL, IN");
  } else {
    const [pattern, postalError] = constraint;
    const regex = new RegExp(pattern, "i"); // case-insensitive
    if (!regex.test(postalCode.value)) {
      message.push(postalError);
    }
  }

  // Password check
  if (!password.value) {
    message.push("Password is required");
  }

  // Confirm password check
  if (password.value && confirmPassword.value !== password.value) {
    message.push("Passwords do not match");
  }

  // Display errors if any
  if (message.length > 0) {
    e.preventDefault();
    error.innerText = message.join(", ");
  }
});
