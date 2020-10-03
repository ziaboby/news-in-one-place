import React, { useContext, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Skeleton from '@material-ui/lab/Skeleton';
import AddIcon from '@material-ui/icons/Add';
import getAvailableSources from '../../actions/getAvailableSources';
import { LanguageContext } from '../context/LanguageContext';
import Translation from '../../utils/Translation';
import { SourcesContext } from '../context/SourcesContext';

export const EditPage: React.FC<RouteComponentProps> = () => {
    const { state, dispatch } = useContext(SourcesContext),
        { selectedLanguage } = useContext(LanguageContext);
    useEffect(() => {
        getAvailableSources(selectedLanguage, dispatch);
    }, [selectedLanguage]);

    const resultsKeys = Object.keys(state.data);
    return (
        <>
            <Grid item xs={6} sm={7}></Grid>
            <Grid item xs={6} sm={5}>
                {
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
                            resultsKeys.map((source: string) => (
                                <ListItem key={source}>
                                    <ListItemIcon style={{ minWidth: '25px' }}>
                                        <AddIcon fontSize='small' />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={source}
                                        primaryTypographyProps={{ variant: 'body2', noWrap: true }}
                                    />
                                </ListItem>
                            ))
                        ) : (
                            <>
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                            </>
                        )}
                    </List>
                }
            </Grid>
        </>
    );
};

export default EditPage;
