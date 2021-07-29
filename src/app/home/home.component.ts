import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlbumsService, PhotosService, MyLoaderService } from '../core';
import { OrderService } from '../shared/services/order.service';

import { Albums } from '../core/models';


@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
 
  home: Albums = {
    albums: [],
    userId: 2,
    photos: [],
    photoCount: [],
    imageUrl: [],
    sortOrder: 'asc'

  };

  constructor(
    private router: Router,
    private albumsService: AlbumsService,
    private photosService: PhotosService,
    private orderService: OrderService,
    public myLoaderService: MyLoaderService

  ) { }
  

  ngOnInit() {

    this.orderService.currentMessage.subscribe(message => {
      this.home.imageUrl = [];   /* This may not be necessary. Done to display the loader clearly */
      this.home.sortOrder = message;
      this.getAlbums();
    });

  }
 

  getAlbums() {

    this.albumsService.getAlbums(this.home.userId)

      .subscribe(albums => {
        /* Filter out the album with ID 16 */
        this.home.albums = albums.filter(({ id }) => id !== 16);

        /* Change the order of the array depending on the filter value */
        if (this.home.sortOrder === 'asc') {
          this.home.albums.sort((a, b) => a.title.localeCompare(b.title));
        } else if (this.home.sortOrder === 'desc') {
          this.home.albums.sort((a, b) => a.title.localeCompare(b.title)).reverse()
        }

        /* Load photos once album API is completed */
        this.getPhotos();

      });
  }

  getPhotos() {

    this.photosService.getPhotos()
      .subscribe(photos => {

        /* All photos that belong to album Ids 11 to 20 except album Id 16 */
        this.home.photos = photos.filter(({ albumId }) => albumId >= 11 && albumId <= 20 && albumId !== 16);

        /* Get the count of photos for each album Id */
        const albumIdArray = [];
        const counts = [];

        this.home.photos.forEach(obj => {
          albumIdArray.push(obj.albumId)
        });

        const imageArray = [];

        this.home.albums.forEach(obj => {
          imageArray.push(obj.id)
        });

        
        this.home.imageUrl = this.home.photos.filter((id, index, self) =>
          index === self.findIndex((t) => (
            t.albumId === id.albumId
          ))
        );

        /* Match the photo array against the album ids of albums array */
        this.home.imageUrl.sort(function (a, b) {
          return imageArray.indexOf(a.albumId) - imageArray.indexOf(b.albumId);
        }); 

        /* Match the album ids array against the albums array */
        albumIdArray.sort(function (a, b) {
          return imageArray.indexOf(a) - imageArray.indexOf(b);
        }); 

        /* Get the count of photos for each album */
        albumIdArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

        counts.forEach(obj => {
          this.home.photoCount.push(obj)
        })

      });
  }

  albumDetail(albumId, albumName) {
    this.router.navigateByUrl('/album-detail?id='+albumId+'&title='+albumName);
  }

}
