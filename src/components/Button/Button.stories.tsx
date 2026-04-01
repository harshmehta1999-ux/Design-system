import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';

// ─── Icons ────────────────────────────────────────────────────────────────────
// Figma uses a 20×20px "Add" icon (plus symbol). These SVGs render at 20×20 to
// match the confirmed btn__icon slot size.

const PlusIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
  </svg>
);

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Button> = {
  title: 'DSM/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Button

Buttons communicate actions the user can take. Typically placed inside dialogs, forms, cards, and toolbars.

### Confirmed Figma tokens (node 181:73, get_variable_defs 2026-04-02)
| Token | Value |
|---|---|
| Border radius | 12px (Figma variable: Radius) |
| Horizontal padding | 12px uniform across all sizes |
| Icon ↔ label gap | 2px uniform across all sizes |
| Font | Proxima Nova Regular 14px / lh 24px / ls 1.25px |
| Icon size | 20×20px |
| Min-width | 64px |
| Primary/Main | \`#1e1f1f\` |
| Text/Primary Contrast | \`#ffffff\` |
| Text/Disabled | \`rgba(0,0,0,0.38)\` |
| Action/disabledBackground | \`rgba(0,0,0,0.12)\` |

### Still needs designer sign-off
- Secondary and Ghost variant exact colours (node 3:12 rows, no variable data returned)
- Danger variant (inferred from Error/Main \`#92271B\`)
- Focus ring colour (no button-specific token found — currently \`#0c66e4\`)
- Primary hover overlay (exact value not exposed as a Figma variable)
- Loading / spinner design (functional state, not in Figma)

### Variant guidance
| Variant | When to use |
|---|---|
| **Primary** | The single most important action in a view. Use sparingly — one per section. |
| **Secondary** | Supporting actions that sit alongside a primary button. |
| **Ghost** | Low-emphasis inline actions in dense layouts. |
| **Danger** | Destructive or irreversible actions. Always confirm before proceeding. |

### Do
- Keep labels concise — 1–3 words.
- Use sentence case: "Save changes", not "SAVE CHANGES".
- Pair a leading icon with the label for scannability.
- Provide \`aria-label\` on icon-only buttons.

### Don't
- Don't use more than one primary button per visual group.
- Don't disable a button without explaining why elsewhere on the page.
- Don't use ghost for a primary call-to-action.
        `.trim(),
      },
    },
  },
  argTypes: {
    variant: {
      description: 'Visual style. Primary confirmed from Figma node 181:73; others inferred from overview screenshot (node 3:12).',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'danger'],
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      description:
        'Button height — confirmed from Figma column labels. All sizes share 12px padding, 2px gap, 14px Regular font.',
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
    label: {
      description: 'Text label. Figma typography: Proxima Nova Regular 14px / lh 24px / ls 1.25px.',
      control: 'text',
    },
    leadingIcon: {
      description: 'Icon before the label (Figma: iconPosition "Front"). Must render at 20×20px.',
      control: false,
    },
    trailingIcon: {
      description: 'Icon after the label (Figma: iconPosition "Back"). Must render at 20×20px.',
      control: false,
    },
    iconOnly: {
      description: 'Renders only the leading icon. Requires `aria-label` for accessibility.',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    fullWidth: {
      description: 'Stretches the button to 100% of its container.',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    loading: {
      description: 'Replaces the leading icon with a spinner and blocks interaction.',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      description:
        'Disabled state — bg rgba(0,0,0,0.12) · text rgba(0,0,0,0.38). Both confirmed from Figma variables.',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    onClick: {
      description: 'Click handler.',
      action: 'clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/**
 * Default state — Primary variant, Medium size, leading icon + label.
 * Matches the "Default / Medium (36px)" cell in Figma node 181:73.
 *
 * Confirmed values: bg #1e1f1f · text #ffffff · radius 12px · padding 12px ·
 * gap 2px · font Proxima Nova 14px Regular · icon 20×20px · min-width 64px.
 */
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Button',
    leadingIcon: <PlusIcon />,
  },
};

/**
 * **Primary** — highest emphasis. Dark fill `#1e1f1f` (Figma: Primary/Main),
 * white label `#ffffff` (Figma: Text/Primary Contrast), border-radius 12px.
 * Use for the single most important CTA in a section.
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Button',
    leadingIcon: <PlusIcon />,
  },
};

/**
 * **Secondary** — medium emphasis via outlined border.
 * Border: `rgba(30,30,31,0.50)` (Figma: Button Border token).
 * ⚠️ Hover overlay estimated — no variable returned for this variant's node.
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    label: 'Button',
    leadingIcon: <PlusIcon />,
  },
};

/**
 * **Danger** — communicates a destructive or irreversible action.
 * Background: `#92271B` (Figma: Error/Main token).
 * ⚠️ Variant inferred from Error colour tokens — please verify with your designer.
 */
export const Danger: Story = {
  parameters: {
    docs: {
      description: {
        story: '⚠️ Inferred from Error/Main `#92271B`. Not present in Figma node 181:73 — needs designer sign-off.',
      },
    },
  },
  args: {
    variant: 'danger',
    size: 'md',
    label: 'Delete',
    leadingIcon: <PlusIcon />,
  },
};

/**
 * **Ghost** — lowest emphasis; no background or border.
 * ⚠️ Inferred from original overview screenshot — no variable data returned for this variant.
 */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    label: 'Button',
    leadingIcon: <PlusIcon />,
  },
};

/**
 * **XSmall** — 28px height, confirmed from Figma column label (node 181:73).
 * Padding 12px, gap 2px, font 14px Regular — same as all other sizes.
 * Use in compact spaces: table rows, chips, inline actions.
 */
export const SizeXSmall: Story = {
  parameters: {
    docs: {
      description: {
        story: '28px height confirmed from Figma. All typography and spacing tokens are identical to larger sizes.',
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'xs',
    label: 'Button',
    leadingIcon: <PlusIcon />,
  },
};

/**
 * **Small** — 30px height, confirmed from Figma column label.
 * Use in secondary toolbars or moderately dense layouts.
 */
export const SizeSmall: Story = {
  parameters: {
    docs: {
      description: { story: '30px height confirmed from Figma.' },
    },
  },
  args: {
    variant: 'primary',
    size: 'sm',
    label: 'Button',
    leadingIcon: <PlusIcon />,
  },
};

/**
 * **Medium** — 36px height, confirmed from Figma. The standard size for most UIs.
 */
export const SizeMedium: Story = {
  parameters: {
    docs: {
      description: { story: '36px height confirmed from Figma.' },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Button',
    leadingIcon: <PlusIcon />,
  },
};

/**
 * **Large** — 42px height, confirmed from Figma column label.
 * Use for hero CTAs or when the button must dominate its container.
 */
export const SizeLarge: Story = {
  parameters: {
    docs: {
      description: { story: '42px height confirmed from Figma.' },
    },
  },
  args: {
    variant: 'primary',
    size: 'lg',
    label: 'Button',
    leadingIcon: <PlusIcon />,
  },
};

/**
 * **With Icon** — leading + trailing icon.
 * Icon slot is 20×20px with `overflow: hidden` — confirmed from Figma.
 * Gap between icon and label is 2px — confirmed from Figma inner wrapper.
 */
export const WithIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Icon ↔ label gap is 2px (confirmed from Figma .MasterButtonText wrapper). Icons render at 20×20px.',
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Continue',
    leadingIcon: <PlusIcon />,
    trailingIcon: <ArrowRightIcon />,
  },
};

/**
 * **Icon Only** — no label. The button collapses to a square matching its height.
 * Always provide `aria-label` so screen readers can announce the action.
 * Icon renders at 20×20px inside an `overflow: hidden` wrapper — from Figma.
 */
export const IconOnly: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Square button. Width = height (size-dependent). `aria-label` is required.',
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    iconOnly: true,
    leadingIcon: <PlusIcon />,
    'aria-label': 'Add item',
  },
};

/**
 * **Disabled** — prevents interaction.
 *
 * Confirmed from Figma variables (node 181:73, get_variable_defs):
 * - Background: `rgba(0,0,0,0.12)` — `Action/disabledBackground` (`#0000001f`)
 * - Text: `rgba(0,0,0,0.38)` — `Text/Disabled` (`#00000061`)
 */
export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'bg `rgba(0,0,0,0.12)` (Action/disabledBackground) · text `rgba(0,0,0,0.38)` (Text/Disabled) — both confirmed from Figma get_variable_defs.',
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Button',
    leadingIcon: <PlusIcon />,
    disabled: true,
  },
};

/**
 * **Loading** — spinner replaces the leading icon; button is inert.
 * Spinner is sized to the confirmed 20×20px icon slot.
 * ⚠️ Spinner design is a functional addition — no spinner was present in Figma.
 */
export const Loading: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Spinner occupies the 20×20px leading icon slot. Width is stable to prevent layout shift.',
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Saving…',
    loading: true,
  },
};

/**
 * **Full Width** — `width: 100%`. Use in forms, modals, or mobile-width containers.
 */
export const FullWidth: Story = {
  parameters: {
    docs: {
      description: { story: 'Fills 100% of its container. Useful in forms, cards, or mobile-first layouts.' },
    },
    layout: 'padded',
  },
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Get started',
    fullWidth: true,
  },
};

/**
 * **Long Label** — edge case for overflow testing.
 * The button grows horizontally with `white-space: nowrap` — clip at the layout level.
 */
export const LongLabel: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Edge case. Labels should be 1–3 words in production.',
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Submit your application for review and approval',
    leadingIcon: <PlusIcon />,
  },
};

// ─── Showcases ────────────────────────────────────────────────────────────────

export const AllSizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All four sizes. Heights confirmed from Figma; all other tokens are uniform.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
      {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
        <Button key={size} variant="primary" size={size} label={`${size.toUpperCase()} Button`} leadingIcon={<PlusIcon />} />
      ))}
    </div>
  ),
};

export const AllVariants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All variants at Medium (36px). Primary confirmed; others need designer sign-off.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
      {(['primary', 'secondary', 'ghost', 'danger'] as const).map((variant) => (
        <Button key={variant} variant={variant} size="md" label="Button" leadingIcon={<PlusIcon />} />
      ))}
    </div>
  ),
};
