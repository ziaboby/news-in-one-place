import React, { useCallback, useContext } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { LANGUAGES } from '../../settings';
import { LanguageContext } from '../context/LanguageContext';
import Translation from '../../utils/Translation';

const SelectorLanguage: React.FC = () => {
    const { selectedLanguage, setLanguage } = useContext(LanguageContext),
        text = <Translation property={'changeLanguage'} />,
        label = selectedLanguage,
        toggleLanguage = useCallback(() => {
            setLanguage(LANGUAGES[+!LANGUAGES.indexOf(selectedLanguage)]);
        }, [setLanguage, selectedLanguage]);
    return (
        <Tooltip title={text} aria-label={label}>
            <FormControlLabel
                control={
                    <Switch
                        checked={!!LANGUAGES.indexOf(selectedLanguage)}
                        onChange={toggleLanguage}
                        name='language'
                        inputProps={{ 'aria-label': label }}
                    />
                }
                label={label.toUpperCase()}
            />
        </Tooltip>
    );
};

export default SelectorLanguage;
