import React from 'react';
import { Alert } from 'antd';

export function ErrorMessage({ message }) {
  return <Alert message="Error" description={message} type="error" showIcon />;
}
