import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SemiDonutComponent } from './semidonut.component';

describe('SemidonutComponent', () => {
  let component: SemiDonutComponent;
  let fixture: ComponentFixture<SemiDonutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiDonutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
