import React from 'react';

import Grid from "@material-ui/core/Grid";
import Channel from "../Channel";

import useStyles from './style';

const CustomGrid = ({type, channels, updateChannel}) => {
    const classes = useStyles();
    const ui = type === 'channels' ? { size: 3, spacing: 0 } : { size: 5, spacing: 5 }
    return(
        <Grid container spacing={ui.spacing} className={classes.grid}>
            {channels.map((channel, index) => (
                <Channel ui={ui} key={`channel_${index}`} channel={channel} updateChannel={updateChannel}/>
            ))}
        </Grid>
    );
};

export default CustomGrid;
