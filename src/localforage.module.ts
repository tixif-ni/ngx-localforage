import {
  InjectionToken,
  NgModule,
  ModuleWithProviders
} from '@angular/core';

import * as localforage from 'localforage';

import { LocalForageService } from './localforage.service';
import { LocalForageConfiguration } from './configuration.interface';

export function localforageFactory() {
  return localforage;
}

export function LocalForageToken() {
  return new InjectionToken('localforage');
}


@NgModule()
export class LocalForageModule {
  static forRoot(config?: LocalForageConfiguration): ModuleWithProviders {
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
