import {
    ADD_SOURCES,
    SELECT_SOURCE,
    UNSELECT_SOURCE,
    CLEAR_SOURCES,
    CLEAR_SELECTED_SOURCES
} from '../constants/actions';
import { ActionType, DataType, NewsApiArticleType, SourcesReducerType } from '../typing';

export const initialState = {
    data: {},
    selectedSources: []
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
                    sources[name] = (article.url.match(/\/\/(www.|)([\w.]+)\//) || [])[2];
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
        case CLEAR_SOURCES: {
            return {
                ...state,
                data: initialState.data
            };
        }
        case CLEAR_SELECTED_SOURCES: {
            return {
                ...state,
                selectedSources: initialState.selectedSources
            };
        }
        default: {
            return state;
        }
    }
}

export default SourcesReducer;
