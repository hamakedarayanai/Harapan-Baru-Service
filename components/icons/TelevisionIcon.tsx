
import React from 'react';

interface IconProps {
  className?: string;
}

export const TelevisionIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3.75v3.75m-3.75-3.75v3.75m0-3.75h3.75m9-3.75h-15A2.25 2.25 0 012.25 12V5.25A2.25 2.25 0 014.5 3h15A2.25 2.25 0 0121.75 5.25V12a2.25 2.25 0 01-2.25 2.25h-1.5" />
  </svg>
);
