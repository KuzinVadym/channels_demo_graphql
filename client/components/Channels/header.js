import React, { useState } from 'react';
import {useMutation, useQuery} from '@apollo/react-hooks';
import { makeStyles } from "@material-ui/core";

import { GET_CHANNELS, INIT_CHANNELS, initUpdate } from '../queries';

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import BootstrapTooltip from "../BootstrapTooltip";

const useStyles = makeStyles(theme => ({
    headerPaper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        height: 58,
        padding: 5,
        marginBottom: 25
    },
    headerTitles: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    headerControl: {
        display: 'flex',
    },
    button: {
        color: '#ff5722',
        border: '1px solid #e0e0e0',
        borderRadius: 0
    },
    divider: {
        marginTop: 10,
        backgroundColor: "#616161",
        height: '2px'
    },
}));



const Header = ({ }) => {
    let buttonStatus = false;
    const classes = useStyles();
    const { loading, error, data } = useQuery(GET_CHANNELS);
    if (loading) return '';
    if (error) return `Error! ${error.message}`;
    if (data.channels) buttonStatus = !(data.channels.length > 0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [tooltipStatus, setTooltipStatus] = useState(true);
    const [initChannels] = useMutation(INIT_CHANNELS, {update: initUpdate});

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
        setTooltipStatus(false);
    }
    function handleClose(value) {
        setAnchorEl(null);
        initChannels({ variables: { length: value } });
    }

    return(
        <Paper className={classes.headerPaper}>
            <div className={classes.headerTitles}>
                <Typography variant="subtitle2">Channels</Typography>
                {(buttonStatus)
                    ? <div className={classes.headerControl}>
                        <BootstrapTooltip open={tooltipStatus} title="Start your demo from this button">
                            <Button variant="outlined" classes={{root: classes.button}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                INIT CHANNELS
                            </Button>
                        </BootstrapTooltip>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => handleClose(50)}>50 Channels</MenuItem>
                            <MenuItem onClick={() => handleClose(100)}>100 Channels</MenuItem>
                            <MenuItem onClick={() => handleClose(200)}>200 Channels</MenuItem>
                        </Menu>
                    </div>
                    : null
                }
            </div>
            <Divider classes={{root: classes.divider}}/>
        </Paper>
    )
};

export default Header;
