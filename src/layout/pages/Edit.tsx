import React, { useContext, useEffect, useReducer } from 'react';
import { RouteComponentProps } from 'react-router';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import getAvailableSources from '../../actions/getAvailableSources';
import SourcesReducer from '../../reducers/sources';
import { LanguageContext } from '../context/LanguageContext';

export const EditPage: React.FC<RouteComponentProps> = () => {
    const [state, dispatch] = useReducer(SourcesReducer);
    const { selectedLanguage } = useContext(LanguageContext);
    useEffect(() => {
        getAvailableSources(selectedLanguage, dispatch);
    }, [selectedLanguage]);

    return (
        <>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
                <List aria-label='available source'>
                    {state &&
                        Object.keys(state.data).map((source: string) => (
                            <ListItem key={source}>
                                <ListItemIcon>
                                    <AddIcon />
                                </ListItemIcon>
                                <ListItemText primary={source} />
                            </ListItem>
                        ))}
                </List>
            </Grid>
        </>
    );
};

export default EditPage;
