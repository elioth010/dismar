import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @Output() navigate = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  navigatePosition(position) {
    this.navigate.emit(position);
  }
}
