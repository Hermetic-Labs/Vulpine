"use strict";
(() => {
  const launch = document.querySelector("#open-command");
  if (!launch) return;
  const mode = new URLSearchParams(location.search).get("mode");
  const commandTarget = `./command/${mode === "live" ? "?mode=live" : ""}`;
  launch.href = commandTarget;
  const enter = () => sessionStorage.setItem("vulpine.command.authorized", "1");
  launch.addEventListener("click", enter);
  const continueToCommand = () => {
    if (document.body.dataset.authState !== "authorized") return;
    if (new URLSearchParams(location.search).get("command") === "1") {
      enter();
      location.replace(commandTarget);
    }
  };
  new MutationObserver(continueToCommand).observe(document.body, { attributes: true, attributeFilter: ["data-auth-state"] });
  continueToCommand();
})();
