import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasesPagePageRoutingModule } from './cases-page-routing.module';
import { OntarioCasesComponent } from '../ontario-cases/ontario-cases.component'
import { CasesPagePage } from './cases-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasesPagePageRoutingModule
  ],
  declarations: [CasesPagePage, OntarioCasesComponent]
})
export class CasesPagePageModule {}
