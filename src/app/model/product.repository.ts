import { Injectable } from "@angular/core";
import { ProductsDatasource } from "./product.datasource";
import { Product } from "./product.model";

@Injectable()
export class ProductsRepository{
    private toBuyList: Product[] = []
    private boughtlist: Product[] = []

    constructor(private dataSource: ProductsDatasource){
        this.dataSource.getBought().subscribe(
            data=>{
                this.boughtlist=data;
            }
        );
        this.dataSource.getToBuy().subscribe(
            data=>{
                this.toBuyList=data;
            }
        );
    }

    getToBuy(): Product[]{
        return this.toBuyList;
    }

    getBought(): Product[]{
        return this.boughtlist;
    }

    getProduct(id: number): Product | undefined {
        return this.toBuyList.find(p => p.id===id);
    }

    bought(id: number|undefined){
        let index = this.toBuyList.findIndex( p => p.id===id );
        let boughtProduct = this.toBuyList[index];
        this.boughtlist.push(boughtProduct);
        this.toBuyList.splice(index,1);
    }

    tobuy(id: number|undefined){
        let index = this.boughtlist.findIndex( p => p.id===id );
        let toBuyProduct = this.boughtlist[index];
        toBuyProduct.quantity=1;
        this.toBuyList.push(toBuyProduct);
        this.boughtlist.splice(index,1);
    }
}