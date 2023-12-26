import React from 'react';
import { Spin } from 'antd';

import classes from './loader.module.scss';

export function Loader() {
  return <Spin className={classes.loader} />;
}
