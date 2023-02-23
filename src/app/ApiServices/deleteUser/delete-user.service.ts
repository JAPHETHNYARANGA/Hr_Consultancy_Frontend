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

  private apiUrl = "http://127.0.0.1:8000/api";

  constructor(private http:HttpClient) { }

  DeleteUser(id:number):Observable<any>{
    const url =`${this.apiUrl}/deleteuser/${id}`; 
    return this.http.get(url,{headers:this.headers});
  }
}
