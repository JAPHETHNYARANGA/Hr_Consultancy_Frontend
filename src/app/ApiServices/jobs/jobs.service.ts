import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing, ListingResponse } from 'src/app/classes/listings';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private apiUrl = 'https://api.goldspaceconsulting.co.ke/api/allJobs';

  

  constructor(private http: HttpClient) { }

  getListings(): Observable<ListingResponse> {
    return this.http.get<ListingResponse>(this.apiUrl);
  }
}
