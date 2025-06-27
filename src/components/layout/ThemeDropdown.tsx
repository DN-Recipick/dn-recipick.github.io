import Button from '@/components/shared/Button';
import useDropdown from '@/hooks/useDropdown';
import { THEME_OPTIONS } from '@/constants/dropdownOptions';
import { useThemeStore } from '@/store/useThemeStore';

const ThemeDropdown = () => {
  const { isOpen, setOpen, dropdownRef } = useDropdown<HTMLDivElement>();
  const { theme, setTheme } = useThemeStore();
  return (
    <div ref={dropdownRef} className="relative text-sm">
      <Button
        className="flex-center gap-2.5 p-1.5 rounded-full capitalize hover:bg-[var(--color-bg-hover)]"
        onClick={() => setOpen((prev) => !prev)}
      >
        {THEME_OPTIONS.find((option) => option.text === theme)?.icon}
      </Button>

      {isOpen && (
        <ul className="absolute overflow-hidden right-0 mt-2 border border-gray-600 shadow-[var(--shadow)] rounded z-10">
          {THEME_OPTIONS.map(({ text, icon }) => (
            <li
              key={text}
              className="flex items-center gap-2 px-2 py-1.25 w-22 cursor-pointer hover:bg-[var(--color-bg-hover)]"
              onClick={() => setTheme(text)}
            >
              {icon}
              <span className="flex-1 text-center capitalize">{text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ThemeDropdown;
