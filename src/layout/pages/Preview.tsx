import React, { useContext, useEffect, useReducer, useCallback, Dispatch } from 'react';
import { RouteComponentProps, useParams } from 'react-router';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { ActionType, ErrorType, NewsApiArticleType } from '../../typing';
import { RESET_ARTICLES_ERROR } from '../../constants/actions';
import { PREVIEW_PATH_DELIMITER } from '../../constants/settings';
import getArticles from '../../actions/getArticles';
import ArticlesReducer, { initialState } from '../../reducers/articles';
import Translation from '../../utils/Translation';
import ErrorMessage from '../components/ErrorMessage';
import { SourcesContext } from '../context/SourcesContext';

const ArticlePlaceholder: React.FC = () => (
    <>
        <Skeleton width='100%' style={{ height: '4rem' }} />
        <Skeleton variant='rect' width='100%' style={{ height: '10rem' }} />
    </>
);

const Error: React.FC<{ error: ErrorType; dispatch: Dispatch<ActionType> }> = ({
    error,
    dispatch
}) => {
    const resetError = useCallback(() => {
        dispatch({ type: RESET_ARTICLES_ERROR });
    }, [dispatch]);

    if (!error) return null;

    return (
        <ErrorMessage onClose={resetError}>
            <Translation property={'error_' + error} />
        </ErrorMessage>
    );
};

const PreviewPage: React.FC<RouteComponentProps> = () => {
    const [{ articles, error }, dispatch] = useReducer(ArticlesReducer, initialState);
    const { dispatch: dispatchSource } = useContext(SourcesContext);
    const { sourcesIds = '' } = useParams();
    const sources = sourcesIds.replaceAll(PREVIEW_PATH_DELIMITER, ',');
    useEffect(() => {
        getArticles(sources, dispatch, dispatchSource);
    }, []);

    return (
        <>
            <Grid item xs={12} style={{ paddingTop: 0 }}>
                <Box
                    display='flex'
                    flexDirection='row'
                    flexWrap='wrap'
                    justifyContent='space-evenly'
                >
                    {(articles.length &&
                        articles.map((article: NewsApiArticleType) => (
                            <a
                                key={article.url}
                                href={article.url}
                                target='_blank'
                                rel='noreferrer'
                                style={{ textDecoration: 'none' }}
                            >
                                <Card
                                    style={{
                                        backgroundColor: '#ccc',
                                        margin: '1rem',
                                        width: '20rem'
                                    }}
                                >
                                    {(article.urlToImage && (
                                        <CardMedia
                                            image={article.urlToImage}
                                            title={article.title}
                                            style={{ height: '150px' }}
                                        />
                                    )) ||
                                        null}
                                    <CardHeader
                                        title={article.title}
                                        subheader={article.source.name}
                                    />
                                    <CardContent>
                                        <Typography
                                            variant='body2'
                                            color='textSecondary'
                                            component='p'
                                        >
                                            {article.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </a>
                        ))) || (
                        <>
                            <ArticlePlaceholder />
                            <ArticlePlaceholder />
                            <ArticlePlaceholder />
                            <ArticlePlaceholder />
                            <ArticlePlaceholder />
                        </>
                    )}
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Error error={error} dispatch={dispatch} />
            </Grid>
        </>
    );
};

export default PreviewPage;
