const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide"),
  mainContent = document.querySelector(".main-content");

// Open login form when clicking the login button
console.log("JavaScript is running!");
formOpenBtn.addEventListener("click", () => {
  console.log("Login button clicked!");
  home.classList.add("show");
  mainContent.classList.add("blur");
  formContainer.style.display = "block";
});
formCloseBtn.addEventListener("click", () => {
  console.log("Close button clicked!");
  home.classList.remove("show");
  mainContent.classList.remove("blur");
  formContainer.style.display = "none"; // Hide the form container
});

// Toggle password visibility
// pwShowHide.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     let getPwInput = icon.previousElementSibling; // Get the input field before the icon
//     if (getPwInput.type === "password") {
//       getPwInput.type = "text";
//       icon.classList.replace("fa-eye-slash", "fa-eye"); // Change to eye
//     } else {
//       getPwInput.type = "password";
//       icon.classList.replace("fa-eye", "fa-eye-slash"); // Change back to eye-slash
//     }
//   });
// });

// Toggle between login and signup forms
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});
