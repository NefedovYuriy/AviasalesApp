import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { ErrorMessage, ErrorWarning } from '../Errors';
import { filterTickets, onSortTickets } from '../../utilities/utilities';

import classes from './ticketsList.module.scss';
import * as actions from '../../redux/actions/actionsCreators';
import { Ticket } from '../Ticket';
import { Loader } from '../Loader';

export function TicketsList() {
  const [counter, setCounter] = useState(5);
  const reducerTabs = useSelector((state) => state.reducerTabs);
  const reducerFilter = useSelector((state) => state.reducerFilter);
  const reducerTickets = useSelector((state) => state.reducerTickets);
  const dispatch = useDispatch();
  const { tab } = reducerTabs;
  const { tickets, loading, error } = reducerTickets;

  useEffect(() => {
    const { getDataId } = actions;
    dispatch(getDataId());
  }, []);

  const sortFilterTickets = useMemo(
    () => filterTickets(reducerFilter, onSortTickets(tickets, tab)),
    [reducerFilter, onSortTickets, tickets, tab],
  );

  return (
    <>
      {!loading && !error ? <Loader /> : null}
      {error ? <ErrorMessage message={error} /> : null}
      <ul className={classes.tickets__list}>
        {sortFilterTickets.slice(0, counter).map((ticket) => (
          <Ticket key={uuidv4()} item={ticket} />
        ))}
        {!sortFilterTickets.length && !error ? <ErrorWarning /> : null}
      </ul>
      {sortFilterTickets.length ? (
        <button type="button" onClick={() => setCounter(counter + 5)} className={classes.button__more}>
          Показать еще 5 билетов
        </button>
      ) : null}
    </>
  );
}
