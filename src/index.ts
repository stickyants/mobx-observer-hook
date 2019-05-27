import { useState, useEffect, useRef } from 'react';
import { reaction } from 'mobx';

type ObservableCallback = () => React.ReactNode;

export function useObserver(cb: ObservableCallback, deps = []) {
  const [val, setState] = useState(cb);
  const ref = useRef({
    isFirstTime: true,
  });
  useEffect(
    () => {
      if (!ref.current.isFirstTime) {
        setState(cb());
      }
      ref.current.isFirstTime = false;
      return reaction(cb, v => setState(v));
    },
    deps);
  return val;
}
