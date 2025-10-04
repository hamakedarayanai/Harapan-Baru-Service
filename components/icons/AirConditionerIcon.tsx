
import React from 'react';

interface IconProps {
  className?: string;
}

export const AirConditionerIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25v19.5m-7.5-12h15M4.5 12h15m-16.5 4.5l3.75-3.75M19.5 7.5l-3.75 3.75M4.5 7.5l3.75 3.75M19.5 16.5l-3.75-3.75" />
  </svg>
);
