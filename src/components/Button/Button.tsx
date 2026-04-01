import React from 'react';
import './Button.css';

// ─── Types ────────────────────────────────────────────────────────────────────

/**
 * Confirmed from Figma node 181:73 (ContainButton / Primary).
 * Secondary, Ghost and Danger are inferred from the original overview screenshot
 * (node 3:12) — no variable data was returned for those rows.
 */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

/**
 * Heights confirmed from Figma column labels (node 181:73):
 * xs → 28px | sm → 30px | md → 36px | lg → 42px
 *
 * All sizes share the same typography (14px / Regular / 24px lh / 1.25px ls),
 * padding (12px horizontal) and icon size (20×20px) — confirmed from Figma.
 */
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Visual style of the button. @default 'primary' */
  variant?: ButtonVariant;
  /**
   * Height of the button.
   * xs 28px · sm 30px · md 36px · lg 42px — all confirmed from Figma.
   * @default 'md'
   */
  size?: ButtonSize;
  /** Text label rendered inside the button. */
  label?: string;
  /**
   * Icon rendered before the label (Figma: iconPosition "Front").
   * Must be a 20×20 SVG or a component that renders at 20×20px.
   */
  leadingIcon?: React.ReactNode;
  /**
   * Icon rendered after the label (Figma: iconPosition "Back").
   * Must be a 20×20 SVG or a component that renders at 20×20px.
   */
  trailingIcon?: React.ReactNode;
  /**
   * Renders only the leading icon with no label.
   * Always provide `aria-label` for accessibility when using this prop.
   */
  iconOnly?: boolean;
  /** Stretches the button to fill its container width. */
  fullWidth?: boolean;
  /**
   * Shows a spinner in place of the leading icon and prevents all interaction.
   * Use during async operations such as form submission.
   */
  loading?: boolean;
}

// ─── Spinner ──────────────────────────────────────────────────────────────────
// Sized via CSS to match the confirmed 20×20px icon slot.

const Spinner = () => (
  <svg
    className="btn__spinner"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="42 20"
    />
  </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────
//
// Structure mirrors Figma's ContainButton (node 181:73):
//   <button.btn>                 ← root: padding 12px, border-radius 12px, overflow hidden
//     <div.btn__content>         ← .MasterButtonText: flex, gap 2px, h-full, items-center
//       <span.btn__icon>         ← icon wrapper: 20×20px overflow hidden
//       <span.btn__label>        ← p: 14px / Regular / lh 24px / ls 1.25px
//     </div>
//   </button>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      label,
      leadingIcon,
      trailingIcon,
      iconOnly = false,
      fullWidth = false,
      loading = false,
      disabled = false,
      className,
      type = 'button',
      ...rest
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    const classes = [
      'btn',
      `btn--${variant}`,
      `btn--${size}`,
      iconOnly && 'btn--icon-only',
      fullWidth && 'btn--full-width',
      loading && 'btn--loading',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const showLeading = !loading && !!leadingIcon;
    const showTrailing = !loading && !iconOnly && !!trailingIcon;

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        {...rest}
      >
        {/* .MasterButtonText — confirmed inner wrapper from Figma */}
        <span className="btn__content">
          {/* Spinner occupies the leading icon slot during loading */}
          {loading && <Spinner />}

          {/* Leading icon — Figma iconPosition "Front" */}
          {showLeading && (
            <span className="btn__icon btn__icon--leading" aria-hidden="true">
              {leadingIcon}
            </span>
          )}

          {/* Label — hidden when iconOnly */}
          {!iconOnly && label && (
            <span className="btn__label">{label}</span>
          )}

          {/* Trailing icon — Figma iconPosition "Back" */}
          {showTrailing && (
            <span className="btn__icon btn__icon--trailing" aria-hidden="true">
              {trailingIcon}
            </span>
          )}
        </span>
      </button>
    );
  },
);

Button.displayName = 'Button';
