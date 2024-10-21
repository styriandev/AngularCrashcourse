import { Component, inject, model, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsApiService } from '../cat-service/cats-api.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { CatImageComponent } from './cat-image/cat-image.component';
import { FormsModule } from '@angular/forms';
import { Observable, switchMap } from 'rxjs';
import { Cat } from '../model/cat';
import { CatFilterComponent } from './cat-filter/cat-filter.component';

@Component({
  selector: 'app-cats-page',
  standalone: true,
  imports: [CommonModule, CatImageComponent, FormsModule, CatFilterComponent],
  templateUrl: './cats-page.component.html',
  styleUrl: './cats-page.component.scss',
})
export class CatsPageComponent {
  private catService = inject(CatsApiService);
  private currentPage = 0;

  protected cats: Signal<Cat[] | undefined>;
  protected selectedTag = model<string>();

  constructor() {
    const selectedTagAsObs = toObservable(this.selectedTag);
    const observable = selectedTagAsObs.pipe(
      switchMap((selectedTag) => {
        console.log(selectedTag);
        if (selectedTag) {
          return this.catService.getAllCats(0, [selectedTag]);
        } else {
          return this.catService.getAllCats();
        }
      })
    );
    this.cats = toSignal(observable);
  }
}
