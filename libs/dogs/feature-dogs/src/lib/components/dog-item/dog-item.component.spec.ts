import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogItemComponent } from './dog-item.component';
import { DogService } from '../../services/dog.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterTestingModule } from '@angular/router/testing';
import { mockDog } from '../../stubs/dog.stub';

describe('DogItemComponent', () => {
  let component: DogItemComponent;
  let fixture: ComponentFixture<DogItemComponent>;

  const mockDogService = jest.fn().mockReturnValue({
    getDogs: jest.fn().mockReturnValue([mockDog]),
    getDog: jest.fn().mockReturnValue(mockDog),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogItemComponent],
      imports: [
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        RouterTestingModule,
      ],
      providers: [{ provide: DogService, useValue: mockDogService }],
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
