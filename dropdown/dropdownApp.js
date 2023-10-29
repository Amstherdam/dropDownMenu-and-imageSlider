const denem = document.querySelectorAll(".denem");

denem.forEach((e) => {
  let openItem = e.nextElementSibling;

  e.addEventListener("mouseenter", () => {
    openItem.classList.toggle("visible");
  });

  openItem.addEventListener("mouseenter", () => {
    openItem.classList.add("visible");
  });

  /* e.addEventListener("mouseleave", () => {   // if u want use classList.add
    openItem.classList.remove("visible");
  }); */

  openItem.addEventListener("mouseleave", () => {
    openItem.classList.remove("visible");
  });
});
