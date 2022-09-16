import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MugshotComponent } from './mugshot.component';

describe('MugshotComponent', () => {
  let component: MugshotComponent;
  let fixture: ComponentFixture<MugshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MugshotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MugshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
