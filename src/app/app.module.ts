import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'bootstrap/dist/js/bootstrap.bundle';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { HotelComponent } from './hotel/hotel.component';
import { FoodsComponent } from './foods/foods.component';
import { PlaceComponent } from './place/place.component';
import { TraditionComponent } from './tradition/tradition.component';
import { ProductComponent } from './product/product.component';
import { DisplayComponent } from './display/display.component';
import { ProvinceComponent } from './province/province.component';
import { HotProvinceComponent } from './hot-province/hot-province.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireDatabase } from 'angularfire2/database';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BlogsComponent,
    PagenofoundComponent,
    HotelComponent,
    FoodsComponent,
    PlaceComponent,
    TraditionComponent,
    ProductComponent,
    DisplayComponent,
    ProvinceComponent,
    HotProvinceComponent,
    SignupComponent,
    DashboardComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService,AuthGuard,AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
