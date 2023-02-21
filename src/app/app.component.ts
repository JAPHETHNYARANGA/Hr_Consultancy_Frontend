import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hr_consultacy';
  showNavbar = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = this.shouldShowNavbar(event.url);
      }
    });
  }

  shouldShowNavbar(url: string): boolean {
    // You can add the routes you want to hide the navbar here
    return !['/login', '/activate','/dashboard', '/side', '/createListing','/registerUser'].includes(url);
  }
}
