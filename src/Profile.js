import React from 'react';
import { useNavigate } from 'react-router-dom'  
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
 

}));


export default function Profile() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const user = JSON.parse(localStorage.getItem('user'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

 
 
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            upload 
          </Typography>
            <div>
            <IconButton onClick={handleMenu} color="yellow">
              <Avatar url={user.avatar} />
            </IconButton>
            <Menu id="menu-appbar" 
              anchorEl={anchorEl} 
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
     
      <Button
              type="link"
              fullWidth
              variant="contained"
              color="gray"
              className={classes.link}
              border="2px"
              
              className="btn btn-outline-light btn-lg"
              role="button"
              to="/src/Aiforpic.js"
             
              about
             
              
            >
              Click Uploadimage
            </Button>
      {/* <Card className={classes.root} variant="outlined">
        <CardContent>
          <Avatar src={user.avatar} className={classes.large} />
          <Typography variant="h5">
          Welcome {user.fname} {user.lname}
          </Typography>
        </CardContent>
      </Card> */}
      
     
    
    </div>
    
   
  );
  // function MyLinkButton() {
  //   const navigate = useNavigate()
  //   return (
  //       <button onClick={() => navigate("/home")}>
  //         Go Home
  //       </button>
  //   );
  // }
}