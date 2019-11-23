import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SectionPageComponent } from './section-page/section-page.component';
import { MainLayoutComponent } from './public/components/main-layout/main-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionComponent } from './public/components/section/section.component';
import {MaterialModule} from './material/material.module';
import {SharedModule} from './admin/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SectionPageComponent,
    MainLayoutComponent,
    NotFoundComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
