  document.querySelectorAll("[data-scroll]").forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.scroll;
      const target = document.getElementById(targetId);
      if (!target) return;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

document.body.classList.add("no-scroll");

setTimeout(() => {
  const opening = document.getElementById("opening");

  opening.classList.add("hide");

  document.body.classList.remove("no-scroll");

  setTimeout(() => {
    opening.remove();
  }, 1500);

}, 6500);