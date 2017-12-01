import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { AboutComponent } from './about.component';


import {SharedModule} from '../shared/shared.module';


//import { TranslateModule } from 'ng2-translate';


@NgModule({
    imports: [CommonModule, RouterModule, SharedModule], //, TranslateModule],
    declarations: [AboutComponent],
    exports: [AboutComponent]
})

export class AboutModule { }
