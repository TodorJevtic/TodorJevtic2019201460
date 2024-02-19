import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { UserService } from './auth/user.service';
import { ProfileComponent } from './auth/profile/profile.component';
import { TripsComponent } from './trips/trips.component';
import { TripsService } from './trips/trips.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TripsCartComponent } from './trips/trips-cart/trips-cart.component';
import { ProductListComponent } from './trips/trips-cart/product-list/product-list.component';
import { FiltersComponent } from './trips/trips-cart/filters/filters.component';
import { CartComponent } from './trips/trips-cart/cart/cart.component';
import { ProductItemComponent } from './trips/trips-cart/product-list/product-item/product-item.component';
import { CartItemComponent } from './trips/trips-cart/cart/cart-item/cart-item.component';
import { MessengerService } from './messenger.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailsCartComponent } from './trips/trips-cart/cart/details-cart/details-cart.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    ProfileComponent,
    TripsComponent,
    TripsCartComponent,
    ProductListComponent,
    ProductItemComponent,
    FiltersComponent,
    CartComponent,
    CartItemComponent,
    DetailsCartComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    
  ],
  providers: [UserService, TripsService, MessengerService],
  bootstrap: [AppComponent],
  entryComponents: [ProfileComponent]
})
export class AppModule { }
