import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutTemplateComponent } from './About/about-template/about-template.component';


import { ActivateComponentComponent } from './Administrator/activate-component/activate-component.component';
import { AdminDashboardComponent } from './Administrator/admin-dashboard/admin-dashboard.component';
import { CreateListingComponent } from './Administrator/create-listing/create-listing.component';
import { LoginComponentComponent } from './Administrator/login-component/login-component.component';
import { RegisterUserComponent } from './Administrator/register-user/register-user.component';



import { ContactTemplateComponent } from './contact/contact-template/contact-template.component';
import { HomeTemplateComponent } from './Home/home-template/home-template.component';
import { JobsTemplateComponent } from './jobs/jobs-template/jobs-template.component';
import { ServicesTemplateComponent } from './services/services-template/services-template.component';

const routes: Routes = [
  {path:'',component:HomeTemplateComponent},
  {path:'about', component:AboutTemplateComponent},
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'services', component:ServicesTemplateComponent},
  {path:'contact', component:ContactTemplateComponent},
  {path:'jobs', component:JobsTemplateComponent},
  {path:'login', component:LoginComponentComponent},
  {path:'activate', component:ActivateComponentComponent},
  {path:'dashboard', component:AdminDashboardComponent},
  {path:'createListing', component:CreateListingComponent},
  {path:'registerUser', component:RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
