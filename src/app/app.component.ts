import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public currentDate = new Date();
  users = [
    { name: 'Jilles', age: 21 },
    { name: 'Todd', age: 24 },
    { name: 'Lisa', age: 18 },
    { name: 'John', age: 13 },
    { name: 'Alisha', age: 21 },
    { name: 'Ashley', age: 27 },
    { name: 'Darren', age: 23 },
    { name: 'Abraham', age: 32 }
  ];

}
