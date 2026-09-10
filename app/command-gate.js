"use strict";
if (sessionStorage.getItem("vulpine.command.authorized") !== "1" || !sessionStorage.getItem("vulpine.api.access-token")) {
  location.replace("../?command=1");
}
