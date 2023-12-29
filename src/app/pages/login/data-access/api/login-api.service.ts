import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/common/apis/api.service';

@Injectable()
export class AuthApiService {
  constructor(private api: ApiService) {}

  /**
   * login api
   * @param  {{username:string;password:string}} data
   * @returns Observable
   */
  login(data: { username: string; password: string }): Observable<any> {
    return this.api.post('auth/login', data);
  }

  logout(): Observable<void> {
    return this.api.logOutPost('auth/logout');
  }
}
