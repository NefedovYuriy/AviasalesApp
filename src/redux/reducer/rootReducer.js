import { combineReducers } from 'redux';

import { reducerFilter } from './reducerFilter';
import { reducerTabs } from './reducerTabs';
import { reducerTickets } from './reducerTickets';

export const rootReducer = combineReducers({
  reducerFilter,
  reducerTabs,
  reducerTickets,
});
