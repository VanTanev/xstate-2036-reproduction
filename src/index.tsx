import * as React from 'react';
import { createMachine } from 'xstate';
import { createModel } from 'xstate/lib/model';

const userModel = createModel(
  // initial context
  {
    name: 'David',
    age: 30,
  }
);

export const machine = createMachine<typeof userModel>({
  context: userModel.initialContext,
});

// Delete me
export const Thing = () => {
  return <div>the snozzberries taste like snozzberries</div>;
};
