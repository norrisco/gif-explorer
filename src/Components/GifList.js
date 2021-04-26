import Gif from './Gif';
import NoGifsFound from './NoGifsFound';

const GifList = ({ gifData }) => {

    let _GifList;

    (gifData.length > 0)
    ? _GifList = gifData.map(gif => 
        <Gif
            url={gif.images.downsized.url} 
            key={gif.id}
        />)
    : _GifList = <NoGifsFound />

    return (
        <>
            <ul>
                {_GifList}
            </ul>
        </>
    )
};

export default GifList;