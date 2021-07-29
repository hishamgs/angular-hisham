import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotosService, MyLoaderService } from '../core';

import { OrderService } from '../shared/services/order.service';

import { AlbumDetail } from '../core/models/album-detail.model';


@Component({
  selector: 'app-album-detail-page',
  templateUrl: './album-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumDetailComponent implements OnInit {

  albumDetail: AlbumDetail = {
    albumId: 0,
    albumName: '',
    albumDetail: [],
    sortOrder: 'asc'
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private photosService: PhotosService,
    private orderService: OrderService,
    public myLoaderService: MyLoaderService
    ) {
      this.route.queryParams.subscribe(params => {
        this.albumDetail.albumId = params.id;
        this.albumDetail.albumName = params.title;
    });
    }

  ngOnInit() {
    
    this.orderService.currentMessage.subscribe(message => {
      this.albumDetail.albumDetail = [];  /* This may not be necessary. Done to display the loader clearly */
      this.albumDetail.sortOrder = message;
      this.getAlbumDetail();
    });
    
  }

  getAlbumDetail() {
    this.photosService.getAlbumDetail(this.albumDetail.albumId)
      .subscribe(detail => {
        this.albumDetail.albumDetail = detail;
      });
  }

  backToAlbums() {
    this.router.navigateByUrl('/');
  }

}
