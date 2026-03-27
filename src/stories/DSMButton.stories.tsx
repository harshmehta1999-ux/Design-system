import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { DSMButton, type DSMButtonProps } from './DSMButton';

const STATES: DSMButtonProps['state'][] = ['default', 'hover', 'focus', 'disabled'];

const meta = {
  title: 'DSM/Button',
  component: DSMButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text',
    },
    size: {
      table: { disable: true },
    },
    state: {
      table: { disable: true },
    },
    icon: {
      control: 'boolean',
      description: 'Show or hide the leading + icon',
    },
  },
  args: {
    label: 'Button',
    icon: true,
    onClick: fn(),
  },
} satisfies Meta<typeof DSMButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const AllStates = ({ size, ...args }: DSMButtonProps) => (
  <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-end' }}>
    {STATES.map((state) => (
      <div
        key={state}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}
      >
        <DSMButton {...args} size={size} state={state} />
        <span
          style={{
            fontSize: '11px',
            color: '#888',
            textTransform: 'capitalize',
            fontFamily: 'sans-serif',
          }}
        >
          {state}
        </span>
      </div>
    ))}
  </div>
);

export const XSmall: Story = {
  name: 'XSmall — 28px',
  render: (args) => <AllStates {...args} size="xsmall" />,
};

export const Small: Story = {
  name: 'Small — 30px',
  render: (args) => <AllStates {...args} size="small" />,
};

export const Medium: Story = {
  name: 'Medium — 36px',
  render: (args) => <AllStates {...args} size="medium" />,
};

export const Large: Story = {
  name: 'Large — 42px',
  render: (args) => <AllStates {...args} size="large" />,
};
