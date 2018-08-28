import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {NavigationServiceService} from '../../../shared/services/navigation-service.service';
import {Observable} from 'rxjs/Observable';
import {taxonomiList} from '../nav-side/shared/taxonomi-list';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit, OnDestroy {
  @Output() navigate = new EventEmitter<number>();

  subscription;
  nameClass = 'fadeIn';
  taxonList = taxonomiList;
  route = '/contacto';

  constructor(private navigationService: NavigationServiceService) {
    this.subscription = navigationService.notify.subscribe(value => this.changeClass(value));
  }

  ngOnInit() {
    this.taxonList = this.taxonList.filter(obj => obj.id === 4);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeClass(taxon) {
    if (taxon) {
      taxon.taxons.forEach(item => {
        if (item.navOld > item.navCurrent) {
          this.nameClass = 'fadeInTop';
        } else if (item.navOld < item.navCurrent) {
          this.nameClass = 'fadeInBottom';
        }
      });
    }
  }

  navigatePosition(position) {
    this.navigate.emit(position);
    console.log(position)
  }

}
