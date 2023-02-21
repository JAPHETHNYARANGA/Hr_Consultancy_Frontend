import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/classes/Login';
import { Register } from 'src/app/classes/Register';

@Injectable({
  providedIn: 'root'
})
export class ActivateService {

  private apiUrl="http://127.0.0.1:8000/api/activate"

  constructor(private http:HttpClient) { }

  activateUser(email:String, password:String):Observable<Register>{
    const body ={email:email,password:password};
    return this.http.post<Register>(this.apiUrl, body)
  }
}
