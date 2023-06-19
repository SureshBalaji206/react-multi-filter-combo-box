import React from 'react';
import { IconProps } from '../types/utils';

export default function DownArraycon({
  fill = 'gray',
  height = 24,
  width = 24,
}: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={fill}
      height={height}
      width={width}
      viewBox='0 0 512 512'
      id='down-arrow'
    >
      <path d='M98.9 184.7l1.8 2.1 136 156.5c4.6 5.3 11.5 8.6 19.2 8.6 7.7 0 14.6-3.4 19.2-8.6L411 187.1l2.3-2.6c1.7-2.5 2.7-5.5 2.7-8.7 0-8.7-7.4-15.8-16.6-15.8H112.6c-9.2 0-16.6 7.1-16.6 15.8 0 3.3 1.1 6.4 2.9 8.9z'></path>
    </svg>
  );
}