import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallproductsforuserComponent } from './viewallproductsforuser.component';

describe('ViewallproductsforuserComponent', () => {
  let component: ViewallproductsforuserComponent;
  let fixture: ComponentFixture<ViewallproductsforuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallproductsforuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallproductsforuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
