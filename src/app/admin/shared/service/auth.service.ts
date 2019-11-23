import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  get token(): string {
    return '';
  }

  // @ts-ignore
  login(user: User): Observable<any> {
    this.http.post('', user);
  }

  logout() {
  }

  isAuthicated(): boolean {
    return !!this.token;
  }

  private setToken() {

  }
}
