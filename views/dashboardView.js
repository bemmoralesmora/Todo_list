import { headerComponent } from "../components/header/headerComponent.js";
import { footerComponent } from "../components/footer/footerComponent.js";
function dashboard() {
  let dashboard = document.querySelector("#dashboard");
  dashboard.className = "dashboard";

  dashboard.appendChild(headerComponent());
  dashboard.appendChild(footerComponent());
  return dashboard;
}

dashboard();
