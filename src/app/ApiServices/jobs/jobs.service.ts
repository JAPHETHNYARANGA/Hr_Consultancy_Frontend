import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing, ListingResponse } from 'src/app/classes/listings';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private apiUrl = 'http://127.0.0.1:8000/api/allJobs';

  

  constructor(private http: HttpClient) { }

  getListings(): Observable<ListingResponse> {
    return this.http.get<ListingResponse>(this.apiUrl);
  }
}
