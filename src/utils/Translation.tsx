import React, { useContext } from 'react';
import { LanguageContext } from '../layout/context/LanguageContext';
import { TRANSLATIONS } from '../constants/settings';

type Props = {
    property: string;
};
const Translation: React.FC<Props> = ({ property }) => {
    const { selectedLanguage } = useContext(LanguageContext);
    return <>{TRANSLATIONS[property][selectedLanguage] || ''}</>;
};

export default Translation;
