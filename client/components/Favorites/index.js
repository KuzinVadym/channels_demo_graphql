import React from 'react';
import {useMutation, useQuery} from "@apollo/react-hooks";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import {GET_CHANNELS, UPDATE_CHANNELS, channelUpdate} from '../queries';
import CustomGrid from "../CustomGrid";
import useStyles from './style';


const Favorites = () => {
    const classes = useStyles();
    const { loading, error, data } = useQuery(GET_CHANNELS, { variables: { selected: true } });
    const [ updateChannel ] = useMutation(UPDATE_CHANNELS, {update: channelUpdate});
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div className={classes.main}>
            <Paper className={classes.headerPaper}>
                <Typography variant="subtitle2">Favorites</Typography>
                <Divider classes={{root: classes.divider}}/>
            </Paper>
            <CustomGrid type="favorites" channels={data.channels} updateChannel={updateChannel}/>
        </div>
    );

};

export default Favorites;
