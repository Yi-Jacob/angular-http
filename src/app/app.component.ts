import { Component, Injectable, ReflectiveInjector } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { Observable } from 'rxjs';

const observable = new Observable((observer) => {
  observer.next(1)
})

observable.subscribe(x => {
  console.log(x)
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [];

  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((response: any) => {
      this.pages = response.query.search;
    });
  }
}
