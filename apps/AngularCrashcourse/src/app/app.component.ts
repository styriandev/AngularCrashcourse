import { Component, inject, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CatImageComponent } from './cats-page/cat-image/cat-image.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CatImageComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {


  title = 'AngularCrashcourse';
}
