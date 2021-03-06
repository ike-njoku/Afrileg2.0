import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LandingComponent } from './landing/landing.component';
import { ImageSlideComponent } from './image-slide/image-slide.component';
import { HotSellingComponent } from './hot-selling/hot-selling.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
// import HTTP client
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
// mimic db
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    SignInComponent,
    LandingComponent,
    ImageSlideComponent,
    HotSellingComponent,
    NewArrivalsComponent,
    FooterComponent,
    ProductDetailComponent,
    IndexComponent,
    PageNotFoundComponent,
    SignUpComponent,
    CartComponent,
    FeedBackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // inMemoryDataService
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
