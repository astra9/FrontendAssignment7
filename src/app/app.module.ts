import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TobuyComponent } from './components/tobuy/tobuy.component';
import { FormsModule } from '@angular/forms';
import { TotalPricePipe } from './pipes/totalprice.pipe';
import { AppComponent } from './app.component';
import { BoughtComponent } from './components/bought/bought.component';
import { ProductsDatasource } from './model/product.datasource';
import { ProductsRepository } from './model/product.repository';

@NgModule({
  declarations: [
    TobuyComponent,
    BoughtComponent,
    TotalPricePipe,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ProductsDatasource,
    ProductsRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
