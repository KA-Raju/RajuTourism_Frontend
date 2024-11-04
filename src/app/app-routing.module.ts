import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutcompanyComponent } from './aboutus/aboutcompany/aboutcompany.component';
import { AboutmeComponent } from './aboutus/aboutme/aboutme.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GuardingGuard } from './guarding.guard';
import { HomeComponent } from './home/home.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { PackDetailsComponent } from './travelpacks/pack-details/pack-details.component';
import { TravelpacksComponent } from './travelpacks/travelpacks.component';
import { AddPackComponent } from './home/add-pack/add-pack.component';
import { EditPackComponent } from './home/edit-pack/edit-pack.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailsComponent } from './hotels/hotel-details/hotel-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'addpack', component: AddPackComponent},
  {path: 'editpack/:packId', component: EditPackComponent},
  {path:'about', component: AboutusComponent,canActivate: [GuardingGuard],
    children:[
      {path:'me', component: AboutmeComponent,canActivate: [GuardingGuard],},
      {path:'company', component: AboutcompanyComponent,canActivate: [GuardingGuard],}
    ]
},
  {path: 'hotels',component: HotelsComponent},
  {path: 'hotels/hoteldetails',component: HotelDetailsComponent },
  {path:'contactus', component: ContactusComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path: 'travelpacks', component: TravelpacksComponent},
  {path: 'travelpacks/:id', component: PackDetailsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path:'**', component: NotfoundpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

