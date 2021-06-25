import { createAction } from '@ngrx/store';
import { Movie } from '../../Models/movie';

//we have 2 actions ,getMoviesSuccess as input action on the effect and the response return we call getMovicesSuccess Movie[]
export const getMovies = createAction('[Movie] Get movie');

export const getMoviesSuccess = createAction(
  '[Movie] Get movie success',
   (movies: ReadonlyArray<Movie>) => ({ movies })
 // props<{ movies: ReadonlyArray<Movie> }>()
);
//we have 2 addMovies ,addMoviesSuccess as input action on the effect and the response return we call getMovicesSuccess Movie[]
export const addMovies = createAction(
  '[Movie] Add movie',
  //the below syntax is to pass the class instace instead of make anonomous object
  (movie: Movie) => ({movie})
  // props<{ movie: Movie }>()
);

export const addMoviesSuccess = createAction(
  '[Movie] Add movie success',
   (movie: Movie) => ({movie})
  // props<{ movie: Movie }>()
);

export const assignUser = createAction(
  '[User] assign user',
  (user: string) => ({ user })
);

export const logout = createAction('[User] logout');

