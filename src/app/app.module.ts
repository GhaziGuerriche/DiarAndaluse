import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import {CarouselModule} from 'angular2-carousel-ztw/carousel.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AboutModule } from './about/about.module';
import { RoomsComponent } from './rooms/rooms.component';

import { routes } from './app.routes';

//import { TranslateModule, TranslateLoader, TranslateStaticLoader, MissingTranslationHandler, TranslatePipe } from 'ng2-translate';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent
    
    
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    SharedModule.forRoot(),
    HomeModule,
    AboutModule

  ],
  providers: [
   //  { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
