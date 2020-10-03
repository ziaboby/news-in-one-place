import React, { useState, useContext, useCallback, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { CLEAR_SELECTED_SOURCES, UNSELECT_SOURCE } from '../../constants/actions';
import { SourcesContext } from '../context/SourcesContext';
import SourceLabel from './SourceLabel';
import Translation from '../../utils/Translation';

const translationComponents = {
    select: <Translation property={'select'} />,
    selectAll: <Translation property={'selectAll'} />,
    remove: <Translation property={'remove'} />,
    deselect: <Translation property={'deselect'} />
};

const SelectedSourcesList: React.FC = () => {
    const { selectedSources, dispatch } = useContext(SourcesContext);
    // selected items in the selectedSources list
    const [selected, select] = useState([]),
        toggleSelected = useCallback(
            value => {
                select(prev => {
                    if (prev.includes(value)) {
                        return prev.filter(item => item != value);
                    }
                    return [...prev, value];
                });
            },
            [select]
        );
    // handling select all
    const [selectAll, enableSelectAll] = useState(false),
        cbenableSelectAll = useCallback(
            (event: React.ChangeEvent<HTMLInputElement>) => {
                enableSelectAll(event.target.checked);
                if (event.target.checked) select(selectedSources);
            },
            [select, enableSelectAll, selectedSources]
        );
    // handling clear icon
    const removeSelectedSources = useCallback(() => {
        if (!selected.length) {
            // remove all
            dispatch({ type: CLEAR_SELECTED_SOURCES });
        } else {
            selected.forEach(source => {
                dispatch({ type: UNSELECT_SOURCE, payload: source });
            });
        }
    }, [selectedSources, selected]);

    useEffect(() => {
        if (!selectedSources.length) {
            select([]);
            enableSelectAll(false);
        }
    }, [selectedSources, select, enableSelectAll]);

    if (!selectedSources.length) return null;

    return (
        <>
            <Box display='flex' justifyContent='space-between'>
                <Tooltip
                    title={translationComponents.selectAll}
                    aria-label={selectAll ? 'select-all' : 'disable-select-all'}
                >
                    <Checkbox size='medium' checked={selectAll} onChange={cbenableSelectAll} />
                </Tooltip>
                <Tooltip title={translationComponents.remove} aria-label={'remove-selected'}>
                    <DeleteForeverIcon
                        fontSize='large'
                        color='action'
                        onClick={removeSelectedSources}
                    />
                </Tooltip>
            </Box>
            <List aria-label='selected sources'>
                {selectedSources.map(source => (
                    <ListItem key={source} disableGutters={true}>
                        <ListItemIcon>
                            <Tooltip
                                title={
                                    selected.includes(source)
                                        ? translationComponents.deselect
                                        : translationComponents.select
                                }
                                aria-label={selectAll ? 'select-all' : 'disable-select-all'}
                            >
                                <Checkbox
                                    checked={selected.includes(source)}
                                    onChange={() => toggleSelected(source)}
                                />
                            </Tooltip>
                        </ListItemIcon>
                        <SourceLabel source={source} />
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default SelectedSourcesList;
