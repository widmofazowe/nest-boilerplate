import * as React from 'react';

export const MergeVarsContext = React.createContext({} as any);

export const useMergeVars = () => {
  const values = React.useContext(MergeVarsContext);

  return values;
};
