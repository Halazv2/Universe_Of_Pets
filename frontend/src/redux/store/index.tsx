import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';
import {useMemo} from 'react';

const rootReducer = combineReducers({
  ...reducers,
});

export type AppState = ReturnType<typeof rootReducer>;

function initStore(initialState?: AppState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware),
  );
}

export const initializeStore = (preloadedState) => {
  let _store = initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState) {
    _store = initStore({
      ...preloadedState,
    });
  }

  return _store;
};

export function useStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
