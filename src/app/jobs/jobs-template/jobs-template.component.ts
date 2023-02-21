import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/ApiServices/jobs/jobs.service';
import { Todo } from 'src/app/classes/Jobs';
import { Listing, ListingResponse } from 'src/app/classes/listings';

@Component({
  selector: 'app-jobs-template',
  templateUrl: './jobs-template.component.html',
  styleUrls: ['./jobs-template.component.css']
})
export class JobsTemplateComponent implements OnInit {

  listings : Listing[] = [];
  // someData:any;
  //  constructor(private jobsService:JobsService){}

  //  ngOnInit():void{
  //   this.jobsService.getJobs().subscribe(jobs=> {
  //     this.someData = jobs;
  //   })
  //  }
  

  constructor(private jobsService: JobsService){}

 ngOnInit(): void {
   this.jobsService.getListings().subscribe(response =>{
    this.listings= response.listings
   })
 }
    
}
