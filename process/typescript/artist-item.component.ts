import { Component } from 'angular2/core';

@Component ({
  selector: 'artist-item',
  templateUrl: 'partials/artistitem.html',
  styleUrls: ['css/app-item.css']
  inputs: ['artist']
})

export class ArtistItemComponent {}
