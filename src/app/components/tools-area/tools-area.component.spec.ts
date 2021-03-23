import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsAreaComponent } from './tools-area.component';

describe('ToolsAreaComponent', () => {
  let component: ToolsAreaComponent;
  let fixture: ComponentFixture<ToolsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolsAreaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
