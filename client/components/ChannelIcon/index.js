import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core";

import { StarIcon, EmptyStarIcon } from '../icons';

const useStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
        height: 48,
        alignItems: "center",
        color: "red",
    }
}));

const ChannelIcon = ({selected, onClick }) => {
    const classes = useStyles();
    return (
        <div className={classes.main} onClick={onClick}>
            {(selected) ? <StarIcon /> : <EmptyStarIcon />}
        </div>
    );

};

ChannelIcon.propTypes = {
    selected: PropTypes.bool,
};

ChannelIcon.defaultProps = {
    selected: false,
};

export default ChannelIcon;
