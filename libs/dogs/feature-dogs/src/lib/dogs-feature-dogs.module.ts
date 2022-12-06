import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

import { CommonModule } from '@angular/common';
import { DogDetailComponent } from './components/dog-detail/dog-detail.component';
import { DogItemComponent } from './components/dog-item/dog-item.component';
import { DogService } from './services/dog.service';
import { DogsContainerComponent } from './components/dogs-container/dogs-container.component';
import { DogsListComponent } from './components/dogs-list/dogs-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ROUTES } from './routes';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardSkeletonComponent } from './components/card-skeleton/card-skeleton.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    NgxSkeletonLoaderModule,
  ],
  declarations: [
    DogsContainerComponent,
    DogsListComponent,
    DogItemComponent,
    DogDetailComponent,
    CardSkeletonComponent,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    DogService,
  ],
})
export class DogsFeatureDogsModule {}
