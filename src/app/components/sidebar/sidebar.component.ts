import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  includeInMenu: boolean;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'fas fa-chart-bar text-blue',
    class: '',
    includeInMenu: true,
  },
  {
    path: '/contributions',
    title: 'Contributions',
    icon: 'fas fa-money-bill-alt text-success',
    class: '',
    includeInMenu: true,
  },
  {
    path: '/contributions/add',
    title: 'Add Contribution',
    icon: 'fas fa-money-bill-alt text-success',
    class: '',
    includeInMenu: false,
  },
  {
    path: '/loans',
    title: 'Loans',
    icon: 'fas fa-hand-holding-usd text-orange',
    class: '',
    includeInMenu: true,
  },
  {
    path: '/loan-payments',
    title: 'Loan Payments',
    icon: 'fas fa-file-invoice-dollar text-primary',
    class: '',
    includeInMenu: true,
  },
  {
    path: '/members',
    title: 'Members',
    icon: 'fas fa-users text-yellow',
    class: '',
    includeInMenu: true,
  },
  {
    path: '/settings',
    title: 'Settings',
    icon: 'ni-settings-gear-65 text-red',
    class: '',
    includeInMenu: true,
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
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
