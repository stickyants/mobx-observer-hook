# mobx-observer-hook

A simple React hook to use `Mobx` with functional components. 

## Usage 

```typescript

import * as React from 'react';
import { render } from 'react-dom';
import { observable } from 'mobx';

import { useObserver } from '@stickyants/mobx-observer-hook';

export interface IMyComponentProps {
  model: {
    count: number;
  };
}

function MyComponent({model}:IMyComponentProps) {
  return useObserver(
    () => <div>{model.count}</div>,
    [model]); //specify list of dependencies 
    // i.e. properties that would trigger recalculation of the provided
    // function
}

class MyModel {
  @observable count: number = 0;
}

const m = new MyModel();

render(
  <MyComponent model={m} />,
  document.getElementById('someId'));

```

## Notes

1. Make sure you pass a list of dependencies, 
   this is usually the model containing your observable properties. 
2. If you're passing other properties (non-observable properties), make sure 
   you add those to the list of dependencies to ensure component is updated
   accordingly. 
