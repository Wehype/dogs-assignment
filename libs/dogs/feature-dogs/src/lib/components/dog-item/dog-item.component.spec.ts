import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogItemComponent } from './dog-item.component';
import { DogService } from '../../services/dog.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

describe('DogItemComponent', () => {
  let component: DogItemComponent;
  let fixture: ComponentFixture<DogItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogItemComponent],
      providers: [{ provide: DogService, useClass: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
