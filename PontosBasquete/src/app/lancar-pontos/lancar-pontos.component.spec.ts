import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancarPontosComponent } from './lancar-pontos.component';

describe('LancarPontosComponent', () => {
  let component: LancarPontosComponent;
  let fixture: ComponentFixture<LancarPontosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancarPontosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancarPontosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
