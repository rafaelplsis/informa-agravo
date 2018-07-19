import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../photo.service';
import { Photo } from '../../photo';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];

  constructor (
    private photoService: PhotoService,
    private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const userName = this.activateRoute.snapshot.params.userName;

    this.photoService
      .listFromUser(userName)
      .subscribe(photos => this.photos = photos);
  }

}
