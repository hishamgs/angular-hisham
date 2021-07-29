import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { TitleSortPipe } from './pipes/sort-title.pipe';

import { OrderService } from './services/order.service';
import { FilterComponent } from '../core/components/filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    TitleSortPipe,
    FilterComponent
  ],
  providers: [
    OrderService
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    TitleSortPipe,
    FilterComponent
  ]
})
export class SharedModule {}
