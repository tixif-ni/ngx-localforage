import { NgModule, ModuleWithProviders } from '@angular/core';

import * as localforage from 'localforage';

import { LocalForageService } from './services';
import { LocalForageToken } from './tokens';


@NgModule()
export class LocalForageModule {
    static forRoot(): ModuleWithProviders {
        let providers: any[] = [{
            provide: LocalForageToken,
            useValue: localforage
        }, LocalForageService];

        return {
            ngModule: LocalForageModule,
            providers: providers
        };
    }
}
