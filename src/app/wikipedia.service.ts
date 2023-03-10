import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { pluck } from 'rxjs/operators'


interface wikiResponse {
  query: {
    search: {
      title: string,
      snippet: string,
      pageid: number
    }[]
  }
}
@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  public search(term: string) {
    return this.http.get<wikiResponse>('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    })
    .pipe(pluck('query', 'search'));
  }
}
