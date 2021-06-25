import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { assignUser, getMovies } from '../Store/Actions/movie.action';
import { MovieState } from '../Store/Reducers/movie.reducers';
import { findByUserName, getName, greater } from '../Store/selectors/movieSelector';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {

  //we get data state from the data store
  // movies$ = this.store.select('movies');

  movies$ = this.store.pipe(select(findByUserName('Sanjit')));  
  // movies$ = this.store.pipe(select(movieUserSelector));
  // movies$ = this.store.pipe(select(greater(1000)));


  user$ = this.store.pipe(select(getName()));  


  constructor(private store: Store<MovieState>) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.movies$ = this.store.pipe(select(greater(2000)));
    }, 5000);
  }
}