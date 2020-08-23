import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharteQualiteComponent } from './charte-qualite.component';

describe('CharteQualiteComponent', () => {
  let component: CharteQualiteComponent;
  let fixture: ComponentFixture<CharteQualiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharteQualiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharteQualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
