import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";

@Injectable()
export class ProductsDatasource{
    private tobuy: Product[]= [
            new Product(0, "Cookies", 1, 2.00, false),
            new Product(1, "Sandwiches", 1, 7.00, false),
            new Product(2, "Clementines",1 , 1.00, false),
            new Product(3, "Salads", 1, 3.00, false),
            new Product(4, "Yogurts", 1, 2.00, false),
            new Product(5, "Orange Juice", 1, 3.00, false),
            new Product(6, "Pizza", 1, 10.00, false),
    ];

    private bought: Product[]= [];

    getToBuy(): Observable<Product[]> {
        return from([this.tobuy]);
    }

    getBought():Observable<Product[]> {
        return from([this.bought]);
    }
}