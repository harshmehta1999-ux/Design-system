import React from 'react';
import './AppBar.css';

export interface AppBarProps {
  /** Controls which menu icon is shown and represents the sidebar state */
  sidebar?: 'Collapsed' | 'Expanded';
  /** Initials rendered inside the avatar circle */
  avatarText?: string;
  /**
   * Source URL for the brand logo.
   * Replace with a local asset path in production.
   */
  logoSrc?: string;
  /** Called when the menu icon button is clicked */
  onMenuClick?: () => void;
}

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

const MenuOpenIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z" />
  </svg>
);

// Temporary placeholder — replace with a local asset in production
const FIGMA_LOGO_URL =
  'https://www.figma.com/api/mcp/asset/1b5441b0-022c-469f-9070-25a01ba30c33';

export const AppBar = ({
  sidebar = 'Collapsed',
  avatarText = 'JD',
  logoSrc = FIGMA_LOGO_URL,
  onMenuClick,
}: AppBarProps) => {
  const isExpanded = sidebar === 'Expanded';

  return (
    <header
      className={['app-bar', `app-bar--${sidebar.toLowerCase()}`].join(' ')}
    >
      <div className="app-bar__left">
        <button
          type="button"
          className="app-bar__menu-btn"
          onClick={onMenuClick}
          aria-label={isExpanded ? 'Close sidebar' : 'Open sidebar'}
        >
          {isExpanded ? <MenuOpenIcon /> : <MenuIcon />}
        </button>

        <img src={logoSrc} alt="APLYiD" className="app-bar__logo" />
      </div>

      <div className="app-bar__avatar" aria-label={`User avatar: ${avatarText}`}>
        <span>{avatarText}</span>
      </div>
    </header>
  );
};
