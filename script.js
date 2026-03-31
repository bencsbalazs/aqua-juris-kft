document.getElementById("y").textContent = new Date().getFullYear();

const navbar = document.querySelector(".navbar");
if (navbar) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
      navbar.classList.add("scrolled");
    } else if (window.scrollY < 20) {
      navbar.classList.remove("scrolled");
    }
  });
}
