import { Component } from "@angular/core";
import { ProductsDatasource } from "./product.datasource";
import { Product } from "./product.model";

@Component({
    selector: "app-root",
    templateUrl: "product.component.html"
})
export class ProductComponent{
    productsData = new ProductsDatasource();

    getProductsToBuy(): Product[]{
        return this.productsData.getProducts().filter(p => !p.bought);
    }

    getProductsBought(): Product[]{
        return this.productsData.getProducts().filter(p => p.bought);
    }

    tableCellsStyle(){
        return {
            "padding-left":"10px",
            "padding-right":"10px",
            "text-align":"center"
        }
    }

    switchBought(id:number | undefined){
        this.productsData.switchBought(id);
    }

    calculateTotalPrice(product: Product){
        return product?.pricePerItem*product?.quantity;
    }
}