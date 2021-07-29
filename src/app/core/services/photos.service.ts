import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class PhotosService {
  constructor (
    private apiService: ApiService
  ) {}

  getPhotos(): Observable<[any]> {
    return this.apiService.get('/photos')
          .pipe(map(data => data));
  }

  getAlbumDetail(id): Observable<[any]> {
    const albumId = '?albumId=' + id;
    return this.apiService.get('/photos'+ albumId )
          .pipe(map(data => data));
  }

}
