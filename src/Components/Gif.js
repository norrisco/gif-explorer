import '../App.css';
import Paper from "@material-ui/core/Paper";

const Gif = ({ url }) => {
    return (
        <div>
            <img src={url} className='gifImage' />
        </div>
    )
};

export default Gif;