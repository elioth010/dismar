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
  idComponent = 2;

  constructor(private navigationService: NavigationServiceService) {
    this.subscription = navigationService.notify.subscribe(value => this.changeClass(value));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeClass(taxon) {
    taxon.taxons.forEach(item => {
      if (item.navOld > item.navCurrent) {
        this.nameClass = 'fadeInBottom';
      } else if (item.navOld < item.navCurrent) {
        this.nameClass = 'fadeInTop';
      }
    });
  }

}
