import {
  InjectionToken,
  NgModule,
  ModuleWithProviders
} from '@angular/core';

import * as localforage from 'localforage';

import { LocalForageService } from './localforage.service';

export function localforageFactory() {
  return localforage;
}

export function LocalForageToken() {
  return new InjectionToken('localforage');
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
