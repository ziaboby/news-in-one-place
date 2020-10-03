import { ADD_ARTICLES, GET_ARTICLES_FAILED, RESET_ARTICLES_ERROR } from '../constants/actions';
import { ActionType, ArticlesReducersType, NewsApiArticleType } from '../typing';

export const initialState = {
    articlesIndexesBySource: {},
    articles: [],
    error: undefined
};

function ArticlesReducer(
    state: ArticlesReducersType = initialState,
    action: ActionType
): ArticlesReducersType {
    switch (action.type) {
        case ADD_ARTICLES: {
            const articlesIndexesBySource: { [key: string]: number[] } = {};
            action.payload.forEach((article: NewsApiArticleType, index: number) => {
                if (!articlesIndexesBySource[article.source.name]) {
                    articlesIndexesBySource[article.source.name] = [];
                }
                articlesIndexesBySource[article.source.name].push(index);
            });
            return {
                ...state,
                articles: action.payload.slice(0),
                articlesIndexesBySource
            };
        }
        case GET_ARTICLES_FAILED: {
            return {
                ...state,
                error: action.error
            };
        }
        case RESET_ARTICLES_ERROR: {
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

export default ArticlesReducer;
