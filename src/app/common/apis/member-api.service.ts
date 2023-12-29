import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable()
export class MemberApiService {
  constructor(private api: ApiService) {}

  getMemberById(id: string): Observable<any> {
    return this.api.get(`member/${id}`);
  }
}
