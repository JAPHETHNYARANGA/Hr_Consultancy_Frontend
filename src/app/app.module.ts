import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BusinessAssistComponent } from './Home/business-assist/business-assist.component';
import { TestimonialsComponent } from './Home/testimonials/testimonials.component';
import { TopBodyComponent } from './Home/top-body/top-body.component';
import { FooterComponent } from './footer/footer.component';
import { AboutTopComponent } from './About/about-top/about-top.component';
import { AboutMissionsComponent } from './About/about-missions/about-missions.component';
import { HomeTemplateComponent } from './Home/home-template/home-template.component';
import { AboutTemplateComponent } from './About/about-template/about-template.component';
import { ServicesTemplateComponent } from './services/services-template/services-template.component';
import { ServicesTopComponent } from './services/services-top/services-top.component';
import { ContactTopComponent } from './contact/contact-top/contact-top.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ContactTemplateComponent } from './contact/contact-template/contact-template.component';
import { JobsTemplateComponent } from './jobs/jobs-template/jobs-template.component';
import { AdminDashboardComponent } from './Administrator/admin-dashboard/admin-dashboard.component';
import { LoginComponentComponent } from './Administrator/login-component/login-component.component';
import { ActivateComponentComponent } from './Administrator/activate-component/activate-component.component';
import { CreateListingComponent } from './Administrator/create-listing/create-listing.component';
import { RegisterUserComponent } from './Administrator/register-user/register-user.component';
import { ClientServicesComponent } from './services/client-services/client-services.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopBodyComponent,
    BusinessAssistComponent,
    TestimonialsComponent,
    FooterComponent,
    AboutTopComponent,
    AboutMissionsComponent,
    HomeTemplateComponent,
    AboutTemplateComponent,
    ServicesTemplateComponent,
    ServicesTopComponent,
    ContactTopComponent,
    ContactFormComponent,
    ContactTemplateComponent,
    JobsTemplateComponent,
    AdminDashboardComponent,
    LoginComponentComponent,
    ActivateComponentComponent,
    CreateListingComponent,
    RegisterUserComponent,
    ClientServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
