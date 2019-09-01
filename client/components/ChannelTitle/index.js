import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
        height: 48,
        alignItems: "center"
    }
}));

const ChannelTitle = ({ title }) => {
    const classes = useStyles();
    return(
        <div className={classes.main}>
            {title}
        </div>
    )
};

ChannelTitle.propTypes = {
    title: PropTypes.string,
};

ChannelTitle.defaultProps = {
    title: '',
};

export default ChannelTitle;
