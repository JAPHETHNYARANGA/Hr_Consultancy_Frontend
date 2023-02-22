import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logout } from 'src/app/classes/logout';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  

  private apiUrl = "http://127.0.0.1:8000/api/logout"

  constructor(private http: HttpClient) { }

  logout():Observable<Logout> {
    return this.http.get<Logout>(this.apiUrl)
    
  }
}
