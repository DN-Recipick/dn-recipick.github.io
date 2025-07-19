import { useEffect } from 'react';

interface UseSetFormFocusParams<T extends string> {
  setFocus: (name: T) => void;
  clearErrors?: (name: T) => void;
  focusName: T;
}

const useSetFormFocus = <T extends string>({
  setFocus,
  clearErrors,
  focusName,
}: UseSetFormFocusParams<T>) => {
  useEffect(() => {
    if (clearErrors) {
      clearErrors(focusName);
    }
    const timer = setTimeout(() => {
      setFocus(focusName);
    }, 100);
    return () => clearTimeout(timer);
  }, [setFocus, clearErrors, focusName]);
};

export default useSetFormFocus;
