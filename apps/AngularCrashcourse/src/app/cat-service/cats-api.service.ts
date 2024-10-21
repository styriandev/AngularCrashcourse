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

  getAllCats(page?: number, tags?: string[]): Observable<Cat[]> {
    let url = this.getAllUrl;
    if (tags) {
      url += '&tags=' + tags.join(',');
    }
    return this.httpClient.get<Cat[]>(url);
  }

  getTags(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.getTagsUrl);
  }

}
