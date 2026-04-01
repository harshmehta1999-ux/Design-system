import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function rgbToHex(r: number, g: number, b: number): string {
  return (
    '#' +
    [r, g, b]
      .map((v) => Math.round(v * 255).toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase()
  );
}

interface SwatchProps {
  name: string;
  value: string;
  hasAlpha?: boolean;
}

function Swatch({ name, value, hasAlpha }: SwatchProps) {
  const isLight =
    value === '#FFFFFF' ||
    value === '#FEFEFE' ||
    value === '#FAFAFA' ||
    value === '#F5F5F5' ||
    value === '#EEEEEE' ||
    value === '#FDF6EF' ||
    value === '#CAEBFE' ||
    hasAlpha;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        minWidth: 160,
      }}
    >
      <div
        style={{
          width: '100%',
          height: 80,
          borderRadius: 8,
          background: value,
          border: isLight ? '1px solid #E0E0E0' : 'none',
          boxSizing: 'border-box',
        }}
      />
      <div>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: '#1E1F1F',
            fontFamily: 'sans-serif',
            lineHeight: '18px',
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: 12,
            color: '#616161',
            fontFamily: 'monospace',
            lineHeight: '18px',
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}

interface GroupProps {
  title: string;
  swatches: SwatchProps[];
}

function SwatchGroup({ title, swatches }: GroupProps) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: '#1E1F1F',
          fontFamily: 'sans-serif',
          marginBottom: 20,
          paddingBottom: 8,
          borderBottom: '1px solid #E0E0E0',
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: 24,
        }}
      >
        {swatches.map((s) => (
          <Swatch key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
}

function ColorsDoc() {
  return (
    <div
      style={{
        padding: '32px 40px',
        fontFamily: 'sans-serif',
        maxWidth: 1200,
      }}
    >
      <h1
        style={{
          fontSize: 32,
          fontWeight: 700,
          color: '#1E1F1F',
          marginBottom: 8,
        }}
      >
        Colour Palette
      </h1>
      <p style={{ fontSize: 15, color: '#616161', marginBottom: 48 }}>
        All colour tokens defined in the DSM Figma file.
      </p>

      <SwatchGroup
        title="Primary"
        swatches={[
          { name: 'Primary / Main', value: '#1E1F1F' },
        ]}
      />

      <SwatchGroup
        title="Text"
        swatches={[
          { name: 'Text / Primary', value: '#1E1F1F' },
          { name: 'Text / Primary Contrast', value: '#FFFFFF' },
          { name: 'Text / Secondary', value: 'rgba(0,0,0,0.60)', hasAlpha: true },
          { name: 'Text / Disabled', value: 'rgba(0,0,0,0.38)', hasAlpha: true },
        ]}
      />

      <SwatchGroup
        title="Background"
        swatches={[
          { name: 'Background / Default', value: '#FEFEFE' },
          { name: 'Background / Paper', value: '#FFFFFF' },
        ]}
      />

      <SwatchGroup
        title="Border & Divider"
        swatches={[
          { name: 'Divider', value: 'rgba(0,0,0,0.12)', hasAlpha: true },
          { name: 'Button Border', value: 'rgba(30,30,31,0.50)', hasAlpha: true },
        ]}
      />

      <SwatchGroup
        title="Status — Error"
        swatches={[
          { name: 'Error / Main', value: '#92271B' },
          { name: 'Error / Light', value: '#FDECEA' },
          { name: 'Error / Dark', value: '#611B18' },
          { name: 'Error / Contrast Text', value: '#FFFFFF' },
        ]}
      />

      <SwatchGroup
        title="Status — Warning"
        swatches={[
          { name: 'Warning / Main', value: '#E29055' },
          { name: 'Warning / Light', value: '#FDF6EF' },
          { name: 'Warning / Dark', value: '#C4722A' },
          { name: 'Warning / Contrast Text', value: '#FFFFFF' },
        ]}
      />

      <SwatchGroup
        title="Status — Success"
        swatches={[
          { name: 'Success / Main', value: '#26A69A' },
          { name: 'Success / Light', value: '#E0F2F1' },
          { name: 'Success / Dark', value: '#00796B' },
          { name: 'Success / Contrast Text', value: '#FFFFFF' },
        ]}
      />

      <SwatchGroup
        title="Status — Info"
        swatches={[
          { name: 'Info / Main', value: '#CAEBFE' },
          { name: 'Info / Light', value: '#E3F5FF' },
          { name: 'Info / Dark', value: '#0288D1' },
          { name: 'Info / Contrast Text', value: '#FFFFFF' },
        ]}
      />

      <SwatchGroup
        title="Accent"
        swatches={[
          { name: 'Accent / Blue', value: '#03A9F4' },
          { name: 'Accent / Purple', value: '#673AB7' },
          { name: 'Accent / Red', value: '#F44336' },
          { name: 'Accent / Green', value: '#26A69A' },
        ]}
      />

      <SwatchGroup
        title="Others"
        swatches={[
          { name: 'Link', value: '#1868DB' },
        ]}
      />

      <SwatchGroup
        title="Action"
        swatches={[
          { name: 'Action / Active', value: 'rgba(0,0,0,0.54)', hasAlpha: true },
          { name: 'Action / Hover', value: 'rgba(0,0,0,0.04)', hasAlpha: true },
          { name: 'Action / Selected', value: 'rgba(0,0,0,0.08)', hasAlpha: true },
          { name: 'Action / Disabled', value: 'rgba(0,0,0,0.26)', hasAlpha: true },
          { name: 'Action / Disabled Bg', value: 'rgba(0,0,0,0.12)', hasAlpha: true },
          { name: 'Action / Focus', value: 'rgba(0,0,0,0.12)', hasAlpha: true },
        ]}
      />

      <SwatchGroup
        title="Common"
        swatches={[
          { name: 'Common / Black', value: '#000000' },
          { name: 'Common / White', value: '#FFFFFF' },
        ]}
      />

      <SwatchGroup
        title="Grey"
        swatches={[
          { name: 'Grey / 50', value: '#FAFAFA' },
          { name: 'Grey / 100', value: '#F5F5F5' },
          { name: 'Grey / 200', value: '#EEEEEE' },
          { name: 'Grey / 300', value: '#E0E0E0' },
          { name: 'Grey / 400', value: '#BDBDBD' },
          { name: 'Grey / 500', value: '#9E9E9E' },
          { name: 'Grey / 600', value: '#757575' },
          { name: 'Grey / 700', value: '#616161' },
          { name: 'Grey / 800', value: '#424242' },
          { name: 'Grey / 900', value: '#212121' },
          { name: 'Grey / A100', value: '#F5F5F5' },
          { name: 'Grey / A200', value: '#EEEEEE' },
          { name: 'Grey / A400', value: '#BDBDBD' },
          { name: 'Grey / A700', value: '#616161' },
        ]}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Story config
// ---------------------------------------------------------------------------

const meta: Meta = {
  title: 'DSM/Colors',
  parameters: {
    layout: 'fullscreen',
    docs: { canvas: { sourceState: 'hidden' } },
  },
};

export default meta;
type Story = StoryObj;

export const All: Story = {
  name: 'All Colours',
  render: () => <ColorsDoc />,
};
