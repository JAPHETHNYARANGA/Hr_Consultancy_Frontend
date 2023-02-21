import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobsService } from 'src/app/ApiServices/jobs/jobs.service';
import { Listing } from 'src/app/classes/listings';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  listings : Listing[] = [];

  constructor(private router:Router ,private jobsService:JobsService){}

  ngOnInit(): void{
      this.jobsService.getListings().subscribe(response =>{
        this.listings = response.listings
      })
  }

  navigateToNewListing(){
    this.router.navigate(['/createListing'], {replaceUrl:true});
  }

  navigateToDashBoard(){
    this.router.navigate(['/dashboard'], {replaceUrl:true});
  }

  navigateToRegister(){
    this.router.navigate(['/registerUser'],{replaceUrl:true});
  }
}
