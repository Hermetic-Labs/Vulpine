"use strict";
if (sessionStorage.getItem("vulpine.command.authorized") !== "1" || !sessionStorage.getItem("vulpine.api.access-token")) {
  const mode = new URLSearchParams(location.search).get("mode");
  location.replace(`../?command=1${mode === "live" ? "&mode=live" : ""}`);
}
