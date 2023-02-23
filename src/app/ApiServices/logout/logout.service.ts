import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logout } from 'src/app/classes/logout';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  private token = localStorage.getItem('token');

  //  private headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
   private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  private apiUrl = "https://api.goldspaceconsulting.co.ke/api/logout"

  constructor(private http: HttpClient) { }

  logout():Observable<Logout> {
    return this.http.get<Logout>(this.apiUrl,  {headers:this.headers})
    
  }
}
