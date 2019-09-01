import React from 'react';
import { useMutation, useQuery } from "@apollo/react-hooks";

import { GET_CHANNELS, UPDATE_CHANNELS, channelUpdate } from '../queries';
import CustomGrid from "../CustomGrid";
import Header from "./header";
import useStyles from './style';


const Channels = () => {
    const classes = useStyles();
    const { loading, error, data } = useQuery(GET_CHANNELS);
    const [ updateChannel ] = useMutation(UPDATE_CHANNELS, {update: channelUpdate });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div className={classes.main}>
            <Header />
            <CustomGrid type="channels" channels={data.channels} updateChannel={updateChannel}/>
        </div>
    )
};

export default Channels;
