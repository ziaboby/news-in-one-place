import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';

const SourceLabel: React.FC<{ source: string }> = ({ source }) => (
    <ListItemText primary={source} primaryTypographyProps={{ variant: 'body2', noWrap: true }} />
);

export default SourceLabel;
