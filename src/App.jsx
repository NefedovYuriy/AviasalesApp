import React from 'react';
import {
  Filters, Logo, Tabs, TicketsList,
} from './components';

import classes from './app.module.scss';

export function App() {
  return (
    <div className={classes.container}>
      <Logo />
      <main className={classes.app}>
        <Filters />
        <div className={classes.app__main}>
          <Tabs />
          <TicketsList />
        </div>
      </main>
    </div>
  );
}
