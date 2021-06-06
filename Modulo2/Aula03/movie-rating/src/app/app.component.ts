import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-rating';

  movies = [
    {title: 'Avengers', rating: 5},
    {title: 'Titanic', rating: 4},
    {title: 'Jurassic World', rating: 3},
    {title: 'Lalaland', rating: 1}
  ]
}