import { Gif } from './Gif';

const GifList = ({ gifs }) => {
    return (
        <>
            <h1>{gifs?.url}</h1>
            <img src={gifs[1]?.images.downsized.url} />
            {/* <h1>{gifs[1].url}</h1> */}
        </>
    )
};

export default GifList;