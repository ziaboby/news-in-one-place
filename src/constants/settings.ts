export const LANGUAGES: string[] = ['it', 'en'];
export const THEMES = {
    light: {
        palette: {}
    },
    dark: {}
};
export const ROUTES = {
    index: '/',
    edit: '/edit',
    preview: '/view/:sourcesIds'
};
API_KEY = '';
export const ENDPOINTS = {
    getAvailableSources: 'http://newsapi.org/v2/top-headlines?country=%COUNTRY%&apiKey=' + API_KEY
};
export const TRANSLATIONS: { [key: string]: { [key: string]: string } } = {
    logoLabel: {
        it: 'News',
        en: 'News'
    },
    title: {
        it: 'Le notizie in un solo posto',
        en: 'News in one place'
    },
    ctaEditPage: {
        it: 'Scegli le tue fonti',
        en: 'Choose your sources'
    },
    editLink: {
        it: 'Modifica',
        en: 'Edit'
    },
    previewLink: {
        it: 'Anteprima',
        en: 'Preview'
    },
    changeLanguage: {
        it: 'Cambia lingua',
        en: 'Change language'
    },
    select: {
        it: 'Seleziona',
        en: 'Select'
    },
    selectAll: {
        it: 'Seleziona tutti',
        en: 'Select all'
    },
    add: {
        it: 'Aggiungi',
        en: 'Add'
    },
    remove: {
        it: 'Rimuovi',
        en: 'Remove'
    },
    order: {
        it: 'Ordina la lista',
        en: 'Order the list'
    },
    orderByDragging: {
        it: "Trascina e muovi l'elemento per riordinare la lista",
        en: 'Drag and move the item to re-order the list'
    }
};
