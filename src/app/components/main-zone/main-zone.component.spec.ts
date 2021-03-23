import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainZoneComponent } from './main-zone.component';

describe('MainZoneComponent', () => {
  let component: MainZoneComponent;
  let fixture: ComponentFixture<MainZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainZoneComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
