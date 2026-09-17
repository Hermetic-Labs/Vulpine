"use strict";
(() => {
  const live = new URLSearchParams(location.search).get("mode") === "live";
  if (!live) return;

  document.documentElement.dataset.brandMode = "live";
  document.title = "Seven Miles Medical Logistics";
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = "Secure Seven Miles medical logistics workspace.";

  const brand = document.querySelector(".brand");
  if (brand) {
    brand.href = "./?mode=live";
    brand.setAttribute("aria-label", "Seven Miles Medical Logistics workspace");
  }
  const logo = document.querySelector(".brand img");
  if (logo) {
    logo.src = "../seven-miles-logo.png";
    logo.alt = "Seven Miles Medical Logistics";
  }
  const brandName = document.querySelector(".brand strong");
  if (brandName) brandName.textContent = "Seven Miles";
  const brandDetail = document.querySelector(".brand small");
  if (brandDetail) brandDetail.textContent = "Medical Logistics";

  const rewriteText = (root) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.data.includes("Vulpine")) node.data = node.data.replaceAll("Vulpine", "Seven Miles");
      if (node.data.includes("VULPINE")) node.data = node.data.replaceAll("VULPINE", "SEVEN MILES");
    }
  };

  rewriteText(document.body);
  document.querySelectorAll('a[href*="comparison"]').forEach((link) => {
    link.href = "./?mode=live";
    link.textContent = link.classList.contains("brand") ? link.textContent : "Operations home";
  });

  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "characterData" && mutation.target.data.includes("Vulpine")) {
        mutation.target.data = mutation.target.data.replaceAll("Vulpine", "Seven Miles");
      }
      mutation.addedNodes.forEach((node) => rewriteText(node));
    }
  }).observe(document.body, { subtree: true, childList: true, characterData: true });
})();
