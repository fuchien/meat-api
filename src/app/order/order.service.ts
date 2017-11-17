import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { Order } from 'app/order/order.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
// import { MEAT_API } from './../app.api';

@Injectable()
export class OrderService {

    constructor(
        private cartService: ShoppingCartService,
        private _http: Http
    ) {}

    itemsValues(): number {

        return this.cartService.total()
    }

    cartItems(): CartItem[] {

        return this.cartService.items
    }

    increaseQty(item: CartItem) {

        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem) {
        
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem) {

        this.cartService.removerItem(item)
    }

    clear() {

        this.cartService.clear()
    }

    checkOrder(order: Order): Observable<string> {

        const headers = new Headers({'Content-type': 'application/json'})

        return this._http.post(`https://meatapi.herokuapp.com/orders`,
            JSON.stringify(order),
            new RequestOptions({headers: headers}))
            .map(response => response.json())
            .map(order => order.id)
    }
}