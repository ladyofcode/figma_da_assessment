// The instructions said to add notes
// I rarely comment in prod.

import { ReactNode } from 'react';

import './Button.css';

export type ButtonSize = 'small' | 'mediaum';
export type ButtonVariant = 'primary' | 'neutral' | 'subtle';

export interface ButtonProps {
  children?: ReactNode;
  size: ButtonSize;
  variant: ButtonVariant;
  iconStar?: boolean;
  iconX?: boolean;
  isDisabled?: boolean;
}

export function Button({
  children,
  iconStar,
  iconX,
  size,
  variant,
  isDisabled = false,
  ...props
}: ButtonProps) {
  return (
    <button className={`${size} ${variant}`} {...props} disabled={isDisabled}>
      {/* The Figma file has 'Has Icon Start' and 'Has Icon End'; I'd check with the design system if the icon should be passed into those parameters instead of hardcoding the SVGs here */}
      {iconStar && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1.33333L10.06 5.50666L14.6667 6.18L11.3333 9.42666L12.12 14.0133L8 11.8467L3.88 14.0133L4.66667 9.42666L1.33334 6.18L5.94 5.50666L8 1.33333Z"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
      {/* Using props.children to follow React + semantic patterns
      Ideally would check design system preferences; using label prop instead to restrict can be good */}
      {children}
      {iconX && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4L4 12M4 4L12 12"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

// Further work:
// Decide on defaults
// Functions for the icons (favourites/removeal?)
// Moving their icons to their own components for reuse elsewhere
// Accommodating other icons
// Moving the button classes to a const and using clsx if it gets much longer
// ARIA roles etc for accessibility
// Naming conventions to use instead of Button
