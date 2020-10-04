import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import { ROUTES, PREVIEW_PATH_DELIMITER } from '../../constants/settings';
import Translation from '../../utils/Translation';
import { SourcesContext } from '../context/SourcesContext';

const style = { marginTop: '0.2rem' };

const NavigatorLink: React.FC<RouteComponentProps> = ({ location }) => {
    const { data, selectedSources } = useContext(SourcesContext),
        enableLink = !!selectedSources.length;
    const isPreviewPage = location.pathname.indexOf('view') !== -1,
        text = <Translation property={isPreviewPage ? 'editLink' : 'previewLink'} />,
        label = isPreviewPage ? 'edit' : 'preview',
        link = isPreviewPage
            ? ROUTES.edit
            : ROUTES.preview.substring(0, ROUTES.preview.lastIndexOf('/')) +
              '/' +
              selectedSources.map(source => data[source]).join(PREVIEW_PATH_DELIMITER);

    return (
        <Link to={link} style={enableLink ? style : { ...style, pointerEvents: 'none' }}>
            <Tooltip title={text} aria-label={label}>
                {isPreviewPage ? (
                    <EditIcon color={enableLink ? 'secondary' : 'disabled'} aria-label='edit' />
                ) : (
                    <VisibilityIcon
                        color={enableLink ? 'secondary' : 'disabled'}
                        aria-label={label}
                    />
                )}
            </Tooltip>
        </Link>
    );
};

export default withRouter(NavigatorLink);
