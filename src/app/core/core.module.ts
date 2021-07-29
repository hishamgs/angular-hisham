import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { MyLoaderInterceptor } from './interceptors/loading.interceptor';

import {
  ApiService,
  JwtService,
  AlbumsService,
  PhotosService,
  MyLoaderService
} from './services';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: MyLoaderInterceptor, multi: true },
    ApiService,
    JwtService,
    AlbumsService,
    PhotosService,
    MyLoaderService
  ],
  declarations: []
})
export class CoreModule { }
