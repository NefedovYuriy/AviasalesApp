import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import * as actions from '../../redux/actions/actionsCreators';

import classes from './tabs.module.scss';

export function Tabs() {
  const active = useSelector((state) => state.reducerTabs.tab);
  const { onTabCheapest, onTabFast, onTabOptimal } = actions;
  const dispatch = useDispatch();
  return (
    <div className={classes.tabs}>
      <button
        type="button"
        onClick={() => dispatch(onTabCheapest())}
        className={classNames(
          classes.tabs__button,
          classes.tabs__button_cheapest,
          `${active === 'cheapest' ? classes.checked : null}`,
        )}
      >
        самый дешевый
      </button>
      <button
        type="button"
        onClick={() => dispatch(onTabFast())}
        className={classNames(
          classes.tabs__button,
          classes.tabs__button_fast,
          `${active === 'fast' ? classes.checked : null}`,
        )}
      >
        самый быстрый
      </button>
      <button
        type="button"
        onClick={() => dispatch(onTabOptimal())}
        className={classNames(
          classes.tabs__button,
          classes.tabs__button_optimal,
          `${active === 'optimal' ? classes.checked : null}`,
        )}
      >
        оптимальный
      </button>
    </div>
  );
}
