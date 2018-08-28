import { NgModule } from '@angular/core';

// Components
import {NavigationComponent} from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileDropdownComponent } from './navigation/profile-dropdown/profile-dropdown.component';

// Modules
import { SharedModule } from '../shared/index';
import { RouterModule } from '@angular/router';
import {NavSideComponent} from '../home/content/nav-side/nav-side.component';

@NgModule({
  declarations: [
    // components
    NavigationComponent,
    FooterComponent,
    NavSideComponent,

    // sub components
    ProfileDropdownComponent

    // pipes
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    NavSideComponent,
  ],
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class LayoutModule {}
