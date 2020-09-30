import { Actions, ActionType, NewsApiArticleType } from '.';

type DataType = { [sourceId: string]: string };
type StateType = {
    data: DataType;
    selectedSources: string[];
};

export const initialState = {
    data: {},
    selectedSources: []
};

function SourcesReducer(state: StateType, action: ActionType): StateType {
    switch (action.type) {
        case '' + Actions.ADD_SOURCES: {
            const sources: DataType = {};
            action.payload.forEach((article: NewsApiArticleType) => {
                const name = article.source.name;
                if (!state.data[name] && sources[name]) {
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
        case '' + Actions.SELECT_SOURCE: {
            if (!state.selectedSources.includes(action.payload)) {
                return {
                    ...state,
                    selectedSources: [...state.selectedSources, action.payload]
                };
            }
            return state;
        }
        case '' + Actions.UNSELECT_SOURCE: {
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
        case '' + Actions.CLEAR_SOURCES: {
            return {
                ...state,
                data: initialState.data
            };
        }
        case '' + Actions.CLEAR_SELECTED_SOURCES: {
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
