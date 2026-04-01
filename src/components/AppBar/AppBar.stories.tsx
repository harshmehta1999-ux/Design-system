import type { Meta, StoryObj } from '@storybook/react';
import { AppBar } from './AppBar';

const meta: Meta<typeof AppBar> = {
  title: 'Components/AppBar',
  component: AppBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const Collapsed: Story = {
  args: {
    sidebar: 'Collapsed',
    avatarText: 'JD',
  },
};

export const Expanded: Story = {
  args: {
    sidebar: 'Expanded',
    avatarText: 'JD',
  },
};
