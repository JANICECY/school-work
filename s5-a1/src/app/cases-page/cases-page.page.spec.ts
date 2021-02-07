import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CasesPagePage } from './cases-page.page';
import { OntarioCasesComponent } from '../ontario-cases/ontario-cases.component'
describe('CasesPagePage', () => {
  let component: CasesPagePage;
  let fixture: ComponentFixture<CasesPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesPagePage, OntarioCasesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CasesPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
