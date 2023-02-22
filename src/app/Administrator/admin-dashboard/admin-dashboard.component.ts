import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobsService } from 'src/app/ApiServices/jobs/jobs.service';
import { LogoutService } from 'src/app/ApiServices/logout/logout.service';
import { AuthenticatedUserService } from 'src/app/ApiServices/UserAuthentication/authenticated-user.service';
import { Listing } from 'src/app/classes/listings';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  listings : Listing[] = [];

  constructor(private router:Router ,private jobsService:JobsService, public authenticatedUser:AuthenticatedUserService, private logoutService:LogoutService){}

  ngOnInit(): void{

    if(!this.authenticatedUser.isAuthenticated()){
      this.router.navigate([''], {replaceUrl:true});
    }

    
    

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

  redirectToHome(){
    this.router.navigate([''], {replaceUrl:true});
  }

  logout(){
    
    this.logoutService.logout().subscribe(response =>{
      if(response.success == true){
        localStorage.removeItem('token');
        this.router.navigate([''], {replaceUrl:true});
      }
    })
  }
 
}
