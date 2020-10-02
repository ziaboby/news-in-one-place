// NOTE - You can use this one (max 500 requests/day) or create your own. It's free! Go to https://newsapi.org/register
const API_KEY = '46f8f57a470c4a128ee240e7dd004e9b';

export const ENDPOINTS = {
    localhost: {
        getAvailableSources:
            'http://newsapi.org/v2/top-headlines?country=%COUNTRY%&apiKey=' + API_KEY,
        getNewsBySources:
            'http://newsapi.org/v2/everything?domains=%SOURCES%&from=2020-09-30&sortBy=popularity&page=1&apiKey=' +
            API_KEY
    },
    others: {
        getAvailableSources: 'data/topHeadlines/%COUNTRY%.json',
        getNewsBySources: 'data/everything/articles.json'
    }
};
