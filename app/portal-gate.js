"use strict";
if (sessionStorage.getItem("vulpine.portal.authorized") !== "1" || !sessionStorage.getItem("vulpine.api.access-token")) {
  const destination = location.pathname.split("/").filter(Boolean).at(-1) || "command";
  const mode = new URLSearchParams(location.search).get("mode");
  location.replace(`../?destination=${encodeURIComponent(destination)}${destination === "command" && mode === "live" ? "&mode=live" : ""}`);
}
