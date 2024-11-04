import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelpacksComponent } from './travelpacks.component';

describe('TravelpacksComponent', () => {
  let component: TravelpacksComponent;
  let fixture: ComponentFixture<TravelpacksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelpacksComponent]
    });
    fixture = TestBed.createComponent(TravelpacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
