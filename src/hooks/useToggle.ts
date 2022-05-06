import { useCallback, useState } from 'react';

type UseToggleReturnType = [boolean, () => void];

export default function useToggle(initialState = false): UseToggleReturnType {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => {
    setState(!state);
  }, [state]);

  return [state, toggle];
}
