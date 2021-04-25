import Gif from './Gif';

const GifList = ({ gifData }) => {

    let gifs = gifData.map(gif => 
        <Gif url={gif.images.downsized.url} />
    )

    return (
        <>
            <h1>GiftList</h1>
            <ul>
                {gifs}
            </ul>
        </>
    )
};

export default GifList;