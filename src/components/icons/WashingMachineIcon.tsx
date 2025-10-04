import React from 'react';

interface IconProps {
  className?: string;
}

export const WashingMachineIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5h16.5V3.75H3.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6.75 6.75 0 100-13.5 6.75 6.75 0 000 13.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75h1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75h1.5" />
  </svg>
);