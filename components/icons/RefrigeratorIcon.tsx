
import React from 'react';

interface IconProps {
  className?: string;
}

export const RefrigeratorIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 3h15a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-15A1.5 1.5 0 014.5 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5h15" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 6v1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15v1.5" />
  </svg>
);
