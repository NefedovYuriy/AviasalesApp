import React from 'react';
import { Alert } from 'antd';

export function ErrorWarning() {
  return <Alert description="Рейсов, подходящих под заданные фильтры, не найдено." type="warning" showIcon />;
}
