import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        width: "40%",
        padding: "10px"
    },
    headerPaper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        height: 58,
        padding: 5,
        marginBottom: 25
    },
    divider: {
        backgroundColor: "#616161",
        height: '2px'
    },
    grid: {
        margin: 0,
        alignContent: 'flex-start',
        width: '100%'
    },
    image: {
        width: 48,
        height: 48,
        marginLeft: 5,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5
    },
}));

export default useStyles;
