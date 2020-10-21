export type ActionType = {
    type: string;
    payload?: any;
    error?: string | number | undefined;
};

export type DataType = { [sourceId: string]: string };

export type ErrorType = string | number | undefined;

export type SourcesReducerType = {
    data: DataType;
    selectedSources: string[];
    error: ErrorType;
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

export type ArticlesReducersType = {
    articlesIndexesBySource: { [sourceId: number[]] };
    articles: NewsApiArticleType[];
    error: ErrorType;
};
