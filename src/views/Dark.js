import React from 'react';
import { Typography,  Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box:  {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:theme.palette.primary,
    height:'100vh'
  }
}));

const Dark = () => {
    const classes = useStyles();

    return (
        <Box className={classes.box}>
          <Typography variant="h1" >Hola</Typography>
        </Box>
    )
}

export default Dark;
