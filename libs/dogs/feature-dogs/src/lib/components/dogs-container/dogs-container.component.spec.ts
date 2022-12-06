import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsContainerComponent } from './dogs-container.component';

describe('DogsContainerComponent', () => {
  let component: DogsContainerComponent;
  let fixture: ComponentFixture<DogsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogsContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
