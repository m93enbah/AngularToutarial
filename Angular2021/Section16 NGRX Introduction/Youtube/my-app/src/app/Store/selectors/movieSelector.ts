import { createSelector } from '@ngrx/store';
import { Movie } from 'src/app/Models/movie';
import { MovieState } from '../Reducers/movie.reducers';

// Selector Template Configuration //
//we define the selector which each one get single state (movies)
export const movieSelector = createSelector(
  (state: MovieState) => state.movies,
  (movies: ReadonlyArray<Movie>) => movies
);
//we define the selector which each one get single state (movies)
export const userSelctor = createSelector(
  (state: MovieState) => state.user,
  (user: string) => user
);

//Selector Filter (used by the component)//
//in this filter we pass the selector we want and we make filter on it

export const findByUserName = (username: string) =>
  createSelector(movieSelector, (movies) => {
    return movies.filter((movie: Movie) => movie.userName === username);
  });

export const greater = (amount: number) =>
  createSelector(movieSelector, (movies) => {
    return movies.filter((movie: Movie) => movie.earning >= amount);
  });

//on user selector
export const getName = () =>
  createSelector(userSelctor, (user) => {
    return user;
  });


//get multi state without use the selector template

  export const movieUserSelector = createSelector(
    (state: MovieState) => state.movies,
    (state: MovieState) => state.user,
    (movies: ReadonlyArray<Movie>, user: Readonly<string>) => {
      return movies.filter((movie: Movie) => movie.userName === user);
    }
  );
