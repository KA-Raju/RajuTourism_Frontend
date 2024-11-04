
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutmeComponent } from './aboutus/aboutme/aboutme.component';
import { AboutcompanyComponent } from './aboutus/aboutcompany/aboutcompany.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TravelpacksComponent } from './travelpacks/travelpacks.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { GuardingGuard } from './guarding.guard';
import { PackDetailsComponent } from './travelpacks/pack-details/pack-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddPackComponent } from './home/add-pack/add-pack.component';
import { EditPackComponent } from './home/edit-pack/edit-pack.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailsComponent } from './hotels/hotel-details/hotel-details.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    AboutmeComponent,
    AboutcompanyComponent,
    GalleryComponent,
    TravelpacksComponent,
    ContactusComponent,
    NotfoundpageComponent,
    PackDetailsComponent,
    AddPackComponent,
    EditPackComponent,
    RegisterComponent,
    LoginComponent,
    HotelsComponent,
    HotelDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    GuardingGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }