import '../App.css';
import { FileGifOutlined } from '@ant-design/icons';

const Header = () => {
    return (
        <div className='headerContainer'>
            {/* <FileGifOutlined style={{fontSize: '64px'}}/> */}
            <h1 className='mainTitle'>
                GIF Explorer
            </h1>
        </div>
    )
}

export default Header;