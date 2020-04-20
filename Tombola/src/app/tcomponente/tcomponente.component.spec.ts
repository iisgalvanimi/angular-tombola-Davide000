import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcomponenteComponent } from './tcomponente.component';

describe('TcomponenteComponent', () => {
  let component: TcomponenteComponent;
  let fixture: ComponentFixture<TcomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
