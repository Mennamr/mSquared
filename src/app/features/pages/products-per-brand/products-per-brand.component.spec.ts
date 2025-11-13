import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPerBrandComponent } from './products-per-brand.component';

describe('ProductsPerBrandComponent', () => {
  let component: ProductsPerBrandComponent;
  let fixture: ComponentFixture<ProductsPerBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPerBrandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPerBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
