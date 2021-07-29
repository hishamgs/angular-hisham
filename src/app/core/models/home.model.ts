import { AlbumsList } from './albums-list.model';
import { PhotosList } from './photos-list.model';

export class Albums {
    albums?: AlbumsList[];
    photos?: PhotosList[];
    userId?: number;
    photoCount?: Array<number>;
    imageUrl?: PhotosList[];
    sortOrder?: string;
}