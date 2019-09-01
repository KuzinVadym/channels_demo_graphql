import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core";

import { AvatarIcon } from '../icons';

const useStyles = makeStyles(theme => ({
    main: {
        width: 48,
        height: 48,
    },
    img: {
        margin: 4,
        width: 44,
        height: 44,
        objectFit: "contain",
    }
}));

const ChannelLogo = ({logo_token}) => {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            {(logo_token)
                ? <img className={classes.img} src={`https://images.zattic.com/logos/${logo_token}/white/240x135.png`} alt="" />
                : <AvatarIcon />
            }
        </div>
    );

};

ChannelLogo.propTypes = {
    logo_token: PropTypes.string,
};

ChannelLogo.defaultProps = {
    logo_token: undefined,
};

export default ChannelLogo;
