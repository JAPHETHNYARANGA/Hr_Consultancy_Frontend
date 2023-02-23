import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {

  private token = localStorage.getItem('token');

  //  private headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
   private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  private apiUrl = "https://api.goldspaceconsulting.co.ke/api";

  constructor(private http:HttpClient) { }

  DeleteUser(id:number):Observable<any>{
    const url =`${this.apiUrl}/deleteuser/${id}`; 
    return this.http.get(url,{headers:this.headers});
  }
}
