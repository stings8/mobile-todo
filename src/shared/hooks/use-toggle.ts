import { useReducer } from 'react';

export default function useToggle(
  initialState: boolean
): [boolean, () => void] {
  return useReducer((previousState: boolean) => !previousState, initialState);
}
