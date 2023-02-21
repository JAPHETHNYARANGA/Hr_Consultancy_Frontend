import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivateService } from 'src/app/ApiServices/Activate/activate.service';
import { Register } from 'src/app/classes/Register';

@Component({
  selector: 'app-activate-component',
  templateUrl: './activate-component.component.html',
  styleUrls: ['./activate-component.component.css']
})
export class ActivateComponentComponent {

    email:String='';
    password:String='';

    constructor(private router:Router, private activateService:ActivateService){}

    
    register(){
        this.activateService.activateUser(this.email, this.password)
        .subscribe((response:Register) =>{
          if(response.success == true){
            this.router.navigate(['/login'])
            console.log(response)
          }else{
            console.log(response)
          }
        })
    }

    navigateToLogin(){
      this.router.navigate(['/login'], {replaceUrl:true});
    }
}
