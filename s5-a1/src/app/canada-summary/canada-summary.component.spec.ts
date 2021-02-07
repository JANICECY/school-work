import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CanadaSummaryComponent } from './canada-summary.component';
import { OntarioCasesComponent } from '../ontario-cases/ontario-cases.component'
describe('CanadaSummaryComponent', () => {
  let component: CanadaSummaryComponent;
  let fixture: ComponentFixture<CanadaSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OntarioCasesComponent, CanadaSummaryComponent,  ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanadaSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
