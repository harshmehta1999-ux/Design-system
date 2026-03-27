import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { AppBar, type AppBarProps } from './AppBar';

const SIDEBARS: AppBarProps['sidebar'][] = ['Collapsed', 'Expanded'];

const meta = {
  title: 'DSM/AppBar',
  component: AppBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    sidebar: {
      control: 'radio',
      options: SIDEBARS,
      description: 'Controls the menu icon — Collapsed shows ☰, Expanded shows ☰←',
    },
    avatarText: {
      control: 'text',
      description: 'Initials rendered inside the avatar circle',
    },
    logoSrc: {
      table: { disable: true },
    },
  },
  args: {
    sidebar: 'Collapsed',
    avatarText: 'JD',
    onMenuClick: fn(),
  },
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Individual variant stories ────────────────────────────────────────────────

export const Collapsed: Story = {
  name: 'Collapsed — sidebar closed',
  args: { sidebar: 'Collapsed' },
};

export const Expanded: Story = {
  name: 'Expanded — sidebar open',
  args: { sidebar: 'Expanded' },
};

// ── All variants in one view ──────────────────────────────────────────────────

const AllVariants = (args: AppBarProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
    {SIDEBARS.map((sidebar) => (
      <div key={sidebar}>
        <div
          style={{
            padding: '6px 16px',
            backgroundColor: '#f5f5f5',
            borderBottom: '1px solid #e0e0e0',
            fontFamily: 'sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: '#757575',
            textTransform: 'uppercase' as const,
            letterSpacing: '0.8px',
          }}
        >
          {sidebar}
        </div>
        <AppBar {...args} sidebar={sidebar} />
      </div>
    ))}
  </div>
);

export const AllVariantsStory: Story = {
  name: 'All Variants',
  render: (args) => <AllVariants {...args} />,
};

// ── Avatar initials variants ──────────────────────────────────────────────────

const INITIALS = ['JD', 'AB', 'PN', 'MK'];

const AvatarVariants = (args: AppBarProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
    {INITIALS.map((initials) => (
      <div key={initials}>
        <div
          style={{
            padding: '6px 16px',
            backgroundColor: '#f5f5f5',
            borderBottom: '1px solid #e0e0e0',
            fontFamily: 'sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: '#757575',
            textTransform: 'uppercase' as const,
            letterSpacing: '0.8px',
          }}
        >
          Avatar: {initials}
        </div>
        <AppBar {...args} avatarText={initials} />
      </div>
    ))}
  </div>
);

export const AvatarInitials: Story = {
  name: 'Avatar — Initials',
  render: (args) => <AvatarVariants {...args} />,
};
