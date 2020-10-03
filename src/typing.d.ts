export type ActionType = {
    type: string;
    payload?: any;
};

export type DataType = { [sourceId: string]: string };

export type SourcesReducerType = {
    data: DataType;
    selectedSources: string[];
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
