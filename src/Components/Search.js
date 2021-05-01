import '../App.css';
import { useState } from 'react';
import { Form, Input as Antd_Input, Button as Antd_Button } from 'antd';
import { Input as MUI_Input, OutlinedInput, Button as MUI_Button, IconButton, InputAdornment, TextField } from '@material-ui/core';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

const Search = ({ searchGiphy }) => {
    const [searchText, setSearchText] = useState('');

    const onFinish = (e) => {
        console.log(`Searched: ${searchText}`);
        searchGiphy(searchText);
        setSearchText('');
    }

    const onSearchChange = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <div className='searchContainer'>
            <Form onFinish={onFinish}>
                <Form.Item>
                    <OutlinedInput
                        className='searchInputMUI'
                        onChange={onSearchChange} 
                        value={searchText}
                        autoFocus
                        placeholder='jumping dogs'
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton type='submit'>
                                    <ImageSearchIcon className='searchIconButtonMUI' />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </Form.Item>

                <div className='giphyAttribution'><img src="./assets/giphy_logo_small.png" /></div>
            
            </Form>
        </div>
    )
}

export default Search;