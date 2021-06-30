import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTilesComponent } from './product-tiles.component';

describe('ProductTilesComponent', () => {
  let component: ProductTilesComponent;
  let fixture: ComponentFixture<ProductTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
