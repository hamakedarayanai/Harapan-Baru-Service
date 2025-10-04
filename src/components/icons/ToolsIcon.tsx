

interface IconProps {
  className?: string;
}

export const ToolsIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.66-4.66c-.384-.317-.626-.74-.766-1.208l-3.03-2.496m-2.496-3.03L3 3m0 0l2.496 3.03m0 0l4.66 4.66m-4.66-4.66L3 3m12.12 12.12l-5.877 5.877A2.652 2.652 0 013 17.25l5.877-5.877m5.243 0l2.496-3.03c.317-.384.74-.626 1.208-.766m-1.208.766L21 3m0 0l-3.03 2.496m0 0l-4.66 4.66m4.66-4.66L21 3" />
  </svg>
);
