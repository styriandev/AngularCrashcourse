import { Component, inject, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsApiService } from '../cat-service/cats-api.service';
import { toSignal } from '@angular/core/rxjs-interop'
import { CatImageComponent } from './cat-image/cat-image.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cats-page',
  standalone: true,
  imports: [CommonModule, CatImageComponent, FormsModule],
  templateUrl: './cats-page.component.html',
  styleUrl: './cats-page.component.scss',
})
export class CatsPageComponent {
  private catService = inject(CatsApiService);

  private currentPage = 0;
  private cat$ = this.catService.getAllCats(this.currentPage);
  private availableTags$ = this.catService.getTags();

  protected cats = toSignal(this.cat$);
  protected availableTags = toSignal(this.availableTags$);

}
