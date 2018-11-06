import { Injectable, Inject } from '@angular/core';

import { Observable, from } from 'rxjs';

import { LocalForageToken } from './localforage.token';
import { LocalForageConfiguration } from './configuration.interface';

@Injectable()
export class LocalForageService {

    constructor(
        @Inject(LocalForageToken) private localForage: any
    ) { }

    config(config: LocalForageConfiguration): Observable<any> {
        const promise = this.localForage.config(config);
        return from(promise);
    }

    getItem(key: string): Observable<any> {
        const promise = this.localForage.getItem(key);
        return from(promise);
    }

    setItem(key: string, item: any): Observable<any> {
        const promise = this.localForage.setItem(key, item);
        return from(promise);
    }

    removeItem(key: string): Observable<any> {
        const promise = this.localForage.removeItem(key);
        return from(promise);
    }

    clear(): Observable<any> {
        const promise = this.localForage.clear();
        return from(promise);
    }

    length(): Observable<number> {
        const promise = this.localForage.length();
        return from(promise);
    }

    key(index: number): Observable<string> {
        const promise = this.localForage.key(index);
        return from(promise);
    }

    keys(): Observable<string[]> {
        const promise = this.localForage.keys();
        return from(promise);
    }
}
