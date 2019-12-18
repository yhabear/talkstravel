import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';



// Routes
const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Singup', component: SignupComponent },
  { path: 'Blogs', component: BlogsComponent },
  { path: 'Hotel', component: HotelComponent },
  { path: 'Foods', component: FoodsComponent },
  { path: 'Place', component: PlaceComponent },
  { path: 'Tradition', component: TraditionComponent },
  { path: 'Product', component: ProductComponent },
  { path: 'Display', component: DisplayComponent },
  { path: 'Province', component: ProvinceComponent },
  { path: 'HotPro', component: HotProvinceComponent },
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  { path: '**', component: PagenofoundComponent }

];

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
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
