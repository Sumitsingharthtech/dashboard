import React from 'react';
import { Box, Grid, makeStyles, IconButton, Hidden,TextField } from '@material-ui/core';

import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';

import SearchSection from './SearchSection';

import ProfileSection from './ProfileSection';
// import { DatePicker } from "@material-ui/pickers";
// import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import MobileDatePicker from '@mui/lab/MobileDatePicker';

import logo from './logo1.png'
import { drawerWidth } from './../../../store/constant';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1.25),
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    menuIcon: {
        fontSize: '1.5rem',
    },
}));

const Header = (props) => {
    const { drawerToggle } = props;
    const classes = useStyles();
   

    return (
        <React.Fragment>
            <Box width={drawerWidth}>
                <Grid container justify="space-between" alignItems="center">
                    <Hidden smDown>
                        <Grid item>
                            <Box  >
                                <img src={logo} alt="logo" style={{height:"3.5rem", width:"9.5rem" }} />

                            </Box>
                        </Grid>
                    </Hidden>
                    <Grid item>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={drawerToggle}
                        >
                            <MenuTwoToneIcon className={classes.menuIcon} />

                            
                        </IconButton>
                  
                    </Grid>
                  
                </Grid>
                
            </Box>
           
              <label  style={{ paddingTop:"3px", marginRight:"10px" }} > Start Date</label>  <TextField    
         type="Date"  /> 

          <label style={{marginLeft:"5rem"}}> End Date</label>
        <TextField    
         type="Date"  style={{marginLeft:".8rem"}} 
      /> 


            <div className={classes.grow} />
       

 
           
            <SearchSection theme="light" />
           
            <ProfileSection />
        </React.Fragment>
    );
};

export default Header;
