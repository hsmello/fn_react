import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  buttons: {
    blockSize: 100,
  },
});

function MyFloatingButton({onChangeFloatingButton}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue, label) => {
                setValue(newValue);
                onChangeFloatingButton(newValue)
            }}
            showLabels
            className={classes.root}
        >
        <BottomNavigationAction label="All" className={classes.buttons}/>
        <BottomNavigationAction label="Live" className={classes.buttons}/>
        <BottomNavigationAction label="Done" className={classes.buttons}/>
        </BottomNavigation>
    );
}

MyFloatingButton.prototype = {
    onChangeFloatingButton: PropTypes.func.isRequired,
}

export default MyFloatingButton;