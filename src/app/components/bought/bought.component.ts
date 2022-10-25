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

    isOdd(odd:boolean): string{
        if(odd){
            return "bg-primary col-12 justify-content-center text-white";
        } else{
            return "bg-success col-12 justify-content-center text-white"
        }
    }

}