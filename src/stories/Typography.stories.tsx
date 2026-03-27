import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

// ─── Typography tokens from Figma DSM (node 190:440) ─────────────────────────

type TypographyToken = {
  name: string;
  variable: string;
  family: string;
  weight: number;
  weightLabel: string;
  size: number;
  lineHeight: number | string;
  letterSpacing: number;
};

const tokens: TypographyToken[] = [
  // Headings — Montserrat
  { name: 'Heading 1',  variable: 'Headline 1', family: 'Montserrat', weight: 500, weightLabel: 'Medium',    size: 96, lineHeight: 112, letterSpacing: -1.5  },
  { name: 'Heading 2',  variable: 'Headline 2', family: 'Montserrat', weight: 500, weightLabel: 'Medium',    size: 60, lineHeight: 72,  letterSpacing: -0.5  },
  { name: 'Heading 3',  variable: 'Headline 3', family: 'Montserrat', weight: 500, weightLabel: 'Medium',    size: 48, lineHeight: 56,  letterSpacing: 0     },
  { name: 'Heading 4',  variable: 'Headline 4', family: 'Montserrat', weight: 500, weightLabel: 'Medium',    size: 34, lineHeight: 42,  letterSpacing: 0.25  },
  // Headings — Proxima Nova
  { name: 'Heading 5',  variable: 'Headline 5', family: 'Proxima Nova', weight: 700, weightLabel: 'Bold',     size: 24, lineHeight: 32,  letterSpacing: 0     },
  { name: 'Heading 6',  variable: 'Headline 6', family: 'Proxima Nova', weight: 700, weightLabel: 'Bold',     size: 20, lineHeight: 32,  letterSpacing: 0.15  },
  { name: 'Heading 7',  variable: 'Heading 7',  family: 'Roboto',       weight: 500, weightLabel: 'Medium',   size: 18, lineHeight: 26,  letterSpacing: 0     },
  // Subtitles
  { name: 'Subtitle 1', variable: 'Subtitle 1', family: 'Proxima Nova', weight: 600, weightLabel: 'Semibold', size: 16, lineHeight: 28,  letterSpacing: 0.15  },
  { name: 'Subtitle 2', variable: 'Subtitle 2', family: 'Proxima Nova', weight: 600, weightLabel: 'Semibold', size: 14, lineHeight: 22,  letterSpacing: 0.10  },
  // Body
  { name: 'Body 1',     variable: 'Body 1',     family: 'Proxima Nova', weight: 400, weightLabel: 'Regular',  size: 16, lineHeight: 24,  letterSpacing: 0.15  },
  { name: 'Body 2',     variable: 'Body 2',     family: 'Proxima Nova', weight: 400, weightLabel: 'Regular',  size: 14, lineHeight: 22,  letterSpacing: 0.10  },
  { name: 'Body',       variable: 'Body',        family: 'Open Sans',    weight: 400, weightLabel: 'Regular',  size: 16, lineHeight: '100%', letterSpacing: 0.5 },
  { name: 'Body 1 (Roboto)', variable: 'Body1 - 16', family: 'Roboto',  weight: 400, weightLabel: 'Regular',  size: 16, lineHeight: 24,  letterSpacing: 0     },
  // Utility
  { name: 'Button',     variable: 'Button',     family: 'Proxima Nova', weight: 400, weightLabel: 'Regular',  size: 14, lineHeight: 24,  letterSpacing: 1.25  },
  { name: 'Caption',    variable: 'Caption',    family: 'Proxima Nova', weight: 400, weightLabel: 'Regular',  size: 12, lineHeight: 20,  letterSpacing: 0.40  },
  { name: 'Overline',   variable: 'Overline',   family: 'Proxima Nova', weight: 400, weightLabel: 'Regular',  size: 10, lineHeight: '100%', letterSpacing: 1.5 },
];

const groups: Record<string, TypographyToken[]> = {
  'Headings': tokens.filter((t) => t.name.startsWith('Heading')),
  'Subtitles': tokens.filter((t) => t.name.startsWith('Subtitle')),
  'Body': tokens.filter((t) => t.name.startsWith('Body')),
  'Utility': tokens.filter((t) => ['Button', 'Caption', 'Overline'].includes(t.name)),
};

// ─── Table row ────────────────────────────────────────────────────────────────

const headerStyle: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: 600,
  color: '#aaa',
  textTransform: 'uppercase',
  letterSpacing: '0.8px',
  padding: '8px 16px',
  textAlign: 'left',
  borderBottom: '1px solid #f0f0f0',
  fontFamily: 'sans-serif',
  whiteSpace: 'nowrap',
};

const cellStyle: React.CSSProperties = {
  padding: '0 16px',
  verticalAlign: 'middle',
  fontFamily: 'sans-serif',
};

const metaStyle: React.CSSProperties = {
  fontSize: '12px',
  color: '#888',
  fontFamily: 'sans-serif',
};

const TypeRow = ({ token }: { token: TypographyToken }) => {
  const lhDisplay = typeof token.lineHeight === 'number' ? `${token.lineHeight}px` : token.lineHeight;
  const lsDisplay = token.letterSpacing === 0 ? '0px' : `${token.letterSpacing}px`;
  const lineHeightPx = typeof token.lineHeight === 'number' ? `${token.lineHeight}px` : '1';

  return (
    <tr style={{ borderBottom: '1px solid #f5f5f5' }}>
      {/* Sample */}
      <td style={{ ...cellStyle, width: '280px', paddingTop: '16px', paddingBottom: '16px' }}>
        <span
          style={{
            fontFamily: `'${token.family}', sans-serif`,
            fontSize: `${token.size}px`,
            fontWeight: token.weight,
            lineHeight: lineHeightPx,
            letterSpacing: `${token.letterSpacing}px`,
            color: '#1e1f1f',
            display: 'block',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            maxWidth: '260px',
          }}
        >
          {token.name}
        </span>
      </td>
      {/* Token name */}
      <td style={{ ...cellStyle, width: '140px' }}>
        <span style={{ ...metaStyle, fontFamily: 'monospace', fontSize: '11px', color: '#555' }}>
          {token.variable}
        </span>
      </td>
      {/* Font */}
      <td style={cellStyle}><span style={metaStyle}>{token.family}</span></td>
      {/* Weight */}
      <td style={cellStyle}><span style={metaStyle}>{token.weightLabel}</span></td>
      {/* Size */}
      <td style={cellStyle}><span style={metaStyle}>{token.size}px</span></td>
      {/* Letter spacing */}
      <td style={cellStyle}><span style={metaStyle}>{lsDisplay}</span></td>
      {/* Line height */}
      <td style={cellStyle}><span style={metaStyle}>{lhDisplay}</span></td>
    </tr>
  );
};

// ─── Full table ───────────────────────────────────────────────────────────────

const TypographyTable = ({ tokens: rows }: { tokens: TypographyToken[] }) => (
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        <th style={headerStyle}>Sample</th>
        <th style={headerStyle}>Token</th>
        <th style={headerStyle}>Font</th>
        <th style={headerStyle}>Weight</th>
        <th style={headerStyle}>Size</th>
        <th style={headerStyle}>Letter Spacing</th>
        <th style={headerStyle}>Line Height</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((t) => <TypeRow key={t.variable} token={t} />)}
    </tbody>
  </table>
);

// ─── Page layout ──────────────────────────────────────────────────────────────

const TypographyPage = ({ groups: g }: { groups: Record<string, TypographyToken[]> }) => (
  <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#fff' }}>
    <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#1e1f1f', marginBottom: '4px', marginTop: 0 }}>
      Typography / Desktop
    </h1>
    <p style={{ fontSize: '13px', color: '#888', marginBottom: '48px', marginTop: 0 }}>
      Type tokens from the Figma DSM — Proxima Nova · Montserrat · Roboto · Open Sans
    </p>

    {Object.entries(g).map(([group, rows]) => (
      <div key={group} style={{ marginBottom: '48px' }}>
        <div style={{
          display: 'inline-block',
          fontSize: '11px',
          fontWeight: 600,
          textTransform: 'uppercase' as const,
          letterSpacing: '1px',
          color: '#0C66E4',
          backgroundColor: '#E9F2FF',
          padding: '3px 10px',
          borderRadius: '4px',
          marginBottom: '16px',
        }}>
          {group}
        </div>
        <div style={{ border: '1px solid #f0f0f0', borderRadius: '8px', overflow: 'hidden' }}>
          <TypographyTable tokens={rows} />
        </div>
      </div>
    ))}
  </div>
);

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'DSM/Typography',
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

export const AllStyles: Story = {
  name: 'All Styles',
  render: () => <TypographyPage groups={groups} />,
};

export const Headings: Story = {
  render: () => <TypographyPage groups={{ Headings: groups.Headings }} />,
};

export const Subtitles: Story = {
  render: () => <TypographyPage groups={{ Subtitles: groups.Subtitles }} />,
};

export const Body: Story = {
  render: () => <TypographyPage groups={{ Body: groups.Body }} />,
};

export const Utility: Story = {
  name: 'Utility (Button / Caption / Overline)',
  render: () => <TypographyPage groups={{ Utility: groups.Utility }} />,
};
