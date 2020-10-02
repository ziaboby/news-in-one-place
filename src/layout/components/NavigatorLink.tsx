import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import { ROUTES } from '../../constants/settings';
import Translation from '../../utils/Translation';
import SourcesReducer, { initialState } from '../../reducers/sources';

const NavigatorLink: React.FC<RouteComponentProps> = ({ location }) => {
    const [state] = useReducer(SourcesReducer, initialState),
        enablePreviewLink = !!state.selectedSources.length;
    const isPreviewPage = location.pathname.indexOf('view') !== -1,
        text = <Translation property={isPreviewPage ? 'editLink' : 'previewLink'} />,
        label = isPreviewPage ? 'edit' : 'preview',
        link = isPreviewPage
            ? ROUTES.edit
            : ROUTES.preview.substring(0, ROUTES.preview.lastIndexOf('/')); // TODO add sourceids

    return (
        <Link to={link} style={enablePreviewLink ? {} : { pointerEvents: 'none' }}>
            <Tooltip title={text} aria-label={label}>
                {isPreviewPage ? (
                    <EditIcon color='secondary' aria-label='edit' />
                ) : (
                    <VisibilityIcon
                        color={enablePreviewLink ? 'secondary' : 'disabled'}
                        aria-label={label}
                    />
                )}
            </Tooltip>
        </Link>
    );
};

export default withRouter(NavigatorLink);
