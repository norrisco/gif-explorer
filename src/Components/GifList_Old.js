import '../App.css';
import Gif from './Gif';
import NoGifsFound from './NoGifsFound';
import { GridList, GridListTile } from "@material-ui/core";

const GifList = ({ gifData }) => {

    let _GifList;

    (gifData.length > 0)
    ? _GifList = gifData.map(gif => 
        <GridListTile key={gif.id} className='gridListTile'>
          <Gif
            url={gif.images.original.url} 
            key={gif.id}
            />
        </GridListTile>
        )
    : _GifList = <NoGifsFound />

    return (
        <div className='gifListContainer'>

            <GridList cols={4} spacing={10} className='gridList' cellHeight={'auto'}>
                {_GifList}
            </GridList>

        </div>
    )
};

export default GifList;