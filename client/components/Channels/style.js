import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        width: "60%",
        padding: "10px"
    },
    grid: {
        marginTop: 25,
    },
    gridItem: {
        marginBottom: 20,
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
