import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { ThemeContext, THEME_TYPES } from '../context/ThemeContext';
import Translation from '../../utils/Translation';

const style = { marginTop: '0.3rem', marginRight: '0.7rem', cursor: 'pointer' };

const SelectorTheme: React.FC = () => {
    const { themeType, toggleTheme } = useContext(ThemeContext),
        text = <Translation property={'changeTheme'} />,
        label = themeType;
    return (
        <Tooltip title={text} aria-label={label}>
            <Box onClick={toggleTheme} style={style}>
                <WbSunnyIcon color={themeType === THEME_TYPES[0] ? 'disabled' : 'inherit'} />
                <NightsStayIcon color={themeType === THEME_TYPES[1] ? 'disabled' : 'inherit'} />
            </Box>
        </Tooltip>
    );
};

export default SelectorTheme;
