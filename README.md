# form-validation

This is a simple HTML + css +JavaScript project that validates user input for email, country code, postal code, and password. The postal code validation is **country-specific**, ensuring the format matches expected patterns for countries like Switzerland, France, Germany, the Netherlands, and India.

---

## Features

- Validates:
  - Email presence
  - Country code format (e.g., `in`, `ch`, `de`)
  - Postal code based on the selected country
  - Password presence and confirmation
- Country-specific postal code rules
- Real-time error display on form submission

---

## Supported Countries & Formats

| Country     | Code | Valid Postal Code Examples |
| ----------- | ---- | -------------------------- |
| Switzerland | `ch` | `1950`, `CH-1950`          |
| France      | `fr` | `75012`, `F-75012`         |
| Germany     | `de` | `12345`, `D-12345`         |
| Netherlands | `nl` | `1234 AB`, `NL-1234 AB`    |
| India       | `in` | `110001`, `IN-110001`      |

---

## How to Use

1. Open the `index.html` file in your browser.
2. Fill in the form:
   - Enter a valid **email**
   - Enter a supported **country code** (`in`, `fr`, `ch`, `de`, `nl`)
   - Enter a **postal code** based on the country rules
   - Enter and confirm your **password**
3. Click **Submit**
4. Errors (if any) will appear below the form.

---

## Files

- `index.html` – The HTML structure of the form
- `style.css` _(optional)_ – Styling for the form (not included by default)
- `script.js` – JavaScript that handles the validation logic

---

## Example Input

Email: test@example.com
Country: in
Postal Code: 110001
Password: Password123
Confirm Password: Password123
