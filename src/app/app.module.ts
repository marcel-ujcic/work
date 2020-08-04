import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BoxComponent } from './box/box.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { BtnCheckUoutComponent } from './btn-check-uout/btn-check-uout.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BoxComponent,
    ButtonComponent,
    CardComponent,
    BtnCheckUoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

