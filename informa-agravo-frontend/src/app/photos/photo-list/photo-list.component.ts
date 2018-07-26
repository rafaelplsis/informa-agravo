import { Component, OnInit} from '@angular/core';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter = '';
  hasMore = true;
  currentPage = 1;
  userName = '';

  constructor (
    private activateRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

    ngOnInit(): void {
      this.userName = this.activateRoute.snapshot.params.userName;
      this.photos = this.activateRoute.snapshot.data['photos'];
    }

    load () {
      this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
        .subscribe(photos => {
          this.filter = '';
          this.photos = this.photos.concat(photos);
          // tslint:disable-next-line:curly
          if (!photos.length) this.hasMore = false;

        });
    }
}
