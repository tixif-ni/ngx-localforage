import { Injectable, Inject } from '@angular/core';

import { LocalForageToken } from './localforage.token';
import { LocalForageConfiguration } from './configuration.interface';
import { Observable } from 'rxjs/internal/Observable';
import { from } from 'rxjs/internal/observable/from';

@Injectable()
export class LocalForageService {
    constructor(@Inject(LocalForageToken) private localForage: any) {}

    config(config: LocalForageConfiguration): any {
        return this.localForage.config(config);
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
        return from(promise) as Observable<number>;
    }

    key(index: number): Observable<string> {
        const promise = this.localForage.key(index);
        return from(promise) as Observable<string>;
    }

    keys(): Observable<string[]> {
        const promise = this.localForage.keys();
        return from(promise) as Observable<string[]>;
    }

    ready(): Observable<any> {
        const promise = this.localForage.ready();
        return from(promise);
    }
}
