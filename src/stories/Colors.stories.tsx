import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

// ─── Color tokens from Figma DSM (node 342:331) ───────────────────────────────

type ColorToken = { name: string; variable: string; value: string };

const colorGroups: Record<string, ColorToken[]> = {
  Common: [
    { name: 'Black',  variable: 'Common/Black', value: '#000000' },
    { name: 'White',  variable: 'Common/White', value: '#ffffff' },
  ],
  Primary: [
    { name: 'Main',   variable: 'Primary/Main', value: '#1e1f1f' },
  ],
  Error: [
    { name: 'Main',   variable: 'Error/Error - main',   value: '#92271b' },
  ],
  Warning: [
    { name: 'Main',   variable: 'Warning/Warning - main', value: '#e29055' },
  ],
  Info: [
    { name: 'Main',   variable: 'Info/Info - Main',     value: '#caebfe' },
  ],
  Success: [
    { name: 'Main',   variable: 'Success/Success - main', value: '#26a69a' },
  ],
  Grey: [
    { name: '50',   variable: 'Grey / 50',   value: '#fafafa' },
    { name: '100',  variable: 'Grey / 100',  value: '#f5f5f5' },
    { name: '200',  variable: 'Grey / 200',  value: '#eeeeee' },
    { name: '300',  variable: 'Grey / 300',  value: '#e0e0e0' },
    { name: '400',  variable: 'Grey / 400',  value: '#bdbdbd' },
    { name: '500',  variable: 'Grey / 500',  value: '#9e9e9e' },
    { name: '600',  variable: 'Grey / 600',  value: '#757575' },
    { name: '700',  variable: 'Grey / 700',  value: '#616161' },
    { name: '800',  variable: 'Grey / 800',  value: '#424242' },
    { name: '900',  variable: 'Grey / 900',  value: '#212121' },
    { name: 'A100', variable: 'Grey / A100', value: '#f5f5f5' },
    { name: 'A200', variable: 'Grey / A200', value: '#eeeeee' },
    { name: 'A400', variable: 'Grey / A400', value: '#bdbdbd' },
    { name: 'A700', variable: 'Grey / A700', value: '#616161' },
  ],
  Neutral: [
    { name: '500 Icon',          variable: 'Neutral/Neutral - 500 Icon',          value: '#747474' },
    { name: '700 Secondary Text',variable: 'Neutral/Neutral - 700 Secondary Text', value: '#484848' },
    { name: '900 Main',          variable: 'Neutral/Neutral - 900 Main',          value: '#000000' },
  ],
  Text: [
    { name: 'Primary',          variable: 'Text/Primary',          value: '#1e1f1f' },
    { name: 'Secondary',        variable: 'Text/Secondary',        value: 'rgba(0,0,0,0.60)' },
    { name: 'Primary Contrast', variable: 'Text/Primary Contrast', value: '#ffffff' },
    { name: 'Disabled',         variable: 'Text/Disabled',         value: 'rgba(0,0,0,0.38)' },
  ],
  Background: [
    { name: 'Default', variable: 'Background/Background Default', value: '#fefefe' },
    { name: 'Paper',   variable: 'Background/Background Paper',   value: '#ffffff' },
  ],
  Divider: [
    { name: 'Divider', variable: 'Divider/Divider', value: 'rgba(0,0,0,0.12)' },
  ],
  Border: [
    { name: 'Border',  variable: 'Border', value: 'rgba(0,0,0,0.23)' },
  ],
  Action: [
    { name: 'Active',              variable: 'Action / active',              value: 'rgba(0,0,0,0.54)' },
    { name: 'Hover',               variable: 'Action / hover',               value: 'rgba(0,0,0,0.04)' },
    { name: 'Selected',            variable: 'Action / selected',            value: 'rgba(0,0,0,0.08)' },
    { name: 'Disabled',            variable: 'Action / disabled',            value: 'rgba(0,0,0,0.26)' },
    { name: 'Disabled Background', variable: 'Action / disabledBackground',  value: 'rgba(0,0,0,0.12)' },
    { name: 'Focus',               variable: 'Action / Focus',               value: 'rgba(0,0,0,0.12)' },
  ],
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const isLightColor = (value: string) => {
  if (value === '#ffffff' || value === '#fefefe' || value === '#fafafa') return true;
  if (value.startsWith('#f') || value.startsWith('#e')) return true;
  if (value.includes('rgba(0,0,0,0.0') || value.includes('rgba(0,0,0,0.1') ||
      value.includes('rgba(0,0,0,0.2') || value === 'rgba(0,0,0,0.38)' ||
      value === '#caebfe') return true;
  return false;
};

// ─── Swatch ───────────────────────────────────────────────────────────────────

const Swatch = ({ name, variable, value }: ColorToken) => (
  <div style={{ display: 'flex', flexDirection: 'column', width: '140px', flexShrink: 0 }}>
    <div
      style={{
        height: '72px',
        width: '100%',
        backgroundColor: value,
        borderRadius: '8px',
        border: isLightColor(value) ? '1px solid #e0e0e0' : 'none',
      }}
    />
    <div style={{ marginTop: '8px' }}>
      <p style={{ margin: '0 0 2px', fontSize: '12px', fontWeight: 600, color: '#1e1f1f', fontFamily: 'sans-serif' }}>
        {name}
      </p>
      <p style={{ margin: '0 0 2px', fontSize: '10px', color: '#888', fontFamily: 'monospace', wordBreak: 'break-all' }}>
        {variable}
      </p>
      <p style={{ margin: 0, fontSize: '10px', color: '#aaa', fontFamily: 'monospace' }}>
        {value}
      </p>
    </div>
  </div>
);

// ─── Group section ────────────────────────────────────────────────────────────

const Group = ({ title, tokens }: { title: string; tokens: ColorToken[] }) => (
  <div style={{ marginBottom: '40px' }}>
    <div style={{
      display: 'inline-block',
      fontSize: '11px',
      fontWeight: 600,
      textTransform: 'uppercase' as const,
      letterSpacing: '1px',
      color: '#1e1f1f',
      backgroundColor: '#e0f7fa',
      padding: '3px 10px',
      borderRadius: '4px',
      marginBottom: '16px',
      fontFamily: 'sans-serif',
    }}>
      {title}
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '20px' }}>
      {tokens.map((token) => (
        <Swatch key={token.variable} {...token} />
      ))}
    </div>
  </div>
);

// ─── Full palette ─────────────────────────────────────────────────────────────

const ColorPalette = ({ groups }: { groups: Record<string, ColorToken[]> }) => (
  <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
    <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#1e1f1f', marginBottom: '4px', marginTop: 0 }}>
      Color Library
    </h1>
    <p style={{ fontSize: '13px', color: '#888', marginBottom: '48px', marginTop: 0 }}>
      Design tokens from the Figma DSM — Light theme
    </p>
    {Object.entries(groups).map(([group, tokens]) => (
      <Group key={group} title={group} tokens={tokens} />
    ))}
  </div>
);

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'DSM/Colors',
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

export const AllColors: Story = {
  name: 'All Colors',
  render: () => <ColorPalette groups={colorGroups} />,
};

export const Common: Story = {
  render: () => <ColorPalette groups={{ Common: colorGroups.Common }} />,
};

export const Primary: Story = {
  render: () => <ColorPalette groups={{ Primary: colorGroups.Primary }} />,
};

export const Semantic: Story = {
  name: 'Semantic (Error / Warning / Info / Success)',
  render: () => (
    <ColorPalette groups={{
      Error:   colorGroups.Error,
      Warning: colorGroups.Warning,
      Info:    colorGroups.Info,
      Success: colorGroups.Success,
    }} />
  ),
};

export const GreyScale: Story = {
  name: 'Grey Scale',
  render: () => <ColorPalette groups={{ Grey: colorGroups.Grey, Neutral: colorGroups.Neutral }} />,
};

export const TextColors: Story = {
  name: 'Text',
  render: () => <ColorPalette groups={{ Text: colorGroups.Text }} />,
};

export const SurfaceColors: Story = {
  name: 'Surface (Background / Divider / Border)',
  render: () => (
    <ColorPalette groups={{
      Background: colorGroups.Background,
      Divider:    colorGroups.Divider,
      Border:     colorGroups.Border,
    }} />
  ),
};

export const ActionColors: Story = {
  name: 'Action',
  render: () => <ColorPalette groups={{ Action: colorGroups.Action }} />,
};
