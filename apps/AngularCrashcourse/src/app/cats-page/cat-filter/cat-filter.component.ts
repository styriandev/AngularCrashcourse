import { Component, inject, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { CatsApiService } from '../../cat-service/cats-api.service';

@Component({
  selector: 'app-cat-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cat-filter.component.html',
  styleUrl: './cat-filter.component.scss',
})
export class CatFilterComponent {
  private catService = inject(CatsApiService);
  private availableTags$ = this.catService.getTags();
  protected availableTags = toSignal(this.availableTags$);

  selectedTag = model<string>();
}
