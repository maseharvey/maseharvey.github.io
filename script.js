const toast = document.getElementById("toast");

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      toast.textContent = `discord copied: ${value}`;
    } catch {
      toast.textContent = `discord: ${value}`;
    }
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1800);
  });
});

const title = document.querySelector("h1");
setInterval(() => {
  if (Math.random() > 0.72) {
    title.style.transform = `translateX(${Math.random() * 2 - 1}px)`;
    setTimeout(() => title.style.transform = "", 90);
  }
}, 900);
