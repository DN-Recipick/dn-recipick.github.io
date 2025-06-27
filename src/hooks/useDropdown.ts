import { useEffect, useRef, useState } from 'react';

const useDropdown = <T extends HTMLElement>() => {
  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return {
    isOpen,
    setOpen,
    dropdownRef,
  };
};

export default useDropdown;
