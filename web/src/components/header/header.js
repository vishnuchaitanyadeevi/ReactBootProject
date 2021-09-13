import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './header.scss';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 0
  }
}));

export default function ProminentAppBar({ header, children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="header">
        <Toolbar className="toolBar">
          <Typography className="header" variant="h5">
            {header}
            {children}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
