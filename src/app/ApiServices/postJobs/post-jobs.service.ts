import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostJob } from 'src/app/classes/post-job';
// import { Listing } from 'src/app/classes/listings';

@Injectable({
  providedIn: 'root'
})
export class PostJobsService {

  private token = localStorage.getItem('token');

  //  private headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
   private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  private apiUrl = "https://api.goldspaceconsulting.co.ke/api/addJob";

  constructor(private http:HttpClient){}

  CreateListing(position:string, requirements:string, benefits:string,
     tasks:string,name:string, salary:number):Observable<PostJob>{
      const body = {position:position, requirements:requirements, benefits:benefits,
      tasks:tasks, name:name, salary:salary};
      return this.http.post<PostJob>(this.apiUrl, body, {headers:this.headers})
     }
}
