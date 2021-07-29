import { PhotosList } from './photos-list.model';

export class AlbumDetail {
    albumId?: number;
    albumName?: string;
    albumDetail?: Array<PhotosList>;
    sortOrder?: string;
}