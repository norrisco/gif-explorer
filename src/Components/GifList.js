import '../App.css';
import Gif from './Gif';
import NoGifsFound from './NoGifsFound';
import Masonry from 'react-masonry-css';

const GifList_Test = ({ gifData }) => {

    let _GifList;

    (gifData.length > 0)
    ? _GifList = gifData.map(gif => 
          <Gif
            url={gif.images.fixed_width.url} 
            key={gif.id}
            />
        )
    : _GifList = <NoGifsFound />

    const breakpoints = {
        default: 4,
        1200: 3,
        800: 2,
        500: 1,
    }

    return (
        <div className='gifListContainer'>
            <Masonry
                breakpointCols={breakpoints}
                className='my-masonry-grid'
                columnClassName='my-masonry-grid_column'
            >
                {_GifList}
            </Masonry>

        </div>
    )
};

export default GifList_Test;