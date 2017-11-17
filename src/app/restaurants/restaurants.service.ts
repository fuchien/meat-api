import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { ErrorHandler } from './../app.error-handler';
import { MEAT_API } from './../app.api';
import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { Restaurant } from './restaurant/restaurant.model';

@Injectable()
export class RestaurantsService {

    constructor(
        private _http: Http
    ) {

    }

    restaurants(search?: string): Observable<Restaurant[]> {
        
        return this._http.get(`${MEAT_API}/restaurants`, {params: {q: search}})
            .map(res => res.json())
            .catch(ErrorHandler.handleError)
    }

    restaurantById(id: string): Observable<Restaurant> {

        return this._http.get(`${MEAT_API}/restaurants/${id}`)
            .map(res => res.json())
            .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant(id: string): Observable<any> {

        return this._http.get(`${MEAT_API}/restaurant/${id}/reviews`)
            .map(res => res.json())
            .catch(ErrorHandler.handleError)
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {

        return this._http.get(`${MEAT_API}/restaurant/${id}/menu`)
            .map(res => res.json())
            .catch(ErrorHandler.handleError)
    }
}