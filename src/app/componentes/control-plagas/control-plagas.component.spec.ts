import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPlagasComponent } from './control-plagas.component';

describe('ControlPlagasComponent', () => {
  let component: ControlPlagasComponent;
  let fixture: ComponentFixture<ControlPlagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlPlagasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlPlagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
