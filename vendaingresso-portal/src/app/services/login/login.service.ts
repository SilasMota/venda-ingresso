import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/User';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrlstatic = "http://localhost:3000/login";
  private apiUrl = "http://localhost:8080/api/v1/login";
  constructor(private http: HttpClient) { }

  login(user: User):Observable<User[]> {
    console.log(`${this.apiUrl}/?login=${user.login}&password=${user.password}`);
    return this.http.get<User[]>(`${this.apiUrl}/?login=${user.login}&password=${user.password}`);
  }

  registerUser(user: User):Observable<User[]> {
    return this.http.post<User[]>(`${this.apiUrl}`,user);
  }
}
