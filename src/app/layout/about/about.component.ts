import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationServiceService} from "../../shared/services/navigation-service.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit, OnDestroy {

  subscription;
  nameClass;

  constructor(private navigationService: NavigationServiceService) {
    this.subscription = navigationService.notify.subscribe(value => this.changeClass(value));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeClass(taxon) {
    if (taxon < 4) {
      this.nameClass = 'fadeInBottom';
      console.log(this.nameClass);
    } else if (taxon > 1) {
      this.nameClass = 'fadeInTop';
      console.log(this.nameClass)
    }
    console.log(taxon)
  }

}
