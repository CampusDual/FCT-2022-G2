import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-users',
  templateUrl: './events-users.component.html',
  styleUrls: ['./events-users.component.css']
})
export class EventsUsersComponent implements OnInit {
insertMode:boolean
  constructor() {}

  ngOnInit() {
  }

  isInInsertMode() {
    this.insertMode = true
  }
}
