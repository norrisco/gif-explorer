import '../App.css';
import Paper from "@material-ui/core/Paper";
import Tooltip from '@material-ui/core/Tooltip';

const Gif = ({ url }) => {
    return (
        <Paper 
            style={{backgroundColor: '#EAEAEA', padding: '3px 3px 15px 3px'}}
            elevation={24}
            square={false}
        >
            {/* <Tooltip title='dog'> */}
            <a 
                href="https://media2.giphy.com/media/2Faz1ANKPPUY4XhT2/giphy.gif?cid=e1bb72fftszf1upx7umvudyhkfhdpc5zgdei6evbgyknfq8v&rid=giphy.gif&ct=g"
                target="_blank"
            >
                <img src={url} className='gifImage' />
            </a>
            {/* </Tooltip> */}
        </Paper>
    )
};

export default Gif;