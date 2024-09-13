import pt from '@angular/common/locales/pt';

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { pt_BR, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';

import * as allIcons from '@ant-design/icons-angular/icons';

const antDesignIcons = allIcons as {
  [key: string]: IconDefinition;
};

const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

registerLocaleData(pt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideAnimations(),
    provideAnimationsAsync(),
    provideNzI18n(pt_BR),
    importProvidersFrom(FormsModule),
    importProvidersFrom(ReactiveFormsModule),
    provideNzIcons(icons)
  ]
};
