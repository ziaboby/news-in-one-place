import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PlaceOutlinedIcon from '@material-ui/icons/PlaceOutlined';
import SelectorTheme from './SelectorTheme';
import SelectorLanguage from './SelectorLanguage';
import NavigatorLink from './NavigatorLink';
import Translation from '../../utils/Translation';
import { ROUTES } from '../../constants/settings';

const Header: React.FC = () => (
    <AppBar position='static'>
        <Box display='flex'>
            <Box
                component='div'
                px={2}
                display='flex'
                flexDirection='row'
                alignItems='center'
                justifyContent='flex-start'
            >
                <Link to={ROUTES.index} style={{ textDecoration: 'none' }}>
                    <Typography variant='h6' style={{ color: '#fff' }}>
                        <Translation property={'logoLabel'} />
                    </Typography>
                </Link>

                <PlaceOutlinedIcon />
            </Box>
            <Box
                component='div'
                px={2}
                display='flex'
                flexDirection='row'
                alignItems='center'
                justifyContent='flex-end'
                flexGrow='1'
                paddingLeft='10px'
            >
                <SelectorTheme />
                <SelectorLanguage />
                <NavigatorLink />
            </Box>
        </Box>
    </AppBar>
);

export default Header;
