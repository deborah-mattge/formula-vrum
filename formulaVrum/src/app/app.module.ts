import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';     
import {MenuItem} from 'primeng/api'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialModule } from './tela-inicial/tela-inicial.module';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TelaInicialModule, 
    CheckboxModule,
    AccordionModule,
    ButtonModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
