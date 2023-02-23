import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteListingsService } from 'src/app/ApiServices/delete-listings/delete-listings.service';
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

  @ViewChild('sidebar')
  sidebar!: ElementRef;
  @ViewChild('sidebarCollapse')
  sideBarCollapse!: ElementRef;

  listings : Listing[] = [];


  constructor(private router:Router ,private jobsService:JobsService,
     public authenticatedUser:AuthenticatedUserService, private logoutService:LogoutService,
      private deleteListings:DeleteListingsService, private renderer:Renderer2){}

     loadListings(){
      this.jobsService.getListings().subscribe(response =>{
        this.listings = response.listings
      })
    }

  ngOnInit(): void{

    if(!this.authenticatedUser.isAuthenticated()){
      this.router.navigate([''], {replaceUrl:true});
    }

    this.loadListings()
    
  }

  collapseSideBar(){
    // const sidebarCollapse = this.renderer.selectRootElement('#sidebarCollapse');
    // const sidebar = this.renderer.selectRootElement('#sidebar');
  
    // // this.renderer.listen(sidebarCollapse, 'click', () => {
    // //   this.renderer.addClass(sidebar, 'active');
    // // });
    // this.sidebar.nativeElement.addClass(sidebar,'active')
    
    console.log('toggle')
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

  

  deleteListing(id:number){
      this.deleteListings.deleteJobs(id).subscribe(()=>{
        // this.location.reload();
  
       this.loadListings()
      })
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
