
import { makeStyles } from "@material-ui/core/styles";


export default makeStyles({
    media: {
        height: 0,
        paddingTop: "56.25%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
    },
    border: {
        border: "solid",
    },
    fullHeightCard: {
        height: "100%",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        height: "100%",
        position: "relative",
        fontSize: "14px",
    },
    overlay1: {
        position: "absolute",
        top: "20px",
        left: "20px",
        color: "white",
        fontSize: "14px",
    },
    overlay2: {
        position: "absolute",
        top: "20px",
        right: "20px",
        color: "white",
        fontSize: "14px",
    },
    grid: {
        display: "flex",
    },
    details: {
        display: "flex",
        justifyContent: "space-between",
        margin: "20px",
        fontSize: "14px",
    },
    title: {
        padding: "0 16px",
        fontSize: "16px",
    },
    cardActions: {
        padding: "0 16px 0px 0px",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "10px",
    },
    
})