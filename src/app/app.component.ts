import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand px-5'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
      <li><a class='nav-link'routerLink='/products'>Product List</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `
  //<a [routerLink]= "['/welcome']" >Home</a>
  //<a [routerLink]= "['/products']" >Product List</a>
})
export class AppComponent {
  pageTitle = 'Product Management System';
}
