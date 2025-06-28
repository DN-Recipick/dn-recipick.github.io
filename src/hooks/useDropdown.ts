import { useEffect, useRef, useState } from 'react';

const useDropdown = <T extends HTMLElement>() => {
  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef<T>(null);

  useEffect(() => {
    const handleClick = () => setOpen(false);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return {
    isOpen,
    setOpen,
    dropdownRef,
  };
};

export default useDropdown;
