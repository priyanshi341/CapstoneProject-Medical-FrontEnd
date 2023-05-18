import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdetilsforadminComponent } from './orderdetilsforadmin.component';

describe('OrderdetilsforadminComponent', () => {
  let component: OrderdetilsforadminComponent;
  let fixture: ComponentFixture<OrderdetilsforadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderdetilsforadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderdetilsforadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
