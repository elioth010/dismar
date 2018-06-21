import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationServiceService} from '../../shared/services/navigation-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  subscription;
  nameClass;
  idComponent = 4;

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

}
