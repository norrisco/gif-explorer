import '../App.css';
import { useState } from 'react';
import { Form, Input as Antd_Input, Button as Antd_Button } from 'antd';
import { Input as MUI_Input, OutlinedInput, Button as MUI_Button, IconButton, InputAdornment, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

const StyledInput = withStyles({
    root: {
      background: 'linear-gradient(90deg, #FAFAFA 80%, #bdc3c7 95%)',
      borderRadius: 2,
      border: 0,
      color: 'red',
      height: 50,
      width: '65%',
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      textDecoration: 'none',
    },
    label: {
      textTransform: 'capitalize',
    },
    underline: {
        '&::before': {
            borderBottom: '5px solid black',
        },
        '&:hover': {
            border: '1px solid blue',
        },
        '&::after': {
          borderBottom: '5px solid black',
        }
      }
  })(MUI_Input);


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

                    {/* <input className='searchInput'
                        onChange={onSearchChange} 
                        value={searchText}
                        autoFocus
                        autoComplete
                        placeholder='cats and dogs'
                    />

                    <IconButton
                        type='submit'
                        className='searchIconButton'
                    >
                        <ImageSearchIcon />
                    </IconButton> */}

                    <OutlinedInput
                        className='searchInputMUI'
                        onChange={onSearchChange} 
                        value={searchText}
                        autoFocus
                        autoComplete
                        placeholder='cats and dogs'
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton type='submit'>
                                    <ImageSearchIcon className='searchIconButtonMUI' />
                                </IconButton>
                            </InputAdornment>
                        }
                    />

                </Form.Item>
                
            </Form>
        </div>
    )
}

export default Search;