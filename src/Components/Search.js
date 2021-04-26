import { useState } from 'react';
import  { Form, Input, Button } from 'antd';

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
        <>
            <Form onFinish={onFinish}>
                <Form.Item>

                    <Input 
                        onChange={onSearchChange} 
                        value={searchText}
                    />

                    <Button htmlType="submit" style={{color:'#FFF', backgroundColor: '#00CADA'}} >
                        Search
                    </Button>

                </Form.Item>
                
            </Form>
        </>
    )
}

export default Search;