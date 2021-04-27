import Paper from "@material-ui/core/Paper";

const Gif = ({ url }) => {
    return (
        <Paper>
            <img src={url} style={{width: '100%'}}/>
        </Paper>
    )
};

export default Gif;