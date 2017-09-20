import { Component } from '@angular/core';

@Component({
  selector: 'timeago',
  templateUrl: './timeago.component.html'
})
export class TimeAgoComponent {

 public currentDate = new Date();

  updateData(event) {
    this.currentDate = new Date();
  }

}
