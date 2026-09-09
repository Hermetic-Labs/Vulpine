"use strict";
if (sessionStorage.getItem("vulpine.command.authorized") !== "1") {
  location.replace("../?command=1");
}
