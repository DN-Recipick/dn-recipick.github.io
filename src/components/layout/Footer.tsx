import Dropdown from '@/components/layout/Dropdown/Dropdown';
import DropdownItems from '@/components/layout/Dropdown/RenderDropdownItems';
import { THEME_OPTIONS } from '@/constants/dropdownOptions';
import { useThemeStore } from '@/store/useThemeStore';

const Footer = () => {
  const { theme, setTheme } = useThemeStore();
  return (
    <footer className="flex-center gap-1 w-full p-content">
      <small className="sm:text-[0.7rem] text-[0.6rem]">
        © 2025 Sanghyeon Lee. All rights reserved.
      </small>
      <Dropdown
        dropdownListClassName="bottom-8 right-0"
        buttonInner={THEME_OPTIONS.find((o) => o.label === theme)?.icon}
      >
        <DropdownItems options={THEME_OPTIONS} onSelect={(option) => setTheme(option.label)} />
      </Dropdown>
    </footer>
  );
};

export default Footer;
