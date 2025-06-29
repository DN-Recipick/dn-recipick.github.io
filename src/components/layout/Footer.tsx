import Dropdown from '@/components/layout/Dropdown/Dropdown';
import DropdownList from '@/components/layout/Dropdown/DropdownList';
import DropdownItems from '@/components/layout/Dropdown/RenderDropdownItems';
import { THEME_OPTIONS } from '@/constants/dropdownOptions';
import { useThemeStore } from '@/store/useThemeStore';

const Footer = () => {
  const { theme, setTheme } = useThemeStore();
  return (
    <footer className="flex-center-between gap-2 w-full p-content">
      <small className="sm:text-[0.7rem] text-[0.6rem]">
        © 2025 Sanghyeon Lee. All rights reserved.
      </small>
      <Dropdown
        buttonInner={THEME_OPTIONS.find((o) => o.text === theme)?.icon}
        dropdownList={({ setOpen }) => (
          <DropdownList className="bottom-8 right-0">
            <DropdownItems
              options={THEME_OPTIONS}
              setOpen={setOpen}
              onSelect={(option) => setTheme(option.text)}
            />
          </DropdownList>
        )}
      />
    </footer>
  );
};

export default Footer;
