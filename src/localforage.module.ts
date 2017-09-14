import {
  NgModule,
  ModuleWithProviders
} from '@angular/core';

import { LocalForageService } from './localforage.service';
import { LocalForageToken } from './localforage.token';
import { localforageFactory } from './localforage.factory';

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
