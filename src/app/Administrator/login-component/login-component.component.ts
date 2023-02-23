import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/ApiServices/Login/login.service';
import { Login } from 'src/app/classes/Login';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  email:string = '';
  password:string= '';
    constructor(private router:Router, private loginService:LoginService){};
   
  

    login(){
      this.loginService.loginUser(this.email, this.password)
      .subscribe((response:Login) =>{
        localStorage.setItem('token', response.token);
        if(response.success==true){
          this.router.navigate(['/dashboard']);
          console.log(response);
        }else{
          console.log(response);
        }
      })
      
      
    }
    
    navigateToRegister(){
      this.router.navigate(['/activate'], {replaceUrl:true});
      
    }

}
