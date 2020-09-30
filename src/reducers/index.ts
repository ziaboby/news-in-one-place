export enum Actions {
    ADD_SOURCE,
    ADD_SOURCES,
    SELECT_SOURCE,
    UNSELECT_SOURCE,
    CLEAR_SOURCES,
    CLEAR_SELECTED_SOURCES
}

export type ActionType = {
    type: string;
    payload: any;
};

export type NewsApiArticleType = {
    source: {
        id: null | string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};
