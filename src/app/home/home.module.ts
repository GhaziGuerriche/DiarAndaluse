import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HomeComponent } from './home.component';


import {SharedModule} from '../shared/shared.module';


//import { TranslateModule } from 'ng2-translate';


@NgModule({
    imports: [CommonModule, RouterModule, SharedModule], //, TranslateModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})

export class HomeModule { }
