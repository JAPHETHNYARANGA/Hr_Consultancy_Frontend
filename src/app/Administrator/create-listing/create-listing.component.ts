import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PostJobsService } from 'src/app/ApiServices/postJobs/post-jobs.service';
import { AuthenticatedUserService } from 'src/app/ApiServices/UserAuthentication/authenticated-user.service';
import { Listing } from 'src/app/classes/listings';
import { PostJob } from 'src/app/classes/post-job';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.css']
})
export class CreateListingComponent implements OnInit {

  requirements:string='';
  tasks:string='';
  benefits:string='';
  name:string='';
  logo:string='';
  salary:number=0;

  constructor(private router:Router,private postJobsService:PostJobsService, public authenticatedUser:AuthenticatedUserService){}

  ngOnInit(): void {
    if(!this.authenticatedUser.isAuthenticated()){
      this.router.navigate([''], {replaceUrl:true});
    }
  }
  AddListing(){
      this.postJobsService.CreateListing(this.requirements, this.tasks, this.benefits, this.name, this.logo, this.salary)
      .subscribe((response:PostJob)=>{
        if(response.success){
          this.router.navigate(['/dashboard']);
          console.log(response.message)
        }else{
          
          console.log("failed")
        }
      })

  }


  backToHome(){
    this.router.navigate(['/dashboard'], {replaceUrl:true})
  }
  
}
