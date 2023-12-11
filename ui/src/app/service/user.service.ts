import { Injectable } from '@angular/core';
import { Observable, throwError, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  login(username: string, password: string ): Observable<any> {
    const url = `${baseUrl}/auth`
    return this.httpClient.post(url, {username, password});

  }

  singup(name: string, username: string, password: string): Observable<any> {
    const url = `${baseUrl}/create-user`
    return this.httpClient.post(url, {name, username, password});
  }

  getAllUserDetails(): Observable<any> {
    const url = `${baseUrl}/user-details`
    return this.httpClient.get(url);
  }
}
