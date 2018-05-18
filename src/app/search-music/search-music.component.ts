import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SearchService} from "../search.service";
import {SearchResult} from "../search-result";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.component.html',
  styleUrls: ['./search-music.component.css']
})
export class SearchMusicComponent implements OnInit {
// variable for current search term
query:any;
// variable for all search result;
results: any;

  constructor( private router: Router,
               private searchService: SearchService,
               private route: ActivatedRoute ,
               private el: ElementRef) {
    this.route.queryParams.subscribe(params => this.query = params['query'] || '');

  }
  searchTracks(): void {
    if (!this.query) {
      return;
    }
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .map((query: any) => this.searchService.seachTrack(query))
        .switch()
        .subscribe((res: SearchResult[])=> {
            this.results = null;
            if( res) {
              this.results = res;
          }
          })
  }

  submitForm(query: any): void {
    this.router.navigate(['search'], { queryParams: { query: query } })
      .then(_ => this.searchTracks() );
  }
  ngOnInit() {
    this.searchTracks()
  }

}
