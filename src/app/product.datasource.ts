import { Product } from "./product.model";

export class ProductsDatasource{
    private productList: Product[];

    constructor(){
        this.productList= new Array<Product>(
            new Product(0, "Cookies", 1, 2.00, false),
            new Product(1, "Sandwiches", 1, 7.00, false),
            new Product(2, "Clementines",1 , 1.00, false),
            new Product(3, "Salads", 1, 3.00, false),
            new Product(4, "Yogurts", 1, 2.00, false),
            new Product(5, "Orange Juice", 1, 3.00, false),
            new Product(6, "Pizza", 1, 10.00, false),
        )
    }

    getProducts(): Product[]{
        return this.productList;
    }

    getProduct(id: number): Product | undefined {
        return this.productList.find(p => p.id===id);
    }

    deleteProduct(id: number){
        let index = this.productList.findIndex( p => p.id===id);
        if(index >= 0){
            this.productList.splice(index,1);
        }
    }

    switchBought(id: number|undefined){
        let index = this.productList.findIndex( p => p.id===id );
        if(index >= 0){
            let product=this.productList[index];
            product.bought = product.bought ? false : true;
            this.productList[index]=product;
        }
    }
}