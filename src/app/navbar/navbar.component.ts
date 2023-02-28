import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showNavbar = true;

  @ViewChild('myDiv')
  myDiv!: ElementRef;
  isClickable: boolean = false;

  ngOnInit() {
    if (window.innerHeight > this.myDiv.nativeElement.offsetHeight) {
      this.isClickable = true;
    }
  }
  
  myMethod() {
    this.showNavbar = !this.showNavbar;
  }

 
}
