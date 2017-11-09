import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { LocalForageToken } from './localforage.token';
import { LocalForageConfiguration } from './configuration.interface';

@Injectable()
export class LocalForageService {

    constructor(
        @Inject(LocalForageToken) private localForage: any
    ) { }

    config(config: LocalForageConfiguration): Observable<any> {
        const promise = this.localForage.config(config);
        return Observable.fromPromise(promise);
    }

    getItem(key: string): Observable<any> {
        const promise = this.localForage.getItem(key);
        return Observable.fromPromise(promise);
    }

    setItem(key: string, item: any): Observable<any> {
        const promise = this.localForage.setItem(key, item);
        return Observable.fromPromise(promise);
    }

    removeItem(key: string): Observable<any> {
        const promise = this.localForage.removeItem(key);
        return Observable.fromPromise(promise);
    }

    clear(): Observable<any> {
        const promise = this.localForage.clear();
        return Observable.fromPromise(promise);
    }

    length(): Observable<number> {
        const promise = this.localForage.length();
        return Observable.fromPromise(promise);
    }

    key(index: number): Observable<string> {
        const promise = this.localForage.key(index);
        return Observable.fromPromise(promise);
    }

    keys(): Observable<string[]> {
        const promise = this.localForage.keys();
        return Observable.fromPromise(promise);
    }
}
