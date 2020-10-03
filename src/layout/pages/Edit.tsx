import React, { useContext, useEffect, useMemo, useCallback } from 'react';
import { RouteComponentProps } from 'react-router';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import Tooltip from '@material-ui/core/Tooltip';
import Skeleton from '@material-ui/lab/Skeleton';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import getAvailableSources from '../../actions/getAvailableSources';
import { LanguageContext } from '../context/LanguageContext';
import { SourcesContext } from '../context/SourcesContext';
import Translation from '../../utils/Translation';
import SelectedSourcesList from '../components/SelectedSourcesList';
import SourceLabel from '../components/SourceLabel';
import { RESET_SOURCES_ERROR, SELECT_SOURCE, UNSELECT_SOURCE } from '../../constants/actions';
import ErrorMessage from '../components/ErrorMessage';

const AvailableSource: React.FC<{
    source: string;
}> = ({ source }) => {
    const { isSelected, dispatch } = useContext(SourcesContext);
    const isSourceSelected = isSelected(source);
    const cbOnClick = useCallback(() => {
        dispatch({ type: isSourceSelected ? UNSELECT_SOURCE : SELECT_SOURCE, payload: source });
    }, [dispatch, source, isSourceSelected]);

    const text = <Translation property={isSourceSelected ? 'remove' : 'add'} />,
        label = isSourceSelected ? 'remove' : 'add';

    return (
        <ListItem key={source}>
            <ListItemIcon style={{ minWidth: '25px' }}>
                <Tooltip title={text} aria-label={label}>
                    {isSourceSelected ? (
                        <ClearIcon fontSize='small' onClick={cbOnClick} />
                    ) : (
                        <AddIcon fontSize='small' onClick={cbOnClick} />
                    )}
                </Tooltip>
            </ListItemIcon>
            <SourceLabel source={source} />
        </ListItem>
    );
};

const AvailableSources: React.FC<{
    resultsKeys: string[];
}> = ({ resultsKeys }) => (
    <List
        aria-label='available source'
        subheader={
            <ListSubheader
                component='div'
                disableSticky={true}
                disableGutters={true}
                style={{
                    lineHeight: '15px',
                    fontSize: '0.7rem',
                    textAlign: 'center'
                }}
            >
                <Translation property={'changeLanguageForMoreSources'} />
            </ListSubheader>
        }
    >
        {resultsKeys.length ? (
            resultsKeys.map((source: string) => <AvailableSource key={source} source={source} />)
        ) : (
            <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </>
        )}
    </List>
);

const Error: React.FC = () => {
    const { error, dispatch } = useContext(SourcesContext);

    const resetError = useCallback(() => {
        dispatch({ type: RESET_SOURCES_ERROR });
    }, [dispatch]);

    if (!error) return null;

    return (
        <ErrorMessage onClose={resetError}>
            <Translation property={'error_' + error} />
        </ErrorMessage>
    );
};

export const EditPage: React.FC<RouteComponentProps> = () => {
    const { data, dispatch } = useContext(SourcesContext),
        { selectedLanguage } = useContext(LanguageContext);
    useEffect(() => {
        getAvailableSources(selectedLanguage, dispatch);
    }, [selectedLanguage, dispatch]);

    const resultsKeys = useMemo(() => Object.keys(data), [data]);

    return (
        <>
            <Grid item xs={6} sm={7}>
                <SelectedSourcesList />
            </Grid>
            <Grid item xs={6} sm={5}>
                <AvailableSources resultsKeys={resultsKeys} />
            </Grid>
            <Grid item xs={12}>
                <Error />
            </Grid>
        </>
    );
};

export default EditPage;
