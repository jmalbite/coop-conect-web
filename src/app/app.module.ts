import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app.routing';
import { ApiService } from './common/apis/api.service';
import { MemberApiService } from './common/apis/member-api.service';
import { AuthEffects } from './common/store/effect/auth.effect';
import { authReducers } from './common/store/reducers/auth.reducer';
import { ComponentsModule } from './components/components.module';
import { AuthApiService } from './pages/login/data-access/api/login-api.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    StoreModule.forRoot({ auth: authReducers }),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  declarations: [AppComponent, AdminLayoutComponent],
  providers: [ApiService, AuthApiService, MemberApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
