import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import WidgetsIcon from '@material-ui/icons/Widgets';
import Divider from '@material-ui/core/Divider';
import TableChartIcon from '@material-ui/icons/TableChart';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Tables() {
  const classes = useStyles();
  const [table, setTable] = React.useState(true);

  const handleClick = () => {
    setTable(!table);
  };

  return (
    <List
    component="nav"
    aria-labelledby="nested-list-subheader"

    className={classes.root}
  >
    
    
    <ListItem button onClick={handleClick}>
      <ListItemIcon>
      <TableChartIcon /> 
      </ListItemIcon>
      <ListItemText primary="Tables" />
      {table ? <ExpandMore /> : <ArrowRightIcon />}
    </ListItem>
    
    <Collapse in={table} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="Widgets" />
        </ListItem>
        <Divider />
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="Charts Widgets" />
        </ListItem>
       
      </List>
    </Collapse>
  </List>
  
  );
}
