import { CartComponent } from './cart/cart.component';
// importing routes and modules
import { SignInComponent } from './sign-in/sign-in.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  // ---------------------index (home)
  {path: '', redirectTo: '/index', pathMatch: 'full' },
  {path: 'index', component: IndexComponent},
  // -------------other routes

  // --------------------sign up
  {path: 'create-account', component: SignUpComponent},
  {path: 'signup', redirectTo: '/create-account', pathMatch: 'full'},

  // -----------------------login / sign in
  {path: 'sign-in', component: SignInComponent},
  {path: 'login', redirectTo: '/sign-in', pathMatch: 'full'},

  // -----------------------product detail (parameterized route)
  {path: 'product-detail/:id', component: ProductDetailComponent},

  // -------------------------------cart
  {path: 'cart', component: CartComponent},

  // -------------------------page not found
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
