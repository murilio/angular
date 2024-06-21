import { HttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import {
  TranslateLoader,
  TranslateModule,
  TranslateModuleConfig,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const HttpLoaderFactory = (http: HttpClient) => {
  // segundo parâmetro a pasta onde contém as traduções
  // terceiro parâmetro tipo de extensão dos arquivos
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

const translateModuleConfig: TranslateModuleConfig = {
  defaultLanguage: 'pt-br',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
};

// criando um provider customizado
export const provideTranslate = () => {
  return importProvidersFrom(TranslateModule.forRoot(translateModuleConfig));
};
