import Gif from './Gif';
import NoGifsFound from './NoGifsFound';
import { Row, Col, Slider } from 'antd';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const GifList = ({ gifData }) => {

    let _GifList;

    // (gifData.length > 0)
    // ? _GifList = gifData.map(gif => 
    //     <Gif
    //         url={gif.images.downsized.url} 
    //         key={gif.id}
    //     />)
    // : _GifList = <NoGifsFound />

    (gifData.length > 0)
    ? _GifList = gifData.map(gif => 
        <Grid item xs={4}>
          <Gif
            url={gif.images.downsized.url} 
            key={gif.id}
            />
        </Grid>
        )
    : _GifList = <NoGifsFound />

    return (
        <div className='gifList'>
            <Grid container spacing={2}>
                {_GifList}
            </Grid>
            

        </div>
    )
};

export default GifList;