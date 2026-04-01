document.getElementById("y").textContent = new Date().getFullYear();

const header = document.querySelector("header.sticky-top");
if (header) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
      header.classList.add("scrolled");
    } else if (window.scrollY < 20) {
      header.classList.remove("scrolled");
    }
  });
}
