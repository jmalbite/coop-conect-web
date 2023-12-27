import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginApiService } from '../data-access/api/login-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginApiService],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private login: LoginApiService) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
