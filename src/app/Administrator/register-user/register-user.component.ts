
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/ApiServices/Register/register.service';
import { UserService } from 'src/app/ApiServices/User/user.service';
import { DeleteUser } from 'src/app/classes/delete-user';
import { Register } from 'src/app/classes/Register';
import { User, UserListing } from 'src/app/classes/user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent implements OnInit {

  users : UserListing[] = [];
  email:string= '';

  // deleteUsers!: DeleteUser;

  constructor(private router:Router, private registerService:RegisterService, private usersService:UserService){}

  @ViewChild('myForm')
  form!: ElementRef;
  isFormVisible = false;

  toggleForm(){
    if(this.isFormVisible){
      this.form.nativeElement.style.display = 'none';
    }else{
      this.form.nativeElement.style.display = 'block';
    }
    this.isFormVisible = !this.isFormVisible;
  }

  navigateToDashBoard(){
    this.router.navigate(['/dashboard'], {replaceUrl:true});
  }

  navigateToRegister(){
    this.router.navigate(['/registerUser'],{replaceUrl:true});
  }


  registerUser(){
    this.registerService.registerUser(this.email).subscribe((response:Register)=>{
      if(response.success == true){
        this.router.navigate(['/registerUser']);
      }else{
        console.log(response.message)
      }
    })
  }

  

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(response =>{
        this.users = response.users 
    });
  }

  // deleteUser(User:User){
  //   this.usersService.deleteUser().subscribe(
  //     ()=>{

  //     },
  //     (error) =>{

  //     }
  //   );
  // }

}
