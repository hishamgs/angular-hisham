import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AlbumsService {
  constructor (
    private apiService: ApiService
  ) {}

  getAlbums(userId): Observable<[any]> {
    return this.apiService.get('/albums?userId='+userId)
          .pipe(map(data => data));
  }

}
