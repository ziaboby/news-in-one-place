import React, { useCallback, useReducer } from 'react';
import SourcesReducer, { initialState } from '../../reducers/sources';
import { ActionType, DataType, ErrorType } from '../../typing';

type SourcesContextType = {
    data: DataType;
    selectedSources: string[];
    error: ErrorType;
    dispatch: React.Dispatch<ActionType>;
    isSelected: (sourceId: string) => boolean;
};

export const SourcesContext = React.createContext<SourcesContextType>({
    ...initialState,
    dispatch: () => false,
    isSelected: () => false
});

export const SourcesContextProvider: React.FC = ({ children }) => {
    const [{ data, selectedSources, error }, dispatch] = useReducer(SourcesReducer, initialState);
    const isSelected = useCallback(sourceId => selectedSources.includes(sourceId), [
        selectedSources
    ]);
    return (
        <SourcesContext.Provider value={{ data, selectedSources, error, dispatch, isSelected }}>
            {children}
        </SourcesContext.Provider>
    );
};
