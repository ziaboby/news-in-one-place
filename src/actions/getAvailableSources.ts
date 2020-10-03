import axios from 'axios';
import { Dispatch } from 'react';
import { ADD_SOURCES, GET_AVAILABLE_SOURCES_FAILED } from '../constants/actions';
import { WRONG_DATA, API_FAILED } from '../constants/errors';
import { ENDPOINTS } from '../constants/endpoints';
import { ActionType } from '../typing';

const root = window.location.href.indexOf('localhost') !== -1 ? 'localhost' : 'others',
    callSkeleton = id => axios.get(ENDPOINTS[root].getAvailableSources.replace('%COUNTRY%', id));

const MAP_COUNTRIES_BY_LANG = {
    it: ['it'],
    en: ['gb', 'us']
};

export default (selectedLang: string, dispatch: Dispatch<ActionType>): void => {
    Promise.all(MAP_COUNTRIES_BY_LANG[selectedLang].map(country => callSkeleton(country)))
        .then(results => {
            try {
                if (!results.length || results.some(result => result.status !== 200)) {
                    dispatch({ type: GET_AVAILABLE_SOURCES_FAILED, error: WRONG_DATA });
                    return;
                }
                const payload = results.reduce((prev, item) => prev.concat(item.data.articles), []);
                dispatch({ type: ADD_SOURCES, payload });
            } catch (error) {
                console.error(error);
                dispatch({ type: GET_AVAILABLE_SOURCES_FAILED, error: WRONG_DATA });
            }
        })
        .catch(error => {
            console.error(error);
            dispatch({ type: GET_AVAILABLE_SOURCES_FAILED, error: API_FAILED });
        });
};
