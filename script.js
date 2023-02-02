const selector = document.querySelector(".toggle");
const value = document.querySelector(".cards");

selector.addEventListener("change", () => {
  value.classList.toggle("show-monthly");
});
