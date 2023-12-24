import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
 import './style.css';

export default function CircularIndeterminate() {
  return (
    <div className='loader'>
      <CircularProgress />
    </div>
  );
}