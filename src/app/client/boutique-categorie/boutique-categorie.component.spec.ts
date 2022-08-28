import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiqueCategorieComponent } from './boutique-categorie.component';

describe('BoutiqueCategorieComponent', () => {
  let component: BoutiqueCategorieComponent;
  let fixture: ComponentFixture<BoutiqueCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutiqueCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutiqueCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
