import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { LanguageContextProvider } from './context/LanguageContext';
import { ThemeContextProvider } from './context/ThemeContext';
import Header from './components/Header';
import PagePreview from './pages/Preview';
import PageEdit from './pages/Edit';
import { ROUTES } from '../settings';

const App: React.FC = () => (
    <BrowserRouter>
        <LanguageContextProvider>
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
        </LanguageContextProvider>
    </BrowserRouter>
);

export default App;
