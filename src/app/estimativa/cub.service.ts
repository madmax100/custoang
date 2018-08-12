import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {MEAT_API} from '../app.api';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Cub } from './cub.model';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class CubService {
    constructor(private http: Http) {}
    cubs(): Observable<Cub[]> {
        return this.http.get(`${MEAT_API}/bucketlists/?format=json`)
            .map(response => response.json());
    }

    restaurantById(id: string): Observable<Cub> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json());
    }
}
