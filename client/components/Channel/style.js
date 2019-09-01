import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    gridItem: {
        marginBottom: 20,
        paddingTop: "0!important"
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
