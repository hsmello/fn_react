import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: '2%',
  },
  typographyTitle: {
    padding: theme.spacing(1),
    paddingLeft: '20px',
    backgroundColor: 'tomato',
  },
  typographyBody: {
    padding: theme.spacing(2),
  },
}));

export default function MyGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid  >
        {/* item xs={4} */}
            <Paper className={classes.paper} elevation={8}>
                <Grid >
                       <Typography 
                            className={classes.typographyTitle} 
                            variant="h6"
                        >
                           {props.title}
                        </Typography>

                    
                </Grid>    

                <Grid >            
                    <Typography 
                        className={classes.typographyBody}
                        variant="h4" 
                        color="textSecondary"
                    >
                        {props.numbers}
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
    </div>
  );
}