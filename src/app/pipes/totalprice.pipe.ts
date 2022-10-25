import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"totalPrice"
})
export class TotalPricePipe implements PipeTransform{
    transform(price: any, quantity: any) {
        return `$$$${price*quantity}`;
    }
}