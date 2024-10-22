import { Component, inject, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CatImageComponent } from './cats-page/cat-image/cat-image.component';
import { CatsPageComponent } from './cats-page/cats-page.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    CatImageComponent,
    CatsPageComponent,
    FormsModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AngularCrashcourse';

  enteredFirstname = '';
  person = {
    firstname: 'test',
    lastname: 'lastname',
  };

  private service = inject(HttpClient);
  constructor() {}

  changeLastname() {
    this.person.lastname = 'asdfsfd';
  }
}

