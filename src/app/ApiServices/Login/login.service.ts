import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/classes/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl="https://api.goldspaceconsulting.co.ke/api/login"

  constructor(private http:HttpClient) { }

  loginUser(email:string, password:string):Observable<Login>{
    const body = {email:email, password:password};
    return this.http.post<Login>(this.apiUrl,body);
  }
}
