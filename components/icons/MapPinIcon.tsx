
import React from 'react';

interface IconProps {
  className?: string;
}

export const MapPinIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 005.16-4.057l-1.18-1.18a15.475 15.475 0 01-4.04 3.033.75.75 0 01-.71.002 15.475 15.475 0 01-4.04-3.033L6.38 18.293a16.975 16.975 0 005.16 4.057z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M12 2.25a6.75 6.75 0 00-6.75 6.75c0 4.14 4.25 9.75 6.75 12.394 2.5-2.644 6.75-8.254 6.75-12.394A6.75 6.75 0 0012 2.25zM12 12a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);
