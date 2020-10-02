export type ActionType = {
    type: string;
    payload: any;
};

type DataType = { [sourceId: string]: string };
type SourcesReducerType = {
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
