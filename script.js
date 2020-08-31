document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navItem = document.querySelectorAll(".primary-navigation a");
  navItem.forEach(function (elem) {
    elem.addEventListener("click", function () {
      menuToggle.checked = false;
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const yOffset = -30;
      const element = document.querySelector(this.getAttribute("href"));
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
});
