import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { LocalForageToken } from './tokens';


@Injectable()
export class LocalForageService {

  constructor(
    @Inject(LocalForageToken) private localForage: any
  ) { }

  getItem(key: string): Observable<any> {
    const promise = this.localForage.getItem(key);
    return Observable.fromPromise(promise);
  }

  setItem(key: string, item: string | string[] | number[]): Observable<any> {
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
