import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteUser } from 'src/app/classes/delete-user';
import { User } from 'src/app/classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private token = localStorage.getItem('token');

  //  private headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
   private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });
   

   private apiUrl = 'https://api.goldspaceconsulting.co.ke/api/users' ;
  

  // private deleteUserapiUrl = 'http://127.0.0.1:8000/api/deleteUser/${id}';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User>{
    return this.http.get<User>(this.apiUrl, {headers:this.headers})
  }

  // deleteUser():Observable<DeleteUser>{
  //   return this.http.get<DeleteUser>(this.deleteUserapiUrl)
  // }
}
