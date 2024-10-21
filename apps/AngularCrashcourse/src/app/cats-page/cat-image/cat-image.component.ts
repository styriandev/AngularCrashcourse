import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cat-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat-image.component.html',
  styleUrl: './cat-image.component.css',
})
export class CatImageComponent {
  catId = input.required<string>();

  private imageBaseUrl = 'https://cataas.com/cat/$CAT_ID?position=center';

  protected catUrl = computed(() => {
    return this.imageBaseUrl.replace('$CAT_ID', this.catId());
  })
}
