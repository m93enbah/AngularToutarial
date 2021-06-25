import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EmptyError } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, tap } from 'rxjs/operators';
import { Movie } from 'src/app/Models/movie';
import { DataService } from 'src/app/Service/data.service';

import {
  getMovies,
  getMoviesSuccess,
  addMovies,
  addMoviesSuccess,
} from '../Actions/movie.action';

@Injectable()
export class MovieEffects {
  //in effect we pass the action as input then call the data servcie to return respone and then execute another action
  //we will create effect in order to call services to return response from it
  loadMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(getMovies),
      //source items are ignored while the previous Observable is not completed
      exhaustMap(() =>
        this.dataService.getMovies().pipe(
          map((movies) => getMoviesSuccess(movies)),
          // catchError(() => EmptyError)
        )
      )
    )
  );

  //in effect we pass the action as input then call the data servcie to return respone and then execute another action
  //we will create effect in order to call services to return response from it
  addMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(addMovies),
      tap((movie) => console.log(movie)),
      //waits for the previous Observable to complete before creating the next one
      concatMap(({ movie }) =>
        this.dataService.addMovies(movie).pipe(
          map((newMovie) => addMoviesSuccess(newMovie)),
          // catchError(() => EmptyError)
        )
      )
    )
  );

  constructor(private action$: Actions, private dataService: DataService) {}
}