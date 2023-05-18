import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallproductforadminComponent } from './viewallproductforadmin.component';

describe('ViewallproductforadminComponent', () => {
  let component: ViewallproductforadminComponent;
  let fixture: ComponentFixture<ViewallproductforadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallproductforadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallproductforadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
