import { createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/Models/movie';
import { addMoviesSuccess, assignUser, getMoviesSuccess } from '../Actions/movie.action';

//to prevent to add to array only to read or replace new array with the old array
//we using MovieState in order to pass parameter on the selector
export interface MovieState {
  movies: ReadonlyArray<Movie>;
  user:Readonly<string>;
}

const initialState: ReadonlyArray<Movie> = [];

//it will contains two parameters : initial state , actions 
//the reducer will map the action with the function handling
//we assign mulitple actions on the reducer
export const movieReducer = createReducer(
  initialState,
  on(getMoviesSuccess, (state, { movies }) => [...movies]),
   //cannot apply state.push(movie) its not allowed in NGRX
  //in the below syntax [...state,movie] it equal to
  on(addMoviesSuccess, (state, { movie }) => [...state, movie])
);


const initialUserSate = '';
export const userReducer = createReducer(
  initialUserSate,
  on(assignUser, (state, { user }) => user)
);

