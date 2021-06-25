import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from './Models/movie';
import { addMovies, assignUser, getMovies, logout } from './Store/Actions/movie.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  newMovie: Movie = new Movie();
  title = 'movieApp';
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getAllMovies();
  }


  getAllMovies(): void {
    //it will call the reducer to call action that call effect that return response to action then to reducer
    this.store.dispatch(getMovies());
    this.store.dispatch(assignUser('Subrat'));

    // this.dataService.getMovies().subscribe((movies: Movie[]) => {
    //   this.movies = movies;
    // });
  }

  addNewMovies(): void {
    //it will call the reducer to call action that call effect that return response to action then to reducer
    this.store.dispatch(addMovies(this.newMovie));
    //we clear the data 
    this.newMovie = new Movie();
    // this.dataService.addMovies(this.newMovie).subscribe((res) => {
    //   this.getAllMovies();
    //   this.newMovie = new Movie();
    // });
  }

  changeUser(): void {
    this.store.dispatch(assignUser('Sanjit'));
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
