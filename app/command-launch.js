"use strict";
(() => {
  const launch = document.querySelector("#open-command");
  if (!launch) return;
  const enter = () => sessionStorage.setItem("vulpine.command.authorized", "1");
  launch.addEventListener("click", enter);
  const continueToCommand = () => {
    if (document.body.dataset.authState !== "authorized") return;
    if (new URLSearchParams(location.search).get("command") === "1") {
      enter();
      location.replace("./command/");
    }
  };
  new MutationObserver(continueToCommand).observe(document.body, { attributes: true, attributeFilter: ["data-auth-state"] });
  continueToCommand();
})();
