import { API_FAILED, WRONG_DATA } from './errors';

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
    deselect: {
        it: 'Deseleziona',
        en: 'Deselect'
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
    changeLanguageForMoreSources: {
        it: 'Cambia lingua per caricare fonti in lingua inglese',
        en: 'Change language to retrieve sources in Italian language'
    },
    ['error_' + WRONG_DATA]: {
        it: 'Errore ' + WRONG_DATA + ' - Mi dispiace, ma non siamo in grado eleborare i dati',
        en: 'Error ' + WRONG_DATA + ' - Sorry, we are unable to elaborate the data'
    },
    ['error_' + API_FAILED]: {
        it:
            'Errore ' +
            API_FAILED +
            ' - Mi dispiace, ma non siamo riusciti a recuperare i dati richiesti',
        en: 'Error ' + API_FAILED + ' - Sorry, we are unable to retrieve the requested data'
    }
};
