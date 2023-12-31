import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject, takeUntil } from 'rxjs';
import {
  authErrorMessageSelector,
  isLoadingSelector,
} from 'src/app/common/store/selectors/auth.selector';
import { AppStateInterface } from 'src/app/common/store/state-interfaces/app-state.interface';
import * as AuthAction from '../../../common/store/actions/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private unsusbcribe$ = new Subject<void>();

  loginForm: FormGroup;

  isLoading$: Observable<boolean>;

  test: string = '';

  constructor(
    private store: Store<AppStateInterface>,
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });

    this.authErrorObserver();
  }

  login(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) return;

    this.store.dispatch(AuthAction.loginAction(this.loginForm.value));
  }

  private authErrorObserver(): void {
    this.store
      .pipe(select(authErrorMessageSelector), takeUntil(this.unsusbcribe$))
      .subscribe({
        next: (errorMessage) => errorMessage && this.toastr.error(errorMessage),
      });
  }

  ngOnDestroy() {
    this.unsusbcribe$.next();
    this.unsusbcribe$.complete();
  }
}
