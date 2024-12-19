// implement sticky header
window.addEventListener("DOMContentLoaded", () => {
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

  // clear textarea
});
