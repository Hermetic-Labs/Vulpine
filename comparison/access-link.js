(() => {
  const link = document.createElement("a");
  link.className = "vulpine-app-link";
  link.href = "../app/";
  link.textContent = "Open Vulpine";
  link.setAttribute("aria-label", "Open the secure Vulpine operations workspace");
  document.body.appendChild(link);
})();
