import { Component, OnInit, OnDestroy } from '@angular/core';
import { Photo } from '../../photo';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { PhotoService } from '../../photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];
  filter = '';
  debounce: Subject<string> = new Subject();
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

      this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
    }

    ngOnDestroy(): void {
      this.debounce.unsubscribe();
    }

    load () {
      this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
        .subscribe(photos => {
          this.photos = this.photos.concat(photos);
          // tslint:disable-next-line:curly
          if (!photos.length) this.hasMore = false;

        });
    }
}
