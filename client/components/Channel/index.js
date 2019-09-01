import React from 'react';
import PropTypes from 'prop-types';

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";

import ChannelTitle from "../ChannelTitle";
import ChannelIcon from "../ChannelIcon";
import ChannelLogo from "../ChannelLogo";

import useStyles from './style';

const Channel = ({ ui, channel, updateChannel }) => {
    const classes = useStyles();
    console.log("render");
    return (
        <Grid  className={classes.gridItem}  item  xs={ui.size} sm={ui.size} md={ui.size} lg={ui.size}>
            <Paper>
                <Grid container spacing={2}>
                    <Grid item >
                        <ButtonBase className={classes.image}>
                            <ChannelLogo logo_token={channel.logo_token}/>
                        </ButtonBase>
                    </Grid>
                    <Grid item sm={4} md={7} lg={7}>
                        <ChannelTitle title={channel.title}/>
                    </Grid>
                    <Grid item >
                        <ChannelIcon
                            selected={channel.selected}
                            onClick={() => {updateChannel({ variables: { _id: channel._id, selected: channel.selected } })}}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

Channel.propTypes = {
    channel: PropTypes.object,
};

Channel.defaultProps = {
    channel: {},
};

function areEqual(prevProps, nextProps) {
    return JSON.stringify(prevProps.channel) === JSON.stringify(nextProps.channel);
}

export default React.memo(Channel, areEqual);
