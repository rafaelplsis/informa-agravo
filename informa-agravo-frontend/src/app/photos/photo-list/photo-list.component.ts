import { Component, OnInit } from '@angular/core';
import { Photo } from '../../photo';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter = '';

  constructor (
    private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.photos = this.activateRoute.snapshot.data['photos'];
  }

}
