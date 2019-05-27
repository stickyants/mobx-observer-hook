import * as React from 'react';
import { renderHook, act } from 'react-hooks-testing-library';
import { observable } from 'mobx';

import { useObserver } from '../src';

describe('hooks/useObserver', () => {
  it('should call observer correctly', () => {
    const model = observable({
      progress: 10,
    });

    const fn = jest.fn(() => <span>{model.progress}</span>);
    renderHook(() => useObserver(fn, [model]));

    expect(fn).toHaveBeenCalledTimes(2);

    act(() => {
      model.progress += 10;
    });

    expect(fn).toHaveBeenCalledTimes(3);

    act(() => {
      model.progress += 20;
    });

    expect(fn).toHaveBeenCalledTimes(4);

  });

});
