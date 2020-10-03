// NOTE - You can use this one (max 500 requests/day) or create your own. It's free! Go to https://newsapi.org/register
const API_KEY = '46f8f57a470c4a128ee240e7dd004e9b';

export const ROOT = window.location.href.indexOf('localhost') !== -1 ? 'localhost' : 'others';

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const YY = yesterday.getFullYear(),
    MM = yesterday.getMonth() + 1,
    DD = yesterday.getDate();

export const ENDPOINTS = {
    localhost: {
        getAvailableSources: {
            base: 'http://newsapi.org/v2/top-headlines',
            params: {
                country: '',
                apiKey: API_KEY
            }
        },
        getNewsBySources: {
            base: 'http://newsapi.org/v2/everything',
            params: {
                domains: '',
                from: `${YY}-${MM}-${DD}`,
                sortBy: 'popularity',
                page: '1',
                pageSize: '100',
                apiKey: API_KEY
            }
        }
    },
    others: {
        getAvailableSources: {
            base: 'data/topHeadlines/%COUNTRY%.json'
        },
        getNewsBySources: {
            base: 'data/everything/articles.json'
        }
    }
};
