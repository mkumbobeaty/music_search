import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AlbamComponent } from './albam/albam.component';
import { ArtistComponent } from './artist/artist.component';
import {
  LocationStrategy,
  HashLocationStrategy,
  APP_BASE_HREF
} from "@angular/common";
import { SearchMusicComponent } from './search-music/search-music.component';
import { TrackComponent } from './track/track.component'
import {SearchService, YOUTUBE_API_KEY, YOUTUBE_API_URL} from "./search.service";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchMusicComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbamComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    AlbamComponent,
    ArtistComponent,
    SearchMusicComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SearchService,
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
    {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
