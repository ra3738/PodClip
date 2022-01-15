/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, AppBar, Toolbar, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import createHistory from 'history/createBrowserHistory';
import { useSelector, useDispatch } from 'react-redux';
import colors from '../../constants/colors';
import { deleteAccount } from '../../redux/actions/userActions';

const history = createHistory({ forceRefresh: true });

const useStyles = makeStyles(theme => ({
  bar: {
    backgroundColor: colors.white,
  },
  login: {
    fontSize: '18px',
    backgroundColor: colors.darkBlue,
    color: colors.white,
    '&:hover': {
      backgroundColor: colors.darkBlue,
    },
  },
  title: {
    padding: '25px 5px',
    textTransform: 'uppercase',
    flexGrow: 1,
  },
  titleLink: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
  accountIcon: {
    color: theme.palette.primary.main,
    fontSize: 60,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  menuItem: {
    width: '100%',
    backgroundColor: colors.white,
    color: colors.darkBlue,
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: colors.lightBlue,
    },
    '&:focus': {
      backgroundColor: colors.lightBlue,
    },
  },
  link: {
    textDecoration: 'none',
  },
}));

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    handleMenuClose();
  };

  const patientState = useSelector(state => state.patient);
  const dispatch = useDispatch();

  const getDoctorsOnClick = () => {
    deleteAccount(dispatch, patientState.id);
    handleMenuClose();
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <Link className={classes.link} to='/profile'>
        <MenuItem className={classes.menuItem} onClick={handleMenuClose}>
          Profile
        </MenuItem>
      </Link>
      <MenuItem className={classes.menuItem} onClick={handleLogOut}>
        Log Out
      </MenuItem>
      <MenuItem className={classes.menuItem} onClick={getDoctorsOnClick}>
        Delete Account
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position='static' className={classes.bar}>
        <Toolbar>
          <Typography variant='h4' className={classes.title}>
            <Link className={classes.titleLink} onClick={() => history.push('/')}>
              PodClip
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </>
  );
};

export default Header;
