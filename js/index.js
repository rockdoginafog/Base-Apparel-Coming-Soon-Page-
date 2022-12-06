const form = document.querySelector("#form");
const email = document.querySelector(".email");
const mainPage = document.querySelector(".main-page");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (regEx.test(email.value)) {
    mainPage.classList.add("hide");
    document.getElementById("confirmation-container").removeAttribute("hidden");
  } else {
  }
  document.getElementById("error-message").style.opacity = "1";
});
