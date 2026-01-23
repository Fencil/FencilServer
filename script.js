document.querySelectorAll(".copy-ip").forEach(btn => {
  btn.addEventListener("click", () => {
    const ip = btn.closest(".server-card")
      .querySelector(".server-meta span").innerText.replace("IP: ", "");

    navigator.clipboard.writeText(ip);
    btn.innerText = "Copied!";
    setTimeout(() => btn.innerText = "Copy IP", 1500);
  });
});

document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  document.querySelectorAll(".server-card").forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(value)
      ? "block"
      : "none";
  });
});
