import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';     
import {MenuItem} from 'primeng/api'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialModule } from './tela-inicial/tela-inicial.module'

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TelaInicialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
