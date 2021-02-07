import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { OntarioCasesComponent } from '../ontario-cases/ontario-cases.component'
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CanadaSummaryComponent } from '../canada-summary/canada-summary.component'
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
  ],
  declarations: [Tab1Page, OntarioCasesComponent, CanadaSummaryComponent]
})
export class Tab1PageModule {}
