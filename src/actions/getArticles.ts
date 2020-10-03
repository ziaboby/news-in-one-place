import axios from 'axios';
import { Dispatch } from 'react';
import { ENDPOINTS, ROOT } from '../constants/endpoints';
import {
    ADD_ARTICLES,
    ADD_SOURCES,
    GET_ARTICLES_FAILED,
    SELECT_SOURCE
} from '../constants/actions';
import { WRONG_DATA, API_FAILED } from '../constants/errors';
import { ActionType, NewsApiArticleType } from '../typing';

export default (
    sources: string,
    dispatch: Dispatch<ActionType>,
    dispatchForSourcesReducer: Dispatch<ActionType>
): void => {
    const currentApi = ENDPOINTS[ROOT].getNewsBySources,
        params = Object.assign({}, currentApi.params, { domains: sources });

    axios
        .get(currentApi.base, { params })
        .then(function (response) {
            if (response.data?.articles.length) {
                dispatch({ type: ADD_ARTICLES, payload: response.data.articles });
                dispatchForSourcesReducer({ type: ADD_SOURCES, payload: response.data.articles });
                // const splittedSources = sources.split(',') TODO filtrare notizie in base 
                response.data.articles.forEach((article: NewsApiArticleType) => { 
                    dispatchForSourcesReducer({
                        type: SELECT_SOURCE,
                        payload: article.source.name
                    });
                });
            } else {
                dispatch({ type: GET_ARTICLES_FAILED, error: WRONG_DATA });
                console.error(response);
            }
        })
        .catch(function (error) {
            dispatch({ type: GET_ARTICLES_FAILED, error: API_FAILED });
            console.error(error);
        });
};
