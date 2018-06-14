import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductThumbComponent } from './product-thumb.component';

describe('ProductThumbComponent', () => {
  let component: ProductThumbComponent;
  let fixture: ComponentFixture<ProductThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
