import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import * as dev from 'src/environments/environment';
import * as prod from 'src/environments/environment.prod';

@Injectable()
export class ApiService {
  private root!: string;

  constructor(private http: HttpClient) {
    environment.production
      ? (this.root = prod.environment.coop_prod_api)
      : (this.root = dev.environment.coop_localhost_api);
  }

  /**
   * set up headers
   * @returns HttpHeaders
   */
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  /**
   * get request api with headers
   * @param  {string} endpoint
   * @returns Observable
   */
  get(endpoint: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.root}/${endpoint}`, { headers });
  }

  /**
   * post request api with headers
   * @param  {string} endpoint
   * @param  {any} params
   * @returns Observable
   */
  post(endpoint: string, params: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(`${this.root}/${endpoint}`, params, { headers });
  }

  /**
   * patch request api with headers
   * @param  {string} endpoint
   * @param  {any} params
   * @returns Observable
   */
  patch(endpoint: string, params: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.patch(`${this.root}/${endpoint}`, params, { headers });
  }
}
