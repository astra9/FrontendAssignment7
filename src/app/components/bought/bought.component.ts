import { Component } from "@angular/core";
import { ProductsRepository } from "../../model/product.repository";
import { Product } from "../../model/product.model";

@Component({
    selector: "bought",
    templateUrl: "bought.component.html"
})
export class BoughtComponent{
    constructor(private productsData: ProductsRepository){}

    getProductsBought(): Product[]{
        return this.productsData.getBought();
    }

    tableCellsStyle(){
        return {
            "padding-left":"10px",
            "padding-right":"10px",
            "text-align":"center"
        }
    }

    tobuy(id:number | undefined){
        this.productsData.tobuy(id);
    }

    calculateTotalPrice(product: Product){
        return product?.pricePerItem*product?.quantity;
    }
}