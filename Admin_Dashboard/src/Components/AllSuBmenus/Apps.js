import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ChatIcon from '@material-ui/icons/Chat';
import Divider from '@material-ui/core/Divider';
import ContactsIcon from '@material-ui/icons/Contacts';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';
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

const AppDetails = () =>{
    const classes = useStyles();
  const [app, setApp] = React.useState(true);

  const handleClick = () => {
    setApp(!app);
  };

  return (
    <List
    component="nav"
    aria-labelledby="nested-list-subheader"

    className={classes.root}
  >
    
    
    <ListItem button onClick={handleClick}>
      <ListItemIcon>
      <AppsIcon /> 
      </ListItemIcon>
      <ListItemText primary="File " />
      {app ? <ExpandMore /> : <ArrowRightIcon />}
    </ListItem>
    <Collapse in={app} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Dashboard 1" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Dashboard 2" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Dashboard 3" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Dashboard 4" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Dashboard 5" />
        </ListItem>
        <ListItem button className={classes.nested}>
       
        </ListItem>
      </List>
    </Collapse>
  </List>
  )
}
<Divider />

const Chat = () =>{
    const classes = useStyles();
  const [chat, setchat] = React.useState(true);

  const handleClick = () => {
    setchat(!chat);
  };

  return (
    <List
    component="nav"
    aria-labelledby="nested-list-subheader"

    className={classes.root}
  >
    
    
    <ListItem button onClick={handleClick}>
      <ListItemIcon>
      <ChatIcon /> 
      </ListItemIcon>
      <ListItemText primary="Chats" />
      {chat ? <ExpandMore /> : <ArrowRightIcon />}
    </ListItem>
    <Collapse in={chat} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Chat 1" />
        </ListItem>
        
       
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Chat 2" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Chat 3" />
        </ListItem>
        <ListItem button className={classes.nested}>
       
        </ListItem>
      </List>
    </Collapse>
  </List>
  )
}


// const Chat = () =>{
//     const classes = useStyles();
//   const [chat, setchat] = React.useState(true);

//   const handleClick = () => {
//     setchat(!chat);
//   };

//   return (
//     <List
//     component="nav"
//     aria-labelledby="nested-list-subheader"

//     className={classes.root}
//   >
    
    
//     <ListItem button onClick={handleClick}>
//       <ListItemIcon>
//       <ChatIcon /> 
//       </ListItemIcon>
//       <ListItemText primary="Chats" />
//       {chat ? <ExpandMore /> : <ArrowRightIcon />}
//     </ListItem>
//     <Collapse in={chat} timeout="auto" unmountOnExit>
//       <List component="div" disablePadding>
//         <ListItem button className={classes.nested}>
//           <ListItemIcon>
//             <StarBorder />
//           </ListItemIcon>
//           <ListItemText primary="Chat 1" />
//         </ListItem>
        
       
//         <ListItem button className={classes.nested}>
//           <ListItemIcon>
//             <StarBorder />
//           </ListItemIcon>
//           <ListItemText primary="Chat 2" />
//         </ListItem>
//         <ListItem button className={classes.nested}>
//           <ListItemIcon>
//             <StarBorder />
//           </ListItemIcon>
//           <ListItemText primary="Chat 3" />
//         </ListItem>
//         <ListItem button className={classes.nested}>
       
//         </ListItem>
//       </List>
//     </Collapse>
//   </List>
//   )
// }
const UserList = () =>{
    const classes = useStyles();
  const [user, setUser] = React.useState(true);

  const handleClick = () => {
    setUser(!user);
  };

  return (
    <List
    component="nav"
    aria-labelledby="nested-list-subheader"

    className={classes.root}
  >
    
    
    <ListItem button onClick={handleClick}>
      <ListItemIcon>
      <AssignmentIndIcon  /> 
      </ListItemIcon>
      <ListItemText primary="User List" />
      {user ? <ExpandMore /> : <ArrowRightIcon />}
    </ListItem>
    <Collapse in={user} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Chat 1" />
        </ListItem>
        
       <Divider/>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Chat 2" />
        </ListItem>
        <Divider/>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Chat 3" />
        </ListItem>
        <Divider/>
        <ListItem button className={classes.nested}>
       
        </ListItem>
      </List>
    </Collapse>
  </List>
  )
}


const TodoList = () =>{
    const classes = useStyles();
  const [todo, setTodo] = React.useState(true);

  const handleClick = () => {
    setTodo(!todo);
  };

  return (
    <List
    component="nav"
    aria-labelledby="nested-list-subheader"

    className={classes.root}
  >
    
    
    <ListItem button onClick={handleClick}>
      <ListItemIcon>
      <FormatListNumberedRtlIcon  /> 
      </ListItemIcon>
      <ListItemText primary="Todo List" />
      {todo ? <ExpandMore /> : <ArrowRightIcon />}
    </ListItem>
    <Collapse in={todo} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Chat 1" />
        </ListItem>
        
       <Divider/>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Chat 2" />
        </ListItem>
        <Divider/>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Chat 3" />
        </ListItem>
        <Divider/>
        <ListItem button className={classes.nested}>
       
        </ListItem>
      </List>
    </Collapse>
  </List>
  )
}

const Contact = () =>{
    const classes = useStyles();
  const [contact, setContact] = React.useState(true);

  const handleClick = () => {
    setContact(!contact);
  };

  return (
    <List
    component="nav"
    aria-labelledby="nested-list-subheader"

    className={classes.root}
  >
    
    
    <ListItem button onClick={handleClick}>
      <ListItemIcon>
      <ContactsIcon /> 
      </ListItemIcon>
      <ListItemText primary="Contact" />
      {contact ? <ExpandMore /> : <ArrowRightIcon />}
    </ListItem>
    <Collapse in={contact} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Chat 1" />
        </ListItem>
        
       
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Chat 2" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Chat 3" />
        </ListItem>
        <ListItem button className={classes.nested}>
       
        </ListItem>
      </List>
    </Collapse>
  </List>
  )
}


export default function Apps() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
    component="nav"
    aria-labelledby="nested-list-subheader"

    className={classes.root}
  >
    
    
    <ListItem button onClick={handleClick}>
      <ListItemIcon>
      <AppsIcon /> 
      </ListItemIcon>
      <ListItemText primary="Apps" />
      {open ? <ExpandMore /> : <ArrowRightIcon />}
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
       
     
        <ListItem button className={classes.nested}>
       <Chat />
        </ListItem>
        <Divider />
        <ListItem button className={classes.nested}>
       <Contact />
        </ListItem>
        <Divider />
        <ListItem button className={classes.nested}>
        <AppDetails />
        </ListItem>
        <Divider />
        <ListItem button className={classes.nested}>
       <TodoList />
        </ListItem>
        <Divider />
        <ListItem button className={classes.nested}>
       <UserList />
        </ListItem>
        <Divider />
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Calender" />
        </ListItem>
        <Divider />
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Dragula Card" />
        </ListItem>
        <Divider />
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Cookies" />
        </ListItem>
        <Divider />
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Image Comparison" />
        </ListItem>
     
      </List>
    </Collapse>
  </List>
  
  );
}
