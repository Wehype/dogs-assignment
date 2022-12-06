import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogDetailComponent } from './dog-detail.component';
import { DogService } from '../../services/dog.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterTestingModule } from '@angular/router/testing';
import { mockDog } from '../../stubs/dog.stub';
import { subscribeSpyTo } from '@hirez_io/observer-spy';

describe('DogDetailComponent', () => {
  let component: DogDetailComponent;
  let fixture: ComponentFixture<DogDetailComponent>;

  const mockDogService = jest.fn().mockReturnValue({
    getDogs: jest.fn().mockReturnValue([mockDog]),
    getDog: jest.fn().mockReturnValue(mockDog),
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogDetailComponent],
      imports: [
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        RouterTestingModule,
        NgxSkeletonLoaderModule,
      ],
      providers: [{ provide: DogService, useValue: mockDogService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get dog details', () => {
    const dogDetails$ = subscribeSpyTo(component.dogDetails$);
    expect(dogDetails$.getLastValue()).toEqual(mockDog);
  });
});
