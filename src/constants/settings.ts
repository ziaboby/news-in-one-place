export const LANGUAGES: string[] = ['it', 'en'];

export const THEMES = {
    palette: {
        type: 'light',
        primary: {
            light: '#5e92f3',
            main: '#1565c0',
            dark: '#003c8f',
            contrastText: '#fff'
        },
        secondary: {
            light: '#6d6d6d',
            main: '#424242',
            dark: '#1b1b1b',
            contrastText: '#fff'
        }
    }
};

export const ROUTES = {
    index: '/',
    edit: '/edit',
    preview: '/view/:sourcesIds'
};

export const PREVIEW_PATH_DELIMITER = '_';
