import React from 'react';
import { useHistory } from 'react-router-dom';
import { 
    AppBar, 
    Toolbar, 
    IconButton, 
    Fab, 
    makeStyles, 
    createStyles, 
    Theme, 
    InputBase, 
    fade
} from '@material-ui/core';
import { ExitToApp, List } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

const Navbar = ({ signOut, onFilterChange }: any) => {
    const classes = useStyles();
    const history = useHistory();
    return (
       <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>
                <IconButton title="List Button" onClick={() => history.push('tasks')} className={classes.leftIcon} edge="start" color="inherit" aria-label="open drawer">
                    <List />
                </IconButton>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        onFocus={() => history.push('tasks')}
                        onChange={onFilterChange}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <Fab title="Add Button" onClick={() => history.push('addTask')} color="secondary" aria-label="add" className={classes.fabButton}>
                    <AddIcon/>
                </Fab>
                <div className={classes.grow} />
                <IconButton title="Signout Button" onClick={signOut} className={classes.leftIcon}>
                    <ExitToApp className={classes.exitIcon}/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    exitIcon: {
      color: '#FFFFFF'
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: '90%',
      bottom: 0,
      [theme.breakpoints.up('sm')]: {
          top: 'auto'
      }
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto'
    },
    leftIcon: {
      marginTop: '25px',
      [theme.breakpoints.up('sm')]: {
        marginTop: 0
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      marginTop: '25px',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
        marginTop: 0
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);

export default Navbar;