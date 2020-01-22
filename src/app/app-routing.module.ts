import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HotelComponent } from './hotel/hotel.component';
import { FoodsComponent } from './foods/foods.component';
import { PlaceComponent } from './place/place.component';
import { TraditionComponent } from './tradition/tradition.component';
import { ProductComponent } from './product/product.component';
import { DisplayComponent } from './display/display.component';
import { ProvinceComponent } from './province/province.component';
import { HotProvinceComponent } from './hot-province/hot-province.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { SearchComponent } from './search/search.component';



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
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'Search', component: SearchComponent },
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
