import React from 'react';
import {CircularProgress, Typography,} from "@mui/material";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#9ee1e7'
    },



}));

function Loading({}) {
    const classes = useStyles()
    return (
        <div className={classes.mainContainer} style={{
            height: 'calc(100vh)',
            width: 'calc(100vw)',

        }}>
           <div>
               <Typography variant="h3" component="h2" >
                   KazAeroSpace
               </Typography>
               <div>
                   <CircularProgress color="inherit"/>
               </div>
           </div>

        </div>
    );
}

export default Loading;