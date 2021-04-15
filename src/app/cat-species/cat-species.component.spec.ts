import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSpeciesComponent } from './cat-species.component';

describe('CatSpeciesComponent', () => {
  let component: CatSpeciesComponent;
  let fixture: ComponentFixture<CatSpeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatSpeciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
