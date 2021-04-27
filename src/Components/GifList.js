import Gif from './Gif';
import NoGifsFound from './NoGifsFound';
import Grid from "@material-ui/core/Grid";

const GifList = ({ gifData }) => {

    let _GifList;

    (gifData.length > 0)
    ? _GifList = gifData.map(gif => 
        <Grid item xs={4} key={gif.id}>
          <Gif
            url={gif.images.downsized.url} 
            key={gif.id}
            />
        </Grid>
        )
    : _GifList = <NoGifsFound />

    return (
        <div className='gifListContainer'>

            <Grid container spacing={2}>
                {_GifList}
            </Grid>

        </div>
    )
};

export default GifList;