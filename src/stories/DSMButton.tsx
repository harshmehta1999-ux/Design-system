import React from 'react';
import './dsm-button.css';

export interface DSMButtonProps {
  /** Button label text */
  label?: string;
  /** Button size */
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  /** Visual state — use for Storybook demos; hover/focus also work naturally via CSS */
  state?: 'default' | 'hover' | 'focus' | 'disabled';
  /** Show the leading + icon */
  icon?: boolean;
  /** Optional click handler */
  onClick?: () => void;
}

const PlusIcon = ({ disabled }: { disabled: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M10 4.167v11.666M4.167 10h11.666"
      stroke={disabled ? 'rgba(0,0,0,0.38)' : 'white'}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const DSMButton = ({
  label = 'Button',
  size = 'medium',
  state = 'default',
  icon = true,
  onClick,
}: DSMButtonProps) => {
  const isDisabled = state === 'disabled';

  return (
    <button
      type="button"
      className={[
        'dsm-button',
        `dsm-button--${size}`,
        `dsm-button--${state}`,
      ].join(' ')}
      disabled={isDisabled}
      onClick={onClick}
    >
      {icon && <PlusIcon disabled={isDisabled} />}
      <span>{label}</span>
    </button>
  );
};
