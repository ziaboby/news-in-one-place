import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';

const ErrorMessage: React.FC<{ onClose: () => void }> = ({ onClose, children }) => (
    <Alert
        variant='outlined'
        severity='error'
        action={
            <IconButton aria-label='close' color='inherit' size='small' onClick={onClose}>
                <CloseIcon fontSize='small' />
            </IconButton>
        }
    >
        {children}
    </Alert>
);

export default ErrorMessage;
