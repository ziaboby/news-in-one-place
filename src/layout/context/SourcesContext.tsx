import React, { useReducer } from 'react';
import SourcesReducer, { initialState } from '../../reducers/sources';
import { SourcesReducerType } from '../../typing';

type SourcesContextType = {
    state: SourcesReducerType;
    dispatch: React.DispatchWithoutAction;
};

export const SourcesContext = React.createContext<SourcesContextType | null>(initialState);

export const SourcesContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(SourcesReducer, initialState);
    return (
        <SourcesContext.Provider value={{ state, dispatch }}>{children}</SourcesContext.Provider>
    );
};
