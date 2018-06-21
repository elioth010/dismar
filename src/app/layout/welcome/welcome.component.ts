import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {NavigationServiceService} from "../../shared/services/navigation-service.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomeComponent implements OnInit, OnDestroy {
  @Output() navigate = new EventEmitter<number>();

  subscription;
  nameClass = 'fadeIn';
  idComponent = 1;

  constructor(private navigationService: NavigationServiceService) {
    this.subscription = navigationService.notify.subscribe(value => this.changeClass(value));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeClass(taxon) {
    console.log(this.idComponent)
    console.log(taxon)
  }


  navigatePosition(position) {
    this.navigate.emit(position);
  }
}
