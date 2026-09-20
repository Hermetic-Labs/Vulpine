"use strict";
if (sessionStorage.getItem("vulpine.portal.authorized") !== "1" || !sessionStorage.getItem("vulpine.api.access-token")) {
  const destination = location.pathname.split("/").filter(Boolean).at(-1) || "business";
  location.replace(`../?destination=${encodeURIComponent(destination)}`);
}
