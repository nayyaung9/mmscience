import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import LabelIcon from '@material-ui/icons/Label';
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';
import { css } from '@emotion/core'
import Theme from '../components/theme'
import SystemUpdateIcon from '@material-ui/icons/SystemUpdate';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import '../styles/global.css';
import appLogo from '../assets/MMsciIcon512.png'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{ 
          boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
          backgroundColor: 'var(--appBar-bg)'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            style={{ color: 'var(--appBar-text)' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title} 
          css={css`
            @media screen and (max-width: 700px) { 
              text-align: center;
            }
          `}>
            <Link to='/' style={{ fontFamily: 'Acme', color: 'var(--appBar-text)' }} alt="home" aria-label="home">MM Science</Link>
          </Typography>
          
            <Link to='/search/' style={{ color: 'var(--appBar-text)' }} alt="mmscience about" aria-label="search">
              <Button color="inherit" aria-label="searchIcon">
                <SearchIcon />
              </Button>
            </Link>
            
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div className={classes.drawerHeader}>
          <div style={{ margin: 'auto', display: 'flex'}}>
            <img src={appLogo} width="30px" style={{ marginRight: '10px'}}/> 
            <Typography variant="h6" style={{ fontFamily: 'Acme', color: 'var(--appBar-text)',  }}>
            MM Science
            </Typography>
          </div>
          <IconButton onClick={handleDrawerClose} style={{ color: 'var(--appBar-text)' }}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>          
          <Link to='/' alt="home" aria-label="home">
            <ListItem button style={{ color: 'var(--appBar-text)' }}>
              <ListItemIcon> <HomeIcon style={{ color: 'var(--appBar-text)' }}/> </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link to='/wiki/' style={{ color: 'var(--appBar-text)' }} alt="wiki" aria-label="wiki">
            <ListItem button>
              <ListItemIcon> <DynamicFeedIcon style={{ color: 'var(--appBar-text)' }}/> </ListItemIcon>
              <ListItemText primary="Feed" />
            </ListItem>
          </Link>
          <Link to='/discover/' style={{ color: 'var(--appBar-text)' }} alt="discover" aria-label="discover">
            <ListItem button>
              <ListItemIcon> <LabelIcon style={{ color: 'var(--appBar-text)' }}/> </ListItemIcon>
              <ListItemText primary="Discover" />
            </ListItem>
          </Link>
          <Link to='/videos' alt="video" aria-label="video">
            <ListItem button style={{ color: 'var(--appBar-text)' }}>
              <ListItemIcon> <OndemandVideoIcon style={{ color: 'var(--appBar-text)' }}/> </ListItemIcon>
              <ListItemText primary="videos" />
            </ListItem>
          </Link> 
        </List>
        <Divider />
        <List>
          <Link to='/updates' alt="updates" aria-label="updates">
            <ListItem button style={{ color: 'var(--appBar-text)' }}>
              <ListItemIcon> <SystemUpdateIcon  style={{ color: 'var(--appBar-text)' }}/> </ListItemIcon>
              <ListItemText primary="Updates" />
            </ListItem>
          </Link>
          <Link to='/help/' style={{ color: 'var(--appBar-text)' }} alt="help center" aria-label="help-center">
            <ListItem button>
              <ListItemIcon> <HelpIcon style={{ color: 'var(--appBar-text)' }}/> </ListItemIcon>
              <ListItemText primary="How to use it" />
            </ListItem>
          </Link>
          <ListItem style={{ color: 'var(--appBar-text)' }}>
            <ListItemIcon>
              <Theme /> 
            </ListItemIcon>
            <ListItemText primary="Dark Mode" />
          </ListItem>
        </List>
      </Drawer>
      {/* <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main> */}
    </div>
  );
}