import Gif from './Gif';

const GifList = ({ gifData }) => {

    let gifs = gifData.map(gif => 
        <Gif
            url={gif.images.downsized.url} 
            key={gif.id}
        />
    )

    return (
        <>
            <ul>
                {gifs}
            </ul>
        </>
    )
};

export default GifList;