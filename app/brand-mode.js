"use strict";
(() => {
  const replacements = [
    [/VULPINE/g, "HERMETIC LABS"],
    [/Vulpine/g, "Hermetic Labs Courier"],
    [/SEVEN MILES(?: MEDICAL LOGISTICS)?/g, "HERMETIC LABS COURIER"],
    [/Seven Miles(?: Medical Logistics)?/g, "Hermetic Labs Courier"],
  ];

  const rewriteText = (root) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      for (const [pattern, replacement] of replacements) {
        node.data = node.data.replace(pattern, replacement);
      }
    }
  };

  document.title = "Hermetic Labs Courier";
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = "Secure Hermetic Labs courier operations workspace.";
  rewriteText(document.body);

  document.querySelectorAll('a[href*="comparison"]').forEach((link) => {
    link.href = "./?destination=business";
    if (!link.classList.contains("brand")) link.remove();
  });

  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "characterData") {
        for (const [pattern, replacement] of replacements) {
          mutation.target.data = mutation.target.data.replace(pattern, replacement);
        }
      }
      mutation.addedNodes.forEach((node) => rewriteText(node));
    }
  }).observe(document.body, { subtree: true, childList: true, characterData: true });
})();
