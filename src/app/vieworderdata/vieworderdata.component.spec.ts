import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderdataComponent } from './vieworderdata.component';

describe('VieworderdataComponent', () => {
  let component: VieworderdataComponent;
  let fixture: ComponentFixture<VieworderdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieworderdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
