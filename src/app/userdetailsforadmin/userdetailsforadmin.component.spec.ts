import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailsforadminComponent } from './userdetailsforadmin.component';

describe('UserdetailsforadminComponent', () => {
  let component: UserdetailsforadminComponent;
  let fixture: ComponentFixture<UserdetailsforadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdetailsforadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailsforadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
