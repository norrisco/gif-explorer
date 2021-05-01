import '../App.css';
import Paper from "@material-ui/core/Paper";
import Tooltip from '@material-ui/core/Tooltip';

const Gif = ({ url, linkUrl, title }) => {
    return (
        <Paper 
            style={{backgroundColor: '#eeeeee', padding: '3px 3px 15px 3px'}}
            elevation={24}
            square={false}
        >
            <Tooltip title={title}>
            <a 
                href={linkUrl}
                target="_blank"
            >
                <img src={url} className='gifImage' />
            </a>
            </Tooltip>
        </Paper>
    )
};

export default Gif;