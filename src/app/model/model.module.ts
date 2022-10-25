import { NgModule } from "@angular/core";
import { ProductsDatasource } from "./product.datasource";
import { ProductsRepository } from './product.repository';
 
@NgModule({
   providers: [ProductsDatasource, ProductsRepository]
})
export class ModelModule { }