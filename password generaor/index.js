function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=";

  let allowedChars = "";

  if (includeLowercase) allowedChars += lowercaseChars;
  if (includeUppercase) allowedChars += uppercaseChars;
  if (includeNumbers) allowedChars += numberChars;
  if (includeSymbols) allowedChars += symbolChars;

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

const generatorButton = document.querySelector(".generator");
generatorButton.addEventListener("click", () => {
  const passwordLength = document.querySelector(".pass-length-class").value;
  const includeLowercase = document.querySelector(".low-case-class").checked;
  const includeUppercase = document.querySelector(".upp-case-class").checked;
  const includeNumbers = document.querySelector(".num-class").checked;
  const includeSymbols = document.querySelector(".sym-class").checked;

  const password = generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );

  // Display the generated password
  const passwordPara = document.querySelector(".p");
  passwordPara.textContent = password;
});
