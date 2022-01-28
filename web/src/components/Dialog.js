import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';

import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import { STATUS } from '../utils/constants';

function DialogComponent({
  open,
  titleType,
  handleClose,
  maxWidth,
  title,
  content,
  titleProps,
  contentProps,
  isCancelButton = true,
  cacelButtonText,
  isProceedButton = true,
  proceedButtonText,
  handleProceed
}) {
  const { t } = useTranslation();
  const { SUCCESS, FAILED, WARING, ERROR } = STATUS;

  const getIcon = (titleType) => {
    switch (titleType) {
      case SUCCESS:
        return <CheckCircleOutlineIcon />;
      case FAILED:
        return <ErrorOutlineRoundedIcon />;
      case WARING:
        return <WarningAmberIcon />;
      case ERROR:
        return <CancelOutlinedIcon />;
      default:
        return '';
    }
  };

  return (
    <Dialog fullWidth maxWidth={maxWidth} open={open} onClose={handleClose}>
      <DialogTitle {...titleProps}>
        {titleType && <IconButton>{getIcon(titleType)}</IconButton>}
        {title}
      </DialogTitle>
      <DialogContent {...contentProps}>{content}</DialogContent>
      <DialogActions>
        {isProceedButton && (
          <Button variant="contained" onClick={handleProceed}>
            {proceedButtonText || 'Proceed'}
          </Button>
        )}
        {isCancelButton && (
          <Button autoFocus onClick={handleClose}>
            {cacelButtonText || 'Cancel'}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default DialogComponent;
