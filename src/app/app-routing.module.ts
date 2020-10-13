import { ClientLogInComponent } from './client-log-in/client-log-in.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  // index (home)
  {path: '', redirectTo: '/index', pathMatch: 'full' },
  // other routes
  {path: 'index', component: IndexComponent},
  {path: 'login', component: ClientLogInComponent},
  {path: 'product_detail', component: ProductDetailComponent},
  // page not found
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
