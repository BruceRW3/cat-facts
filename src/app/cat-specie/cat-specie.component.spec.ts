import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSpecieComponent } from './cat-specie.component';

describe('CatSpecieComponent', () => {
  let component: CatSpecieComponent;
  let fixture: ComponentFixture<CatSpecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatSpecieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatSpecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
