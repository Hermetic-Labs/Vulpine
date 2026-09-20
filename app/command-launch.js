"use strict";
(() => {
  const launch = document.querySelector("#open-command");
  if (!launch) return;
  const parameters = new URLSearchParams(location.search);
  const requested = parameters.get("destination");
  const destination = ["command", "business", "client"].includes(requested) ? requested : "command";
  const mode = parameters.get("mode");
  const target = `./${destination}/${destination === "command" && mode === "live" ? "?mode=live" : ""}`;
  const labels = { command: "Open operations command", business: "Open courier launch control", client: "Open client portal" };
  launch.href = target;
  launch.textContent = labels[destination];
  const enter = () => sessionStorage.setItem("vulpine.portal.authorized", "1");
  launch.addEventListener("click", enter);
  const continueToTarget = () => {
    if (document.body.dataset.authState !== "authorized") return;
    if (parameters.get("command") === "1" || requested) {
      enter();
      location.replace(target);
    }
  };
  new MutationObserver(continueToTarget).observe(document.body, { attributes: true, attributeFilter: ["data-auth-state"] });
  continueToTarget();
})();
