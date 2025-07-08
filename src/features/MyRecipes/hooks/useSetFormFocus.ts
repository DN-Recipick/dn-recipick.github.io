import { useEffect } from 'react';

interface UseSetFormFocusParams<T extends string> {
  setFocus: (name: T) => void;
  focusName: T;
}

const useSetFormFocus = <T extends string>({ setFocus, focusName }: UseSetFormFocusParams<T>) => {
  useEffect(() => {
    setFocus(focusName);
  }, [setFocus, focusName]);
};

export default useSetFormFocus;
