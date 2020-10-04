import {
    ADD_SOURCES,
    SELECT_SOURCE,
    UNSELECT_SOURCE,
    CLEAR_SELECTED_SOURCES,
    GET_AVAILABLE_SOURCES_FAILED,
    RESET_SOURCES_ERROR
} from '../constants/actions';
import { ActionType, DataType, NewsApiArticleType, SourcesReducerType } from '../typing';
import getSourceDomainFromUrl from '../utils/getSourceDomainFromUrl';

export const initialState = {
    data: {},
    selectedSources: [],
    error: undefined
};

function SourcesReducer(
    state: SourcesReducerType = initialState,
    action: ActionType
): SourcesReducerType {
    switch (action.type) {
        case ADD_SOURCES: {
            const sources: DataType = {};
            action.payload.forEach((article: NewsApiArticleType) => {
                const name = article.source.name;
                if (
                    !state.data[name] &&
                    !sources[name] /* && article.url.indexOf('amp') === -1 */
                ) {
                    sources[name] = getSourceDomainFromUrl(article.url);
                }
            });
            return {
                ...state,
                data: {
                    ...state.data,
                    ...sources
                }
            };
        }
        case SELECT_SOURCE: {
            if (!state.selectedSources.includes(action.payload)) {
                return {
                    ...state,
                    selectedSources: [...state.selectedSources, action.payload]
                };
            }
            return state;
        }
        case UNSELECT_SOURCE: {
            if (state.selectedSources.includes(action.payload)) {
                return {
                    ...state,
                    selectedSources: state.selectedSources.filter(
                        source => source != action.payload
                    )
                };
            }
            return state;
        }
        case CLEAR_SELECTED_SOURCES: {
            return {
                ...state,
                selectedSources: initialState.selectedSources
            };
        }
        case GET_AVAILABLE_SOURCES_FAILED: {
            return {
                ...state,
                error: action.error
            };
        }
        case RESET_SOURCES_ERROR: {
            return {
                ...state,
                error: initialState.error
            };
        }
        default: {
            return state;
        }
    }
}

export default SourcesReducer;
