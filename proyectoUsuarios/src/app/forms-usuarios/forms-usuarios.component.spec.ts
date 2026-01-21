import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsUsuariosComponent } from './forms-usuarios.component';

describe('FormsUsuariosComponent', () => {
  let component: FormsUsuariosComponent;
  let fixture: ComponentFixture<FormsUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
