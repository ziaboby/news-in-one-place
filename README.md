# News in one place

Web app to collect news in one single place.

Project progress can be followed on [this Trello board](https://trello.com/b/O8D1YENf/project-news-in-one-place), while a web app preview will be be available [here](https://ziaboby.github.io/news-in-one-place/public/).

## Testing locally
For a complete experience you should install locally the web app. 
It is based on [News API](https://newsapi.org/) and using a free API key has some limitations, such as blocked requests from other domains than NewsApi. Well, except for *localhost*.
You can use my API key or create your own [here](https://newsapi.org/register) and update *src/constants/endpoints.ts* file.
NOTE - Github Pages demo uses sample data (*public/data*).

From the root folder
```
npm i
```
Then run one of the following script

Available scripts:
* `build:dev:watch` - launch local server and build development script in watch mode
* `build:dev:watch:no:serve` - build development script, while watching for new updates 
* `build:prod:watch` - build production script, while watching for new updates 
* `build:prod` - build production script
* `build:dev:watch` - launch local server (Thank you Webpack Dev Server team)
