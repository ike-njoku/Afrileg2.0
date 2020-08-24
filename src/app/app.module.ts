import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { ClientLogInComponent } from './client-log-in/client-log-in.component';
import { LandingComponent } from './landing/landing.component';
import { ImageSlideComponent } from './image-slide/image-slide.component';
import { HotSellingComponent } from './hot-selling/hot-selling.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    ClientLogInComponent,
    LandingComponent,
    ImageSlideComponent,
    HotSellingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
