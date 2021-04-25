const Gif = ({ url }) => {
    return (
        <>
            <h1>Gif</h1>
            <li>
                <img src={url} />
            </li>
        </>
    )
};

export default Gif;