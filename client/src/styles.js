
import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: "30px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        color: ("#807F68"),
        fontSize: "2rem",
    },
    image: {
        marginLeft: "15px",
        backgroundSize: "cover",
        width: "110px",
    },

    // THIS IS HOW TO USE MEDIA QUERIES IN METERIAL-UI
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: "column-reverse"
        }
    }

}));
