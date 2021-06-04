import React from 'react';
import clsx from 'clsx';
import { IoIosSearch } from "react-icons/io";
import './styles.css'
import Submenu from '../AllSuBmenus/Submenu'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Logo from '../../assests/images/brand/logo.png'
import MiniLogo from '../../assests/images/brand/favicon.png'
import userSec from '../../assests/images/users/16.jpg'
import SettingsIcon from '@material-ui/icons/Settings';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import Drawer from '@material-ui/core/Drawer';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AppBar from '@material-ui/core/AppBar';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MemoryIcon from '@material-ui/icons/Memory';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import OpacityIcon from '@material-ui/icons/Opacity';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';

import InputAdornment from '@material-ui/core/InputAdornment';
import WidgetsIcon from '@material-ui/icons/Widgets';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import BarChartIcon from '@material-ui/icons/BarChart';
import MapIcon from '@material-ui/icons/Map';
import TableChartIcon from '@material-ui/icons/TableChart';
import ClearIcon from '@material-ui/icons/Clear';
import PagesIcon from '@material-ui/icons/Pages';
import User from '../user/User';
import Notfication from '../notification/Notfication'
import Home from '../Homepage/Home';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // backgroundColor:"pink"
  },
  appBar: {
    background:"white",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  margin: {
    margin: theme.spacing(1),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    color: "blue"
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>  
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >

<div className="title">
       


          <img src={MiniLogo} className="minilogo" alt={MiniLogo}/>
          </div>
            <MenuIcon />
          </IconButton>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <SettingsIcon  className="settings-icons" />
            Projects
            < ExpandMoreIcon  className="settings-icons" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>App Design Projects</MenuItem>
        <MenuItem onClick={handleClose}>Web Design Projects</MenuItem>
        <MenuItem onClick={handleClose}>App Development Projects</MenuItem>
        <MenuItem onClick={handleClose}>Backend Projects</MenuItem>
        <MenuItem onClick={handleClose}>View Proects</MenuItem>
      </Menu>
         
          <Grid className="search" container spacing={1} alignItems="flex-end">
         
          <form className="search__form">
      
        <input className="search" type="text" placeholder="search" />
        <SearchIcon className="search__icon" />
      </form>
        </Grid>
        <ZoomOutMapIcon className="zoom-icons" />

        <Notfication  />
         {/* < NotificationsActiveIcon className="zoom-icons"  /> */}
        <User />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
        <img className="header-logo" src={Logo} alt={Logo} />
        {/* <img src={MiniLogo} className="minilogo" alt={MiniLogo}/> */}
          <IconButton onClick={handleDrawerClose}>
         
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ClearIcon />}
           
          </IconButton>
        </div>
        <Divider />
        <List>
        {/* <ListItem>
              <ListItemIcon>  <img src={userSec} alt={userSec}/></ListItemIcon>
            </ListItem> */}
        
          
            <ListItem button >
              <ListItemIcon>  <img src={userSec} className="sideUser" alt={userSec}/> </ListItemIcon>
           

            </ListItem>
            <h3>John Thomson</h3>
            <p>App Developer</p>
        </List>
        <Divider />
        {/* <List>
          {[' DashBoard'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon> <DashboardIcon /> </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Apps'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon> <AppsIcon /> </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Widgets'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon> <AccountCircle  /> </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Forms'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon> <BorderColorIcon /> </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Charts'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon> <BarChartIcon /> </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Maps'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon> <MapIcon /> </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Tables'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon> <TableChartIcon /> </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Elements'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon> <MenuIcon /> </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Icons'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon> <OpacityIcon /> </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Pages'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon> <PagesIcon /> </ListItemIcon> */}
              {/* <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['E-commerce'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon> <AddShoppingCartIcon /> </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Basic Element'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon> <MemoryIcon  /> </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider /> */}
        {/* <List>
          {['Account'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon> <SupervisorAccountIcon /> </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider /> */}
        {/* <List>
          {['Error Pages'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon> <ErrorIcon /> </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider /> */}
        <Submenu />
        {/* <List>
          {['SubMenus'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon> <MenuOpenIcon /> </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Home />
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}
