import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasesPagePage } from './cases-page.page';

const routes: Routes = [
  {
    path: '',
    component: CasesPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasesPagePageRoutingModule {}
