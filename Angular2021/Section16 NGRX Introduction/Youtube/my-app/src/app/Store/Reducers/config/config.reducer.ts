import {
  ActionReducer,
  ActionReducerMap,
  INIT,
  MetaReducer,
} from '@ngrx/store';

import { environment } from 'src/environments/environment';
import { logout } from '../../Actions/movie.action';
import { movieReducer, MovieState, userReducer } from '../movie.reducers';

//we collect all reducer in this const variable and used on the app.module
export const reducers: ActionReducerMap<MovieState> = {
  movies: movieReducer,
  user: userReducer,
};

const debugMeta = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
};

const logoutMeta = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    //if the action 
    if (action?.type === logout.type) {
      return reducer(undefined, { type: INIT });
    }
    return reducer(state, action);
  };
};

export const metaReducers: MetaReducer<MovieState>[] = environment.production
  ? [logoutMeta]
  : [debugMeta, logoutMeta];
