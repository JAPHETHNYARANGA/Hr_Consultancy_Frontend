import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from 'src/app/classes/Register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl="http://127.0.0.1:8000/api/register";

  constructor(private http:HttpClient){}

  registerUser(email:String):Observable<Register>{
    const body = {email:email};
    return this.http.post<Register>(this.apiUrl, body)
  }
}
