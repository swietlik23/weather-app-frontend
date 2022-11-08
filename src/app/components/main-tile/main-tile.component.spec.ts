import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTileComponent } from './main-tile.component';

describe('CitiesComponent', () => {
  let component: MainTileComponent;
  let fixture: ComponentFixture<MainTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
