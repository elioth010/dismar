import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationServiceService} from '../shared/services/navigation-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],

})
export class ProductComponent implements OnInit, OnDestroy {

  subscription;
  nameClass;
  idComponent = 3;

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
