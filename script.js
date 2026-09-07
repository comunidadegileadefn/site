const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const settingsBtn = document.getElementById("settingsBtn");
const settingsMenu = document.getElementById("settingsMenu");
const copyPix = document.getElementById("copyPix");
const pixKey = document.getElementById("pixKey");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

document.querySelectorAll("nav > a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
  });
});

settingsBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  settingsMenu.classList.toggle("open");
});

document.addEventListener("click", (event) => {
  if (!settingsMenu.contains(event.target) && !settingsBtn.contains(event.target)) {
    settingsMenu.classList.remove("open");
  }
});

copyPix.addEventListener("click", async () => {
  const key = pixKey.textContent.trim();

  try {
    await navigator.clipboard.writeText(key);
    copyPix.textContent = "PIX copiado!";
    setTimeout(() => copyPix.textContent = "Copiar chave PIX", 1800);
  } catch {
    alert("Chave PIX: " + key);
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
