import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ProductComponent } from './components/product/product.component';
import { CoolButtonDirective } from './directives/cool-button.directive';
import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import { FormattingPhoneNumberPipe } from './pipes/formating-phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    AdvantageComponent,
    ProductComponent,
    CoolButtonDirective,
    ShortenTextPipe,
    FormattingPhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
