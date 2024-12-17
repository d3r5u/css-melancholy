// implement sticky header
window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
      header.classList.add("sticky");
    }else if(window.scrollY === 0){
      header.classList.remove("sticky");
    }
  });
})