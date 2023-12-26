import { getSearchId, getTicketsData } from '../../api';
import {
  TOGGLE_FILTER,
  TAB_CHEAPEST,
  TAB_FAST,
  TAB_OPTIMAL,
  FETCH_TICKETS_START,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
  VIEW_MORE,
} from './actionsTypes';

export const toggleFilter = (value) => ({ type: TOGGLE_FILTER, payload: { value } });

export const onTabCheapest = () => ({ type: TAB_CHEAPEST });
export const onTabFast = () => ({ type: TAB_FAST });
export const onTabOptimal = () => ({ type: TAB_OPTIMAL });

export const fetchTicketsStart = () => ({ type: FETCH_TICKETS_START });
export const fetchTicketsSuccess = (tickets) => ({
  type: FETCH_TICKETS_SUCCESS,
  payload: tickets,
});
export const fetchTicketsFailure = (error) => ({
  type: FETCH_TICKETS_FAILURE,
  payload: error,
});

export const viewMore = () => ({ type: VIEW_MORE });

const getData = async (id, dispatch) => {
  try {
    const response = await getTicketsData(id);
    const { tickets, stop } = response;
    if (stop) return dispatch(fetchTicketsStart());
    if (tickets.length) {
      dispatch(fetchTicketsSuccess(tickets));
      getData(id, dispatch);
    }
  } catch (e) {
    if (e.message === 'Status code 500') {
      getData(id, dispatch);
    } else {
      dispatch(fetchTicketsFailure(e.message));
    }
  }
};

export const getDataId = () => async (dispatch) => {
  const id = await getSearchId();
  await getData(id, dispatch);
};
