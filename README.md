ng new martelet => routing yes, scss

[Modules de base] ng generate module nomModule
ng generate module core
ng generate module shared
ng generate module icons
ng generate module templates
ng generate module ui

[modules métiers (avec routage)] ng generate module nomModule --routing
ng generate module login --routing
ng generate module clients --routing
ng generate module orders --routing
ng generate module page-not-found --routing

Import de coreModule dans appModule

dans répertoire core:
- components => components footer, header et nav (--export)
- enums
- interfaces
- models
- services
dans repertoire icons => components
dans répertoire login => pages
dans répertoire orders => components, pages, services
dans répertoire page-not-found => pages
dans répertoire shared => components, directives, pipes
dans répertoire templates => components
dans répertoire ui => components
dans répertoire clients => components, pages, services

dans répertoire src => stylings
_fonts.scss
_layout.scss
_theme.scss

ng generate component page-add-order
ng generate component page-edit-order
ng generate component page-list-order

ng generate service orders
ng generate class client 

dans clients/components => ng generate component form-client
dans clients/pages => ng generate component page-edit-client
dans clients/pages => ng generate component page-add-client
dans clients/pages => ng generate component page-list-clients
dans clients/services => ng generate service clients 

npm install dayjs
Créer service idem exo précédent dans core/services
ng generate service proverbe

dans footer component TS
import * as dayjs from 'dayjs';
public madate = dayjs().format('YYYY);
public proverbe!: string;
=> constructeur => proverbeService
=> ngOnInit appel proverbe.afficher()


dans footer component HTML
<p class="text-center"> {{ proverbe }}</p>
<p class="text-center">Copyright &copy; {{madate}} Moi</p>

