import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../../../photo.service';
import { Photo } from '../../../photo';

@Injectable({providedIn: 'root'})
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {
    constructor(private service: PhotoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
        const userName = route.params.userName;
        return this.service.listFromUser(userName);
    }
}