import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.scss'],
})
export class ContributionsComponent {
  private currentDate = moment();

  defaultRange: Date[] = [
    this.currentDate.startOf('month').toDate(),
    this.currentDate.endOf('month').toDate(),
  ];

  constructor(private router: Router) {}

  addContribution(): void {
    this.router.navigate(['/contributions/add']);
  }
}
