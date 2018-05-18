/*
 * Angular
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {SearchService} from "../search.service";

/*
 * Services
 */

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: any;

  constructor(private route: ActivatedRoute, private searchService: SearchService,
              private location: Location) {
    route.params.subscribe(params => { this.id = params['id']; });
  }
searchArtist():void{
    this.searchService.getArtist(this.id)
      .subscribe(res => {
        return res.map(item => {
          console.log(item)
          this.artist = item;
        } )

})
}
  ngOnInit(): void {
    this.searchArtist();
  }

  back(): void {
    this.location.back();
  }
}
