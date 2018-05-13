import { NgModule } from '@angular/core';

// Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileDropdownComponent } from './header/profile-dropdown/profile-dropdown.component';

// Modules
import { SharedModule } from '../shared/index';
import { RouterModule } from '@angular/router';
import {NavSideComponent} from './nav-side/nav-side.component';

@NgModule({
  declarations: [
    // components
    HeaderComponent,
    FooterComponent,
    NavSideComponent,

    // sub components
    ProfileDropdownComponent

    // pipes
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavSideComponent,
  ],
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class LayoutModule {}
