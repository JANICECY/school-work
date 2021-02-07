import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OntarioCasesComponent } from './ontario-cases.component';

describe('OntarioCasesComponent', () => {
  let component: OntarioCasesComponent;
  let fixture: ComponentFixture<OntarioCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OntarioCasesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OntarioCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
