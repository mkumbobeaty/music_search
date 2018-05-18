import { Component, OnInit } from '@angular/core';
import {SearchService} from "../search.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';


@Component({
  selector: 'app-albam',
  templateUrl: './albam.component.html',
  styleUrls: ['./albam.component.css']
})

export class AlbamComponent implements OnInit {
  id:any;
  channels: any;

  constructor(private searchService:SearchService, private location:Location,private route:ActivatedRoute) {
    route.params.subscribe(params => {this.id = params['id']})
  }
  seachChannel(): any{
     return this.searchService.getAlbum(this.id)
       .subscribe(res => {
         console.log(res)
           return this.channels = res;
         });
  }

  back(): void {
    this.location.back();
  }
  ngOnInit() {
    this.seachChannel();
  }

}
