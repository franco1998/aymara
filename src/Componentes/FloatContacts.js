import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import PhoneIcon from '@material-ui/icons/Phone';

const styles = theme => ({
    margen: {
        margin: '1em',
        position:'absolute',
        right:0,
        bottom: 0 ,
      },
});

function FloatContacts(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <Fab color="primary" aria-label="add" className={classes.margen}>
            <PhoneIcon/>
        </Fab>
    </div>
  );
}
FloatContacts.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(FloatContacts);