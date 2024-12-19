// implement sticky header
window.addEventListener("DOMContentLoaded", () => {
  // clear textarea when page loaded
  const textarea = document.querySelector("textarea");
  if (textarea) {
    textarea.innerText = "";
  }

  const header = document.querySelector("header");
  const goTopArrow = document.querySelector("#go-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("sticky");
    } else if (window.scrollY === 0) {
      header.classList.remove("sticky");
    }

    if (goTopArrow) {
      if (window.scrollY >= 500) {
        goTopArrow.classList.remove("hidden");
      } else if (window.scrollY < 500) {
        goTopArrow.classList.add("hidden");
      }
    }
    goTopArrow.addEventListener("click", (e) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });

  // hamburger btn functionality
  const hamBtn = document.querySelector(".btn--hamburger");
  const navList = document.querySelector(".nav-list");
  hamBtn.addEventListener("click", () => {
    navList.classList.toggle("open");
  })
});
