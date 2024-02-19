import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./auth/login/login.component";
import { ProfileComponent } from "./auth/profile/profile.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { DetailsCartComponent } from "./trips/trips-cart/cart/details-cart/details-cart.component";
import { TripsComponent } from "./trips/trips.component";
import { WelcomeComponent } from "./welcome/welcome.component";


const rute: Routes = [
    { path: '', component: WelcomeComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'trips', component: TripsComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'details', component: DetailsCartComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(rute)],
    exports: [RouterModule]
})

export class RoutingModule{}