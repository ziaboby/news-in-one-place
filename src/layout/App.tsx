import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { LanguageContextProvider } from './context/LanguageContext';
import { SourcesContextProvider } from './context/SourcesContext';
import { ThemeContextProvider } from './context/ThemeContext';
import Header from './components/Header';
import PagePreview from './pages/Preview';
import PageEdit from './pages/Edit';
import { ROUTES } from '../constants/settings';

const App: React.FC = () => (
    <HashRouter>
        <LanguageContextProvider>
            <SourcesContextProvider>
                <ThemeContextProvider>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <Header />
                        </Grid>
                        <Switch>
                            <Route exact path={ROUTES.index} component={PageEdit} />
                            <Route exact path={ROUTES.preview} component={PagePreview} />
                            <Route exact path={ROUTES.edit} component={PageEdit} />
                            <Redirect to={ROUTES.index} />
                        </Switch>
                    </Grid>
                </ThemeContextProvider>
            </SourcesContextProvider>
        </LanguageContextProvider>
    </HashRouter>
);

export default App;
