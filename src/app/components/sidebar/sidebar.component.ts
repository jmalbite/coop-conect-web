import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'fas fa-chart-bar text-blue',
    class: '',
  },
  {
    path: '/contributions',
    title: 'Contributions',
    icon: 'fas fa-money-bill-alt text-success',
    class: '',
  },
  {
    path: '/loans',
    title: 'Loans',
    icon: 'fas fa-hand-holding-usd text-orange',
    class: '',
  },
  {
    path: '/loan-payments',
    title: 'Loan Payments',
    icon: 'fas fa-file-invoice-dollar text-primary',
    class: '',
  },
  {
    path: '/members',
    title: 'Members',
    icon: 'fas fa-users text-yellow',
    class: '',
  },
  {
    path: '/settings',
    title: 'Settings',
    icon: 'ni-settings-gear-65 text-red',
    class: '',
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
