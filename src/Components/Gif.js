import '../App.css';
import Paper from "@material-ui/core/Paper";
import Tooltip from '@material-ui/core/Tooltip';

const Gif = ({ url }) => {
    return (
        <div>
            {/* <Tooltip title='dog'> */}
            <a 
                href="https://media2.giphy.com/media/2Faz1ANKPPUY4XhT2/giphy.gif?cid=e1bb72fftszf1upx7umvudyhkfhdpc5zgdei6evbgyknfq8v&rid=giphy.gif&ct=g"
                target="_blank"
            >
                <img src={url} className='gifImage' />
            </a>
            {/* </Tooltip> */}
        </div>
    )
};

export default Gif;