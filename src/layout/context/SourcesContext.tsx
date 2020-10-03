import React, { useCallback, useReducer } from 'react';
import SourcesReducer, { initialState } from '../../reducers/sources';
import { DataType } from '../../typing';

type SourcesContextType = {
    data: DataType;
    selectedSources: string[];
    dispatch: React.Dispatch;
    isSelected: (sourceId: string) => boolean;
};

export const SourcesContext = React.createContext<SourcesContextType>({
    ...initialState,
    dispatch: () => false,
    isSelected: () => false
});

export const SourcesContextProvider: React.FC = ({ children }) => {
    const [{ data, selectedSources }, dispatch] = useReducer(SourcesReducer, initialState);
    const isSelected = useCallback(sourceId => selectedSources.includes(sourceId), [
        selectedSources
    ]);
    return (
        <SourcesContext.Provider value={{ data, selectedSources, dispatch, isSelected }}>
            {children}
        </SourcesContext.Provider>
    );
};
