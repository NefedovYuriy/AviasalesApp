import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../redux/actions/actionsCreators';

import classes from './filters.module.scss';

export function Filters() {
  const filter = useSelector((state) => state.reducerFilter);
  const { toggleFilter } = actions;
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(toggleFilter(value));
  };

  return (
    <div className={classes.filters}>
      <h2 className={classes.filters__title}>Количество пересадок</h2>
      <ul className={classes.filters__list}>
        {filter.map((elem) => (
          <li key={elem.value} className={classes.filters__item}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={classes.filters__label}>
              <input
                type="checkbox"
                className={classes.filters__checkbox}
                checked={elem.checked}
                onChange={() => handleChange(elem.value)}
              />
              <span className={classes.filters__text}>{elem.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
