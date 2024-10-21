import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../model/cat';

@Injectable({
  providedIn: 'root'
})
export class CatsApiService {
  private getAllUrl = 'https://cataas.com/api/cats?limit=10&skip=0';
  private getTagsUrl = 'https://cataas.com/api/tags';
  private httpClient = inject(HttpClient);

  getAllCats(page: number): Observable<Cat[]> {
    return this.httpClient.get<Cat[]>(this.getAllUrl);
  }

  getTags(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.getTagsUrl);
  }

}
