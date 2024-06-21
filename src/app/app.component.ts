import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  // todos os componentes devem importar o translateModule
  // para que funcione o " | translate"
  imports: [RouterOutlet, TranslateModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-i18n';

  #translate = inject(TranslateService);

  public languages = [
    {
      value: 'pt-br',
      title: 'PT_BR',
    },
    {
      value: 'en',
      title: 'EN',
    },
  ];

  public translate(lang: string) {
    return this.#translate.setDefaultLang(lang);
  }
}
