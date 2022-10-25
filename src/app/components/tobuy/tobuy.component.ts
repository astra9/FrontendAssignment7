import { Component } from "@angular/core";
import { ProductsRepository } from "../../model/product.repository";
import { Product } from "../../model/product.model";

@Component({
    selector: "tobuy",
    templateUrl: "tobuy.component.html"
})
export class TobuyComponent{
    constructor(private productsData: ProductsRepository){}

    getProductsToBuy(): Product[]{
        return this.productsData.getToBuy();
    }

    tableCellsStyle(){
        return {
            "padding-left":"10px",
            "padding-right":"10px",
            "text-align":"center"
        }
    }

    bought(id:number | undefined){
        this.productsData.bought(id);
    }

    calculateTotalPrice(product: Product){
        return product?.pricePerItem*product?.quantity;
    }
}