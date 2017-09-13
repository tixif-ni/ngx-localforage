import { NgModule, ModuleWithProviders } from '@angular/core';

import * as localforage from 'localforage';

import { LocalForageService } from './services';
import { LocalForageToken } from './tokens';

export function localforageFactory() {
  return localforage;
}


@NgModule()
export class LocalForageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LocalForageModule,
      providers: [
        {
          provide: LocalForageToken,
          useFactory: localforageFactory
        },
        LocalForageService
      ]
    };
  }
}
