import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/index';

//import { TranslateModule } from 'ng2-translate';
/**
* Do not specify providers for modules that might be imported by a lazy loaded module.
*/

@NgModule({
    imports: [CommonModule, RouterModule], //, TranslateModule],
    declarations: [NavbarComponent],
    exports: [CommonModule, FormsModule, RouterModule, NavbarComponent],
  //  providers: [les services]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}