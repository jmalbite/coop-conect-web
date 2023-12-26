import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "fas fa-chart-bar text-blue",
    class: "",
  },
  {
    path: "/icons",
    title: "Contributions",
    icon: "fas fa-hand-holding-usd text-success",
    class: "",
  },
  {
    path: "/maps",
    title: "Loan Payments",
    icon: "fas fa-receipt text-orange",
    class: "",
  },
  {
    path: "/user-profile",
    title: "Members",
    icon: "fas fa-users text-yellow",
    class: "",
  },
  {
    path: "/tables",
    title: "Settings",
    icon: "ni-settings-gear-65 text-red",
    class: "",
  },
  // { path: "/login", title: "Login", icon: "ni-key-25 text-info", class: "" },
  // {
  //   path: "/register",
  //   title: "Register",
  //   icon: "ni-circle-08 text-pink",
  //   class: "",
  // },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
