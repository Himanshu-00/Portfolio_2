import { RiSunLine, RiMoonLine } from 'react-icons/ri';
import { SanitizedThemeConfig } from '../../interfaces/sanitized-config';
import { LOCAL_STORAGE_KEY_NAME } from '../../constants';
import { skeleton } from '../../utils';

const ThemeChanger = ({
  theme,
  setTheme,
  loading,
  themeConfig,
}: {
  theme: string;
  setTheme: (theme: string) => void;
  loading: boolean;
  themeConfig: SanitizedThemeConfig;
}) => {
  const LIGHT_THEME = themeConfig.defaultTheme;
  const DARK_THEME = themeConfig.darkMode;

  const isDarkMode = theme === DARK_THEME;

  const toggleTheme = () => {
    const nextTheme = isDarkMode ? LIGHT_THEME : DARK_THEME;

    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem(LOCAL_STORAGE_KEY_NAME, nextTheme);
    setTheme(nextTheme);
  };

  return (
    <div className="flex justify-end">
      {loading ? (
        skeleton({
          widthCls: 'w-20',
          heightCls: 'h-10',
          className: 'rounded-full',
        })
      ) : (
        <label className="flex items-center gap-3 px-4 py-2 rounded-full bg-base-200 shadow-sm cursor-pointer transition hover:shadow-md">
          <RiSunLine
            className={`w-5 h-5 transition-colors ${
              !isDarkMode
                ? 'text-warning'
                : 'text-base-content/40'
            }`}
          />

          <input
            type="checkbox"
            className="toggle toggle-sm toggle-primary"
            checked={isDarkMode}
            onChange={toggleTheme}
          />

          <RiMoonLine
            className={`w-5 h-5 transition-colors ${
              isDarkMode
                ? 'text-info'
                : 'text-base-content/40'
            }`}
          />
        </label>
      )}
    </div>
  );
};

export default ThemeChanger;
