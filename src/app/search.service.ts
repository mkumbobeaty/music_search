import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {Http} from "@angular/http";
import {SearchResult} from "./search-result";

export const YOUTUBE_API_KEY =
  'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
export const YOUTUBE_API_URL =
  'https://www.googleapis.com/youtube/v3';
@Injectable()
export class SearchService {
  constructor( private http: HttpClient,
               @Inject(YOUTUBE_API_KEY) private apiKey: string,
               @Inject(YOUTUBE_API_URL) private apiUrl: string) { }



  query(URL: string, params?: Array<string>): Observable<SearchResult[]> {
    let queryURL = `${this.apiUrl}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }
    return this.http.get(queryURL).map(response => {
      return  <any>response["items"].map(item => {
        return new SearchResult({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.high.url,
          channelTitle:item.snippet.channelTitle,
          channelId: item.snippet.channelId
        });
      });
    });
  }

  search(query: string, type: string): Observable<any[]> {
    return this.query(`/search`, [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=12`

    ]);
  }
  searchById(query:string) {
    console.log('channel search', query)
    return this.query(`/search`,  [
      `q=${query}`,
      `key=${this.apiKey}`,

      `part=snippet`

    ]);
    }
  seachTrack(query: string): Observable<any[]> {
    return this.search(query,'video')
  }

  getTrack(id: string): Observable<any[]> {
    return this.query(`/tracks/${id}`);
  }

  getArtist(channel: string): Observable<any[]> {
    return this.searchById(channel);
  }

  getAlbum(id: string): Observable<any[]> {
    return this.searchById(id);
  }

}
