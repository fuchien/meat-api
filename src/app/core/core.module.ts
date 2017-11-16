import { NgModule } from '@angular/core';

import { OrderService } from './../order/order.service';
import { RestaurantsService } from './../restaurants/restaurants.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';

@NgModule({
    imports: [],
    exports: [],
    providers: [
        ShoppingCartService,
        RestaurantsService,
        OrderService
    ],
})
export class CoreModule { }
