import { headerComponent } from "../components/header/headerComponent.js";
function dashboard() {
  let dashboard = document.querySelector("#dashboard");
  dashboard.className = "dashboard";

  dashboard.appendChild(headerComponent());
  return dashboard;
}

dashboard();
